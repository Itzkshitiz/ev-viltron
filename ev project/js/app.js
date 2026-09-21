/**
 * VILTRON EV Charging Infrastructure - Main Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroTelemetry();
  initFaqAccordion();
  initScrollSpy();
  initFooterYear();
});

/* --------------------------------------------------------------------------
   1. Navbar & Mobile Menu
   -------------------------------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isExpanded = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. Live Hero Charging Telemetry Simulation
   -------------------------------------------------------------------------- */
function initHeroTelemetry() {
  const socVal = document.getElementById('telemetrySoc');
  const socFill = document.getElementById('telemetrySocFill');
  const powerVal = document.getElementById('telemetryPower');
  const voltVal = document.getElementById('telemetryVolt');
  const currVal = document.getElementById('telemetryCurrent');
  const energyVal = document.getElementById('telemetryEnergy');

  if (!socVal || !powerVal) return;

  let soc = 68;
  let energy = 42.6;

  setInterval(() => {
    // Subtle realistic power fluctuations
    const basePower = 242.0;
    const delta = (Math.random() * 2.4 - 1.2);
    const currentPower = (basePower + delta).toFixed(1);
    powerVal.innerText = `${currentPower} kW`;

    // Voltage & Current
    const volt = Math.floor(802 + Math.random() * 6);
    const curr = Math.floor(298 + Math.random() * 5);
    if (voltVal) voltVal.innerText = `${volt} V`;
    if (currVal) currVal.innerText = `${curr} A`;

    // Energy delivered slowly climbing
    energy = +(energy + 0.05).toFixed(2);
    if (energyVal) energyVal.innerText = `${energy} kWh`;

    // SoC climbing slowly
    if (Math.random() > 0.6 && soc < 99) {
      soc += 1;
      socVal.innerText = `${soc}%`;
      if (socFill) socFill.style.width = `${soc}%`;
    }
  }, 2200);
}

/* --------------------------------------------------------------------------
   3. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other accordion items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle clicked item
      item.classList.toggle('active', !isActive);
    });
  });
}

/* --------------------------------------------------------------------------
   4. Scroll Spy for Active Navigation
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   5. Dynamic Year in Footer
   -------------------------------------------------------------------------- */
function initFooterYear() {
  const yearElem = document.getElementById('currentYear');
  if (yearElem) {
    yearElem.innerText = new Date().getFullYear();
  }
}
