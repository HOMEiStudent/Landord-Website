/*
 * Home page mini savings calculator.
 * Location + bedrooms only; management and property type are fixed to the
 * founders' reference scenario (Self-managed, Student HMO), so Sheffield
 * 4-bed shows the reference £574. All maths comes from HOMEI_CALC
 * (js/calc-engine.js) with the production dataset; nothing is stored.
 */
(function () {
    'use strict';

    var data = window.CALCULATOR_DATA;
    var engine = window.HOMEI_CALC;
    if (!data || !engine) { return; }

    var select = document.getElementById('miniCalcLocation');
    var bedsGroup = document.getElementById('miniCalcBeds');
    var figure = document.getElementById('miniCalcFigure');
    if (!select || !bedsGroup || !figure) { return; }

    var state = { areaCode: null, bedrooms: 4 };

    var sorted = data.areas.slice().sort(function (a, b) {
        return a.area.localeCompare(b.area, 'en-GB');
    });

    var options = '';
    for (var i = 0; i < sorted.length; i++) {
        options += '<option value="' + sorted[i].code + '">' + sorted[i].area + '</option>';
    }
    select.innerHTML = options;

    for (var d = 0; d < data.areas.length; d++) {
        if (data.areas[d].area === 'Sheffield') { state.areaCode = data.areas[d].code; break; }
    }
    select.value = state.areaCode;

    function render() {
        var r = engine.computeSavings(data, state.areaCode, state.bedrooms, 'Self-managed', 'Student HMO');
        if (!r) { return; }
        figure.textContent = Math.round(r.base.totalDirect).toLocaleString('en-GB');
    }

    function syncBeds() {
        var buttons = bedsGroup.querySelectorAll('button');
        for (var i = 0; i < buttons.length; i++) {
            var active = parseInt(buttons[i].getAttribute('data-value'), 10) === state.bedrooms;
            buttons[i].style.border = '1.5px solid ' + (active ? '#E8730C' : '#D5DBE4');
            buttons[i].style.background = active ? '#FCEEDE' : '#fff';
            buttons[i].style.color = active ? '#B95E0A' : '#4A5A70';
            buttons[i].setAttribute('aria-pressed', String(active));
        }
    }

    select.addEventListener('change', function () {
        state.areaCode = select.value;
        render();
    });

    bedsGroup.addEventListener('click', function (e) {
        var btn = e.target.closest('button');
        if (!btn) { return; }
        state.bedrooms = parseInt(btn.getAttribute('data-value'), 10);
        syncBeds();
        render();
    });

    syncBeds();
    render();
})();
