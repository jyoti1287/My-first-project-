document.addEventListener('DOMContentLoaded', () => {
  // --- MODAL LOGIC ---
  const authModal = document.getElementById('auth-modal');
  const profileModal = document.getElementById('profile-modal');
  
  // Auth Modal Toggles
  document.getElementById('open-auth-btn')?.addEventListener('click', () => {
    authModal.classList.remove('hidden');
  });
  document.getElementById('close-auth-btn')?.addEventListener('click', () => {
    authModal.classList.add('hidden');
  });

  // Profile Modal Toggles
  document.getElementById('user-badge')?.addEventListener('click', () => {
    profileModal.classList.remove('hidden');
  });
  document.getElementById('close-profile-btn')?.addEventListener('click', () => {
    profileModal.classList.add('hidden');
  });

  // Close modals when clicking outside the modal content
  window.addEventListener('click', (e) => {
    if (e.target === authModal) authModal.classList.add('hidden');
    if (e.target === profileModal) profileModal.classList.add('hidden');
  });

  // --- AUTH TABS LOGIC ---
  const loginTab = document.getElementById('login-tab-btn');
  const signupTab = document.getElementById('signup-tab-btn');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  loginTab?.addEventListener('click', (e) => {
    e.preventDefault();
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
  });

  signupTab?.addEventListener('click', (e) => {
    e.preventDefault();
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  });

  // --- INTERVIEW CATEGORY TABS ---
  const categoryTabs = document.querySelectorAll('.category-tabs .tab');
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      categoryTabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');
    });
  });

  // --- MIC BUTTON TOGGLE ---
  const micBtn = document.querySelector('.mic-btn');
  const micTooltip = document.querySelector('.mic-tooltip');
  
  micBtn?.addEventListener('click', () => {
    const isScanning = micBtn.classList.toggle('scanning');
    if (micTooltip) {
      micTooltip.textContent = isScanning ? 'Listening...' : 'Click to speak';
    }
  });

  // --- PREVENT FORM SUBMISSION (For Demo) ---
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Yahan aap apna login/signup backend logic daal sakte hain
      alert('Form submitted! Connect this to your backend.');
    });
  });
});