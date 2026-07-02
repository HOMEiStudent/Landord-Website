/*
 * HOMEi PM Savings Calculator, front-end logic.
 * Reads every value from window.CALCULATOR_DATA (js/calculator-data.js).
 * No numbers are hard-coded here. The maths mirrors the signed-off Excel model
 * exactly and is verified against the test cases in the data file.
 */
(function () {
    'use strict';

    var data = window.CALCULATOR_DATA;
    if (!data) { return; }

    var A = data.assumptions;
    var C = data.compliance;
    var COMPLIANCE_DOCS = ['CP12', 'EICR', 'EPC'];

    // Defaults from the brief.
    var DEFAULT_AREA = 'Sheffield';
    var state = {
        areaCode: null,
        bedrooms: 4,
        management: 'Self-managed',
        propertyType: 'Student HMO'
    };

    // ----- The calculation. One case per index: 0 low, 1 base, 2 high. -----
    function computeCase(monthlyRent, i) {
        var hmoUplift = (state.propertyType === 'Student HMO') ? A.hmo_uplift[i] : 1;

        // Direct savings (cash per year)
        var netProb = (A.eow_raw_prob[i] / 100) * (A.preventable_share[i] / 100) * hmoUplift;
        var excessAvoided = netProb * A.eow_excess[i];
        var premiumAvoided = netProb * (A.premium_base[i] * A.premium_uplift[i] / 100 * A.premium_years[i]);
        var belowExcess = A.belowexcess_faults[i] * A.belowexcess_repair[i] * hmoUplift;
        var maintenance = excessAvoided + premiumAvoided + belowExcess;

        var inspection;
        if (state.management === 'Agent-managed') {
            inspection = A.inspections_per_year[i] * (A.agent_fee[i] - A.homei_digital_cost[i]);
        } else {
            inspection = A.inspections_per_year[i] * ((A.self_travel[i] + A.self_hours[i] * A.time_value[i]) - (A.homei_hours[i] * A.time_value[i] + A.homei_digital_cost[i]));
        }

        var rentUplift = A.uplift_months[i] * monthlyRent * A.rent_growth[i] / 100;
        var totalDirect = maintenance + inspection + rentUplift;

        // Expected annual risk mitigated (probability weighted, per year)
        var complianceExpected = 0;
        for (var d = 0; d < COMPLIANCE_DOCS.length; d++) {
            var doc = C[COMPLIANCE_DOCS[d]];
            complianceExpected += (1 / doc.cycle) * (doc.miss[i] / 100) * (doc.caught[i] / 100) * doc.fine[i];
        }

        // Exposure if the event occurs (rare worst case, not annual)
        var complianceMax = C.CP12.max + C.EICR.max + C.EPC.max;
        var s13 = A.uplift_months[i] * monthlyRent * A.rent_growth[i] / 100;
        var ground4a = (state.propertyType === 'Student HMO') ? A.ground4a_months[i] * monthlyRent : 0;
        var s8 = A.reservice_delay[i] * monthlyRent + A.wasted_court_fee[i];
        var possession = s13 + ground4a + s8;

        return {
            maintenance: maintenance,
            inspection: inspection,
            rentUplift: rentUplift,
            totalDirect: totalDirect,
            complianceExpected: complianceExpected,
            complianceMax: complianceMax,
            s13: s13,
            ground4a: ground4a,
            s8: s8,
            possession: possession
        };
    }

    function compute() {
        var area = null;
        for (var k = 0; k < data.areas.length; k++) {
            if (data.areas[k].code === state.areaCode) { area = data.areas[k]; break; }
        }
        if (!area) { return null; }
        var monthlyRent = area.rent[String(state.bedrooms)];
        if (monthlyRent === undefined || monthlyRent === null) { return null; }
        return {
            area: area,
            monthlyRent: monthlyRent,
            low: computeCase(monthlyRent, 0),
            base: computeCase(monthlyRent, 1),
            high: computeCase(monthlyRent, 2)
        };
    }

    // ----- Formatting. Full precision in, whole pounds out. -----
    function gbp(value) {
        return '£' + Math.round(value).toLocaleString('en-GB');
    }

    function range(low, high) {
        return gbp(low) + ' to ' + gbp(high);
    }

    // ----- Rendering -----
    var resultsEl = document.getElementById('calcResults');
    var rentLineEl = document.getElementById('rentLine');

    function renderMessage(msg) {
        rentLineEl.textContent = '';
        resultsEl.innerHTML = '<div class="calc-card"><p class="calc-message">' + msg + '</p></div>';
    }

    function line(label, sub, base, low, high) {
        return '' +
            '<div class="calc-line">' +
                '<div class="calc-line-label">' + label +
                    (sub ? '<small>' + sub + '</small>' : '') +
                '</div>' +
                '<div class="calc-line-values">' +
                    '<div class="calc-line-base">' + gbp(base) + '</div>' +
                    '<div class="calc-line-range">' + range(low, high) + '</div>' +
                '</div>' +
            '</div>';
    }

    function render() {
        var r = compute();
        if (!r) {
            renderMessage('We do not have a rent figure for that combination yet. Try another area or a different number of bedrooms.');
            return;
        }

        rentLineEl.textContent = 'Based on a median rent of ' + gbp(r.monthlyRent) + ' a month for a ' + state.bedrooms + '-bed in ' + r.area.area + '.';

        var isHMO = (state.propertyType === 'Student HMO');

        var html = '';

        // 1. Direct savings, headline
        html += '<div class="calc-headline">' +
            '<p class="calc-headline-label">Direct savings per year</p>' +
            '<div class="calc-headline-figure">' + gbp(r.base.totalDirect) + '</div>' +
            '<p class="calc-headline-range">Ranges from ' + range(r.low.totalDirect, r.high.totalDirect) + ' depending on how the year goes.</p>' +
            '<p class="calc-headline-context">That is money back in your pocket each year from fewer wasted inspection trips, less avoidable maintenance, and rent that keeps pace with the market.</p>' +
            '<div class="calc-cta-row">' +
                '<a href="/#contact" class="btn btn-primary btn-lg">Join the waitlist today</a>' +
            '</div>' +
        '</div>';

        // Direct savings breakdown
        html += '<div class="calc-card">' +
            '<h2>Where the direct saving comes from</h2>' +
            '<div class="calc-breakdown">' +
                line('Maintenance saved', 'Preventable water damage caught early', r.base.maintenance, r.low.maintenance, r.high.maintenance) +
                line('Inspection saved', state.management === 'Agent-managed' ? 'Fewer agent inspection fees' : 'Less of your own time and travel', r.base.inspection, r.low.inspection, r.high.inspection) +
                line('Rent uplift captured', 'Rent that keeps pace using a proper Section 13', r.base.rentUplift, r.low.rentUplift, r.high.rentUplift) +
            '</div>' +
        '</div>';

        // 2. Expected annual risk mitigated
        html += '<div class="calc-card calc-block">' +
            '<p class="calc-block-head">Expected annual risk mitigated</p>' +
            '<p class="calc-block-note">This is how often each certificate lapses, times how often that lapse is caught and fined, times the fine. It is a realistic yearly figure, not a maximum.</p>' +
            '<div class="calc-risk-figure">' + gbp(r.base.complianceExpected) + '</div>' +
            '<p class="calc-risk-range">Ranges from ' + range(r.low.complianceExpected, r.high.complianceExpected) + ' a year.</p>' +
        '</div>';

        // 3. Exposure if the event occurs
        var possessionTile = '<div class="calc-risk-tile">' +
            '<span class="tag tag-annual">If it goes wrong</span>' +
            '<div class="calc-risk-figure">' + gbp(r.base.possession) + '</div>' +
            '<p class="calc-risk-range">Possession costs, ' + range(r.low.possession, r.high.possession) + '.' +
            (isHMO ? '' : ' Ground 4A does not apply to a single let, so it is not included.') +
            '</p>' +
        '</div>';

        html += '<div class="calc-card calc-block">' +
            '<p class="calc-block-head">Exposure if the event occurs</p>' +
            '<p class="calc-block-note">These are the downsides HOMEi PM protects against when things go wrong. They are rare worst cases, not costs you expect every year.</p>' +
            '<div class="calc-risk-grid">' +
                '<div class="calc-risk-tile">' +
                    '<span class="tag tag-rare">Rare</span>' +
                    '<div class="calc-risk-figure">' + gbp(r.base.complianceMax) + '</div>' +
                    '<p class="calc-risk-range">Worst-case compliance fines if all three certificates lapse and are caught.</p>' +
                '</div>' +
                possessionTile +
            '</div>' +
        '</div>';

        // Separation note and method link
        html += '<p class="calc-separate-note">Direct savings and risk are kept separate. The saving is cash you keep each year. The risk figures show what is at stake, not money you add on top.</p>';

        html += '<p class="calc-method-link"><a href="/how-the-calculator-works">See exactly how these figures are worked out</a>.</p>';

        resultsEl.innerHTML = html;
    }

    // ----- Segmented controls -----
    function setupSegmented(groupId, key, cast) {
        var group = document.getElementById(groupId);
        var buttons = group.querySelectorAll('button');
        function sync() {
            for (var i = 0; i < buttons.length; i++) {
                var raw = buttons[i].getAttribute('data-value');
                var val = cast ? cast(raw) : raw;
                buttons[i].setAttribute('aria-pressed', String(val === state[key]));
            }
        }
        group.addEventListener('click', function (e) {
            var btn = e.target.closest('button');
            if (!btn) { return; }
            var raw = btn.getAttribute('data-value');
            state[key] = cast ? cast(raw) : raw;
            sync();
            render();
        });
        sync();
    }

    // ----- Location combobox -----
    var input = document.getElementById('locationInput');
    var list = document.getElementById('locationList');
    var activeIndex = -1;
    var currentMatches = [];

    function areasSorted() {
        return data.areas.slice().sort(function (a, b) {
            return a.area.localeCompare(b.area, 'en-GB');
        });
    }
    var SORTED = areasSorted();

    function openList(matches) {
        currentMatches = matches;
        activeIndex = -1;
        if (matches.length === 0) {
            list.innerHTML = '<div class="calc-combo-empty">No matching area. Check the spelling or try the council name.</div>';
        } else {
            var html = '';
            for (var i = 0; i < matches.length; i++) {
                html += '<div class="calc-combo-option" role="option" data-code="' + matches[i].code + '" data-index="' + i + '">' + matches[i].area + '</div>';
            }
            list.innerHTML = html;
        }
        list.classList.remove('hidden');
        input.setAttribute('aria-expanded', 'true');
    }

    function closeList() {
        list.classList.add('hidden');
        input.setAttribute('aria-expanded', 'false');
        activeIndex = -1;
    }

    function filterAreas(query) {
        var q = query.trim().toLowerCase();
        if (!q) { return SORTED.slice(0, 50); }
        var starts = [];
        var contains = [];
        for (var i = 0; i < SORTED.length; i++) {
            var name = SORTED[i].area.toLowerCase();
            if (name.indexOf(q) === 0) { starts.push(SORTED[i]); }
            else if (name.indexOf(q) !== -1) { contains.push(SORTED[i]); }
        }
        return starts.concat(contains).slice(0, 50);
    }

    function selectArea(area) {
        state.areaCode = area.code;
        input.value = area.area;
        closeList();
        render();
    }

    input.addEventListener('focus', function () {
        openList(filterAreas(input.value));
    });

    input.addEventListener('input', function () {
        openList(filterAreas(input.value));
    });

    input.addEventListener('keydown', function (e) {
        if (list.classList.contains('hidden')) {
            if (e.key === 'ArrowDown') { openList(filterAreas(input.value)); e.preventDefault(); }
            return;
        }
        var options = list.querySelectorAll('.calc-combo-option');
        if (e.key === 'ArrowDown') {
            activeIndex = Math.min(activeIndex + 1, options.length - 1);
            updateActive(options);
            e.preventDefault();
        } else if (e.key === 'ArrowUp') {
            activeIndex = Math.max(activeIndex - 1, 0);
            updateActive(options);
            e.preventDefault();
        } else if (e.key === 'Enter') {
            if (activeIndex >= 0 && currentMatches[activeIndex]) {
                selectArea(currentMatches[activeIndex]);
                e.preventDefault();
            }
        } else if (e.key === 'Escape') {
            closeList();
        }
    });

    function updateActive(options) {
        for (var i = 0; i < options.length; i++) {
            options[i].classList.toggle('active', i === activeIndex);
        }
        if (activeIndex >= 0 && options[activeIndex]) {
            options[activeIndex].scrollIntoView({ block: 'nearest' });
        }
    }

    list.addEventListener('mousedown', function (e) {
        // mousedown so it fires before input blur
        var opt = e.target.closest('.calc-combo-option');
        if (!opt) { return; }
        var code = opt.getAttribute('data-code');
        for (var i = 0; i < currentMatches.length; i++) {
            if (currentMatches[i].code === code) { selectArea(currentMatches[i]); break; }
        }
        e.preventDefault();
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.calc-combo')) { closeList(); }
    });

    // ----- Init -----
    function init() {
        setupSegmented('bedroomsGroup', 'bedrooms', function (v) { return parseInt(v, 10); });
        setupSegmented('managementGroup', 'management', null);
        setupSegmented('typeGroup', 'propertyType', null);

        var def = null;
        for (var i = 0; i < data.areas.length; i++) {
            if (data.areas[i].area === DEFAULT_AREA) { def = data.areas[i]; break; }
        }
        if (!def) { def = SORTED[0]; }
        state.areaCode = def.code;
        input.value = def.area;

        render();
    }

    init();
})();
