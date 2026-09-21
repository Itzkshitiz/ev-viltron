/**
 * VILTRON EV Charging Infrastructure - Contact & Lead Gen Form Handler
 */

function initFormHandler() {
  const quoteForm = document.getElementById('quoteForm');
  const toast = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  if (!quoteForm) return;

  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const city = document.getElementById('city').value.trim();
    const businessType = document.getElementById('businessType').value;
    const chargerReq = document.getElementById('chargerRequirement').value;
    const message = document.getElementById('message').value.trim();

    // Basic Validation
    if (!fullName || !phone || !email || !city || !businessType || !chargerReq) {
      showToast('Please complete all required fields.', 'error');
      return;
    }

    // Phone validation (10 digits Indian format or valid phone)
    const phoneClean = phone.replace(/[^0-9]/g, '');
    if (phoneClean.length < 10) {
      showToast('Please enter a valid 10-digit mobile number.', 'error');
      return;
    }

    // Simulation of lead capture
    const submitBtn = quoteForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin 1s linear infinite; margin-right:8px;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor"></path>
      </svg>
      Processing Request...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showToast(`Thank you, ${fullName}! Your VILTRON proposal request has been logged. Our EV infrastructure engineer will contact you within 2 business hours.`, 'success');
      quoteForm.reset();
    }, 1200);
  });

  function showToast(msg, type = 'info') {
    if (!toast || !toastMessage) return;

    toastMessage.innerText = msg;
    if (type === 'error') {
      toast.style.borderColor = '#ef4444';
    } else {
      toast.style.borderColor = 'var(--accent-green)';
    }

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

window.addEventListener('DOMContentLoaded', initFormHandler);
