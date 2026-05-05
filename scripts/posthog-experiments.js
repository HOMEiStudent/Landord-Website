(function() {
    if (!window.posthog) return;

    posthog.onFeatureFlags(function() {
        var variant = posthog.getFeatureFlag('homei-pm-website-ab-test');
        var h1 = document.querySelector('h1');
        if (!h1 || !variant) return;

        var copy = {
            'control': 'Run your student lets without the headaches',
            'variant-a': 'Stay Renters\' Rights Act ready, rent confidently',
            'variant-b': 'Built by a former HMO landlord, for landlords'
        };

        if (copy[variant]) {
            h1.textContent = copy[variant];
            posthog.capture('hero_variant_shown', {
                variant: variant,
                headline: copy[variant]
            });
        }
    });
})();
