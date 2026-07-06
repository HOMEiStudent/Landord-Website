/*
 * Savings calculator page: binds the redesigned inputs to the production
 * engine (HOMEI_CALC + CALCULATOR_DATA). No maths lives here; every figure
 * comes from the verified engine over the full 342-authority dataset.
 * Direct savings and risk figures are rendered in separate cards and are
 * never summed.
 */
(function () {
    'use strict';

    var data = window.CALCULATOR_DATA;
    var engine = window.HOMEI_CALC;
    if (!data || !engine) { return; }

    // Defaults: the founders' reference scenario (Sheffield 4-bed self-managed
    // student HMO = £574), matching the home page mini-calculator.
    var state = { areaCode: null, bedrooms: 4, management: 'Self-managed', propertyType: 'Student HMO' };

    var select = document.getElementById('calcLocation');
    var bedsGroup = document.getElementById('calcBeds');
    var mgmtGroup = document.getElementById('calcMgmt');
    var typeGroup = document.getElementById('calcType');

    var sorted = data.areas.slice().sort(function (a, b) {
        return a.area.localeCompare(b.area, 'en-GB');
    });
    var opts = '';
    for (var i = 0; i < sorted.length; i++) {
        opts += '<option value="' + sorted[i].code + '">' + sorted[i].area + '</option>';
    }
    select.innerHTML = opts;
    for (var d = 0; d < data.areas.length; d++) {
        if (data.areas[d].area === 'Sheffield') { state.areaCode = data.areas[d].code; break; }
    }
    select.value = state.areaCode;

    function gbp(v) { return Math.round(v).toLocaleString('en-GB'); }
    function txt(id, value) { var el = document.getElementById(id); if (el) { el.textContent = value; } }

    function syncSegment(group, value) {
        var buttons = group.querySelectorAll('button');
        for (var i = 0; i < buttons.length; i++) {
            var active = buttons[i].getAttribute('data-value') === String(value);
            buttons[i].style.border = '1.5px solid ' + (active ? '#E8730C' : '#D5DBE4');
            buttons[i].style.background = active ? '#FCEEDE' : '#fff';
            buttons[i].style.color = active ? '#B95E0A' : '#4A5A70';
            buttons[i].setAttribute('aria-pressed', String(active));
        }
    }

    function render() {
        var r = engine.computeSavings(data, state.areaCode, state.bedrooms, state.management, state.propertyType);
        if (!r) { return; }
        var isHmo = state.propertyType === 'Student HMO';

        txt('calcRent', gbp(r.monthlyRent));
        txt('calcRentBeds', state.bedrooms);
        txt('calcRentBeds2', state.bedrooms);

        // Direct savings (navy card)
        txt('directBase', gbp(r.base.totalDirect));
        txt('directLow', gbp(r.low.totalDirect));
        txt('directHigh', gbp(r.high.totalDirect));
        txt('maintBase', gbp(r.base.maintenance));
        txt('maintLow', gbp(r.low.maintenance));
        txt('maintHigh', gbp(r.high.maintenance));
        txt('inspectionBase', gbp(r.base.inspection));
        txt('inspectionLow', gbp(r.low.inspection));
        txt('inspectionHigh', gbp(r.high.inspection));
        txt('upliftBase', gbp(r.base.rentUplift));
        txt('upliftLow', gbp(r.low.rentUplift));
        txt('upliftHigh', gbp(r.high.rentUplift));

        document.getElementById('inspectionDesc').textContent = (state.management === 'Agent-managed')
            ? "Digital inspections replace an agent's per-visit fee"
            : 'Digital inspections replace your own visits: time and travel saved';

        // Average annual risk mitigated (white card)
        txt('complianceBase', gbp(r.base.complianceExpected));
        txt('complianceLow', gbp(r.low.complianceExpected));
        txt('complianceHigh', gbp(r.high.complianceExpected));

        // What is at stake (amber card)
        txt('worstCase', gbp(r.base.complianceMax));
        txt('possessionCost', gbp(r.base.s8));

        var g4aRow = document.getElementById('ground4aRow');
        var possessionRow = document.getElementById('possessionRow');
        if (isHmo) {
            g4aRow.classList.remove('hidden');
            txt('ground4aCost', gbp(r.base.ground4a));
            possessionRow.style.borderBottom = '1px solid #F5D9BB';
        } else {
            g4aRow.classList.add('hidden');
            possessionRow.style.borderBottom = 'none';
        }
    }

    select.addEventListener('change', function () { state.areaCode = select.value; render(); });
    bedsGroup.addEventListener('click', function (e) {
        var btn = e.target.closest('button'); if (!btn) { return; }
        state.bedrooms = parseInt(btn.getAttribute('data-value'), 10);
        syncSegment(bedsGroup, state.bedrooms); render();
    });
    mgmtGroup.addEventListener('click', function (e) {
        var btn = e.target.closest('button'); if (!btn) { return; }
        state.management = btn.getAttribute('data-value');
        syncSegment(mgmtGroup, state.management); render();
    });
    typeGroup.addEventListener('click', function (e) {
        var btn = e.target.closest('button'); if (!btn) { return; }
        state.propertyType = btn.getAttribute('data-value');
        syncSegment(typeGroup, state.propertyType); render();
    });

    syncSegment(bedsGroup, state.bedrooms);
    syncSegment(mgmtGroup, state.management);
    syncSegment(typeGroup, state.propertyType);
    render();
})();
