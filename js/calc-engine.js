/*
 * HOMEi PM savings calculation engine (pure functions, no DOM).
 * The arithmetic below is copied verbatim from the verified production
 * calculator and matches the founders' Excel model (V4, 01_07_2026) to
 * the penny for every test case. Do not alter the formulas, the
 * low/base/high indexing, or the rule that direct savings and risk
 * figures are never summed.
 *
 * Reads window.CALCULATOR_DATA (js/calculator-data.js).
 */
(function () {
    'use strict';

    var COMPLIANCE_DOCS = ['CP12', 'EICR', 'EPC'];

    function computeCase(data, monthlyRent, i, management, propertyType) {
        var A = data.assumptions;
        var C = data.compliance;
        var hmoUplift = (propertyType === 'Student HMO') ? A.hmo_uplift[i] : 1;

        // Direct savings (cash per year)
        var netProb = (A.eow_raw_prob[i] / 100) * (A.preventable_share[i] / 100) * hmoUplift;
        var excessAvoided = netProb * A.eow_excess[i];
        var premiumAvoided = netProb * (A.premium_base[i] * A.premium_uplift[i] / 100 * A.premium_years[i]);
        var belowExcess = A.belowexcess_faults[i] * A.belowexcess_repair[i] * hmoUplift;
        var maintenance = excessAvoided + premiumAvoided + belowExcess;

        var inspection;
        if (management === 'Agent-managed') {
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
        var ground4a = (propertyType === 'Student HMO') ? A.ground4a_months[i] * monthlyRent : 0;
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

    function computeSavings(data, areaCode, bedrooms, management, propertyType) {
        var area = null;
        for (var k = 0; k < data.areas.length; k++) {
            if (data.areas[k].code === areaCode) { area = data.areas[k]; break; }
        }
        if (!area) { return null; }
        var monthlyRent = area.rent[String(bedrooms)];
        if (monthlyRent === undefined || monthlyRent === null) { return null; }
        return {
            area: area,
            monthlyRent: monthlyRent,
            low: computeCase(data, monthlyRent, 0, management, propertyType),
            base: computeCase(data, monthlyRent, 1, management, propertyType),
            high: computeCase(data, monthlyRent, 2, management, propertyType)
        };
    }

    window.HOMEI_CALC = { computeSavings: computeSavings };
})();
