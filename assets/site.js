const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  const mobileNav = window.matchMedia('(max-width: 900px)');
  const setNavOpen = (open) => {
    navLinks.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navLinks.inert = mobileNav.matches && !open;
  };

  setNavOpen(false);
  navToggle.addEventListener('click', () => {
    setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true');
  });
  navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) setNavOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
      setNavOpen(false);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      setNavOpen(false);
      navToggle.focus();
    }
  });
  mobileNav.addEventListener('change', () => setNavOpen(false));
}

const scopeSizer = document.getElementById('scopeSizer');

if (scopeSizer) {
  const targets = {
    web: { label: 'Web application', days: [5, 8] },
    api: { label: 'API', days: [4, 7] },
    mobile: { label: 'Mobile application', days: [6, 9] },
    cloud: { label: 'Cloud and AI', days: [6, 10] },
  };
  const sizes = {
    small: { label: 'Small', multiplier: 1 },
    medium: { label: 'Medium', multiplier: 1.6 },
    large: { label: 'Large / multi-app', multiplier: 2.4 },
  };
  const money = (amount) => '$' + amount.toLocaleString('en-US');
  const updateScope = () => {
    const target = targets[scopeSizer.querySelector('[name="target"]:checked')?.value];
    const size = sizes[scopeSizer.querySelector('[name="size"]:checked')?.value];
    if (!target || !size) return;

    const [low, high] = target.days.map((days) => Math.round(days * size.multiplier));
    const price = `${money(low * 700)} - ${money(high * 700)}`;
    document.getElementById('scopePlan').textContent = size === sizes.large
      ? 'Extended assessment'
      : 'One-time assessment';
    document.getElementById('scopePrice').textContent = price;
    document.getElementById('scopeNote').textContent = `${low}-${high} testing days. Final price follows scoping.`;
    const body = [
      `Target: ${target.label}`,
      `Size: ${size.label}`,
      `Indicative range: ${price}`,
      `Testing time: ${low}-${high} days`,
      '',
      'Application or infrastructure:',
      'Deadline:',
    ].join('\n');
    document.getElementById('scopeCta').href = `mailto:contact@greycorelabs.com?subject=${encodeURIComponent('Pentest scoping request')}&body=${encodeURIComponent(body)}`;
  };

  scopeSizer.addEventListener('change', updateScope);
  updateScope();
}

const scanForm = document.getElementById('scanForm');

if (scanForm) {
  const submit = document.getElementById('scanSubmit');
  const success = document.getElementById('scanSuccess');
  const error = document.getElementById('scanError');
  const fallback = document.getElementById('scanFallback');
  let submitting = false;

  scanForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitting) return;
    if (!scanForm.checkValidity()) {
      scanForm.reportValidity();
      return;
    }

    const data = new FormData(scanForm);
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Domain: ${data.get('domain') || ''}`,
      `Concerns: ${data.get('concerns') || ''}`,
      'Domain ownership or authorization confirmed.',
    ].join('\n');
    fallback.href = `mailto:contact@greycorelabs.com?subject=${encodeURIComponent('Free Security Scan Request')}&body=${encodeURIComponent(body)}`;

    const label = submit.textContent;
    submitting = true;
    error.hidden = true;
    submit.disabled = true;
    submit.textContent = 'Sending request...';
    scanForm.setAttribute('aria-busy', 'true');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(scanForm.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error('Request was not accepted');
      scanForm.hidden = true;
      success.hidden = false;
      success.focus();
    } catch {
      error.hidden = false;
    } finally {
      window.clearTimeout(timeout);
      submitting = false;
      submit.disabled = false;
      submit.textContent = label;
      scanForm.removeAttribute('aria-busy');
    }
  });
}
