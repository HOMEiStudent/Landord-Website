document.addEventListener('click', function(e) {
    var target = e.target.closest('[data-cta-id]');
    if (target && window.posthog) {
        posthog.capture('cta_clicked', {
            cta_id: target.getAttribute('data-cta-id'),
            cta_text: target.textContent.trim(),
            page: window.location.pathname
        });
    }
});
