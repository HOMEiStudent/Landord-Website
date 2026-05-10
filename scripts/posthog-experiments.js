/**
 * HOMEi PM — A/B/C Test Copy Variants
 * Feature flag: homei-pm-website-ab-test (PostHog multivariate)
 * Variants: control (33%), variant-a (33%), variant-b (34%)
 *
 * Control  = Current baseline wording (unchanged from original site copy)
 * Variant A = Category-term SEO framing (landlord app, tenant portal, estate agent)
 * Variant B = RRA compliance SEO framing (Renters' Rights Act, periodic tenancy, Section 13)
 *
 * Elements are targeted via data-ab-key attributes in the HTML.
 * Uses innerHTML to support inline markup in subheadings.
 */
(function () {
  if (!window.posthog) return;
  posthog.onFeatureFlags(function () {
    var variant = posthog.getFeatureFlag('homei-pm-website-ab-test');
    if (!variant) return;
    var copyMap = {
      'control': {
        'hero-h1': 'Run your student lets without the headaches',
        'hero-subhead': 'We’re building property management software designed for the <strong>Renters’ Rights Act era</strong>. Manage inspections, track Section 13 rent increases, handle maintenance requests and communicate with tenants, all from one platform, connected to <a href="https://homeistudent.com">HOMEi, the Shared Household Organiser</a>. We’re inviting <strong>50 landlords to pilot it free for 1 year</strong>.',
        'features-h2': 'Manage inspections, maintenance and rent in one place',
        'features-subhead': 'Inspections, maintenance tracking, Renters’ Rights Act compliance tools and tenant communication — all managed from your browser. Here’s what we’re building.',
        'inspection-h2': 'A Better Way to Inspect Your Properties',
        'rra-h2': 'Stay compliant with the Renters’ Rights Act 2026',
        'ecosystem-h2': 'Two Platforms, One Connected System'
      },
      'variant-a': {
        'hero-h1': 'The landlord app that replaces spreadsheets, emails and site visits',
        'hero-subhead': 'A <strong>tenant portal</strong> and landlord dashboard that handles <strong>property inspections</strong>, maintenance tracking and tenant communication — all in your browser. No installs, no spreadsheets, no missed emails. Built for UK <strong>estate agents</strong>, letting agents and private landlords. Connected to <a href="https://homeistudent.com">HOMEi, the Shared Household Organiser</a>. We’re inviting <strong>50 landlords to pilot it free for 1 year</strong>.',
        'features-h2': 'Your tenant portal, property inspections and maintenance tracker in one dashboard',
        'features-subhead': 'A <strong>landlord app</strong> with everything you need — digital property inspection checklists, tenant maintenance reporting, direct messaging and full portfolio visibility. Here’s what we’re building.',
        'inspection-h2': 'Digital property inspection checklists — no site visits needed',
        'rra-h2': 'Renters’ Rights Act tools built into your landlord dashboard',
        'ecosystem-h2': 'Tenant Portal Meets Landlord App — One Connected System'
      },
      'variant-b': {
        'hero-h1': 'Renters’ Rights Act compliant from day one',
        'hero-subhead': 'Section 21 is gone. <strong>Periodic tenancies</strong> are here. <strong>Section 13</strong> rules have changed. We’re building the property management platform that keeps you on the right side of the Renters’ Rights Act — inspections, compliance tracking, evidence packs and tenant communication, all in one place. Connected to <a href="https://homeistudent.com">HOMEi, the Shared Household Organiser</a>. We’re inviting <strong>50 landlords to pilot it free for 1 year</strong>.',
        'features-h2': 'Inspections, Section 13 tracking and compliance records in one place',
        'features-subhead': 'Track <strong>periodic tenancy</strong> deadlines, build <strong>Section 8 evidence packs</strong>, manage maintenance with timestamped audit trails and communicate with tenants — all from your browser. Here’s what we’re building.',
        'inspection-h2': 'Build your Section 8 evidence trail with tenant-led property inspections',
        'rra-h2': 'Every compliance deadline tracked. Every notice stored.',
        'ecosystem-h2': 'Compliance-Ready From Both Sides — One Connected System'
      }
    };
    var variantCopy = copyMap[variant];
    if (!variantCopy) return;
    var keys = Object.keys(variantCopy);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var el = document.querySelector('[data-ab-key="' + key + '"]');
      if (el) {
        el.innerHTML = variantCopy[key];
      }
    }
    posthog.capture('ab_variant_shown', {
      variant: variant,
      page: window.location.pathname,
      elements_swapped: keys.length
    });
  });
})();
