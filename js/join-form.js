/*
 * Waiting-list form for the Join page.
 * Submits to the EXISTING Web3Forms endpoint with the SAME field names the
 * live site already posts (access_key, subject, email, name, role, feedback).
 * The management toggle maps to `role`; the notes textarea to `feedback`.
 * Client-side email validation and the success state are new (from the
 * design); the submission target is unchanged. Confirmation email routing
 * is handled in Web3Forms' own settings.
 */
(function () {
    'use strict';

    var WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
    var ACCESS_KEY = 'a1ac79e5-9df0-46b7-8379-d913a8a74b11';

    var form = document.getElementById('joinForm');
    if (!form) { return; }

    var emailInput = document.getElementById('joinEmail');
    var emailError = document.getElementById('joinEmailError');
    var nameInput = document.getElementById('joinName');
    var notesInput = document.getElementById('joinNotes');
    var typeGroup = document.getElementById('joinType');
    var submitBtn = document.getElementById('joinSubmit');
    var formError = document.getElementById('joinFormError');
    var success = document.getElementById('joinSuccess');

    var management = 'Self-managed';

    typeGroup.addEventListener('click', function (e) {
        var btn = e.target.closest('button');
        if (!btn) { return; }
        management = btn.getAttribute('data-value');
        var buttons = typeGroup.querySelectorAll('button');
        for (var i = 0; i < buttons.length; i++) {
            var active = buttons[i] === btn;
            buttons[i].style.border = '1.5px solid ' + (active ? '#E8730C' : '#D5DBE4');
            buttons[i].style.background = active ? '#FCEEDE' : '#fff';
            buttons[i].style.color = active ? '#B95E0A' : '#4A5A70';
        }
    });

    function validEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    emailInput.addEventListener('input', function () {
        emailError.classList.add('hidden');
        emailInput.style.borderColor = '#D5DBE4';
    });

    function captureConversion() {
        if (window.posthog) {
            posthog.capture('form_submitted', {
                form_id: 'join-waiting-list',
                role: management,
                has_feedback: !!((notesInput.value || '').trim()),
                page: window.location.pathname
            });
        }
    }

    function showSuccess(email, name) {
        var first = (name.trim().split(' ')[0]) || 'landlord';
        document.getElementById('joinFirstName').textContent = first;
        document.getElementById('joinEmailBack').textContent = email;
        form.classList.add('hidden');
        success.classList.remove('hidden');
        success.style.display = 'flex';
        success.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        formError.classList.add('hidden');

        var email = emailInput.value.trim();
        var name = nameInput.value.trim();

        if (!validEmail(email)) {
            emailError.classList.remove('hidden');
            emailInput.style.borderColor = '#C13515';
            emailInput.focus();
            return;
        }

        var fd = new FormData();
        fd.append('access_key', ACCESS_KEY);
        fd.append('subject', 'New waiting-list sign-up from HOMEi PM website');
        fd.append('email', email);
        fd.append('name', name);
        fd.append('role', management);
        fd.append('feedback', notesInput.value.trim());

        var originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: fd })
            .then(function (response) { return response.json(); })
            .then(function (data) {
                if (data && data.success) {
                    captureConversion();
                    showSuccess(email, name);
                } else {
                    formError.classList.remove('hidden');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            })
            .catch(function () {
                // CORS can block the response even when submission succeeds.
                // Retry opaque and assume success (mirrors the existing site).
                fetch(WEB3FORMS_ENDPOINT, { method: 'POST', mode: 'no-cors', body: fd })
                    .then(function () {
                        captureConversion();
                        showSuccess(email, name);
                    })
                    .catch(function () {
                        formError.classList.remove('hidden');
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    });
            });
    });
})();
