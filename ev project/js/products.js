/**
 * VILTRON EV Charging Infrastructure - Products Data & Interactive Modal
 */

const PRODUCTS_DATA = {
  ac: {
    id: 'ac',
    name: 'VILTRON AC Smart Wallbox',
    category: 'AC EV Chargers',
    power: '7.4 kW – 22 kW',
    image: 'assets/images/ac_wallbox_charger.jpg',
    tag: 'Residential & Commercial',
    description: 'Designed for residential societies, hotels, and corporate workplace campuses. Engineered with intelligent OCPP 1.6J/2.0.1 connectivity, dynamic load balancing, RFID authentication, and mobile app monitoring.',
    specs: [
      { label: 'Power Output', value: '7.4 kW (Single Phase) / 22 kW (Three Phase)' },
      { label: 'Connector Standard', value: 'Type-2 (IEC 62196-2) with 5m tethered cable' },
      { label: 'Input Voltage', value: '230V AC ± 10% (1P) / 415V AC ± 10% (3P)' },
      { label: 'Efficiency Rating', value: '≥ 99.1% with ultra-low standby power' },
      { label: 'Ingress Protection', value: 'IP65 & IK10 impact certified for Indian outdoors' },
      { label: 'Connectivity', value: 'Wi-Fi, 4G LTE, Ethernet, Bluetooth 5.2' },
      { label: 'Authentication', value: 'RFID Card, VILTRON Mobile App, Plug & Charge' },
      { label: 'Safety Protections', value: 'OVP, UVP, RCD Type-B (6mA DC), Earth fault, Surge 6kV' }
    ],
    idealFor: 'Apartment Complexes, Private Residences, Corporate Tech Parks, Boutique Hotels & Resorts'
  },
  dc: {
    id: 'dc',
    name: 'VILTRON DC Fast Charger Dual-Gun',
    category: 'DC Fast Chargers',
    power: '30 kW – 120 kW',
    image: 'assets/images/dc_fast_dispenser.jpg',
    tag: 'High-Speed Commercial',
    description: 'Industrial-grade dual-gun DC Fast Charger built for high-throughput commercial charging hubs, logistics depots, and fleet hubs. Features smart dynamic power routing between dual guns.',
    specs: [
      { label: 'Power Output', value: '30 kW / 60 kW / 120 kW Scalable Power Modules' },
      { label: 'Connector Guns', value: 'Dual CCS-2 (Optional CCS-2 + CHAdeMO / GB/T)' },
      { label: 'Output Voltage Range', value: '150V DC – 1000V DC (Supports 800V EV Architecture)' },
      { label: 'Max Output Current', value: 'Up to 250A continuous per gun' },
      { label: 'Peak Efficiency', value: '≥ 96.5% at rated full load' },
      { label: 'Display & UI', value: '10.1” Sunlight-readable High-brightness Touchscreen' },
      { label: 'Network Protocol', value: 'OCPP 1.6J & OCPP 2.0.1 with Cloud CMS Integration' },
      { label: 'Payment Integration', value: 'POS Card Swiper, UPI QR Code, RFID, Bharat EV App' }
    ],
    idealFor: 'Commercial Plazas, Logistics Fleets, Taxi Hubs, Fuel Stations, Highway Stopovers'
  },
  commercial: {
    id: 'commercial',
    name: 'VILTRON Commercial Hub Multi-Bay',
    category: 'Commercial Stations',
    power: '60 kW – 180 kW',
    image: 'assets/images/hero_dc_charger.jpg',
    tag: 'Malls & Destinations',
    description: 'Turnkey charging station package tailored for shopping malls, premium hotels, hospital campuses, and mixed-use commercial developments with automated tariff management.',
    specs: [
      { label: 'Total Capacity', value: '60 kW to 180 kW Multi-Vehicle Simultaneous Charging' },
      { label: 'Dispenser Config', value: 'Dual or Triple Dispensers with Smart Power Sharing' },
      { label: 'Power Grid Integration', value: 'Integrated Isolation Transformer & HT Panel options' },
      { label: 'CMS Cloud Management', value: 'Automated Billing, Host Split Settlement, Fleet Portal' },
      { label: 'Enclosure Rating', value: 'IP55 Galvanized & Powder-Coated Outdoor Enclosure' },
      { label: 'Operating Temp', value: '-25°C to +55°C (Tailored for Indian tropical climate)' },
      { label: 'Grid Compliance', value: 'CEA / DISCOM Guidelines & Bharat EV Standards' },
      { label: 'Warranty & SLA', value: '3-Year Comprehensive Warranty with 4-Hour On-Site SLA' }
    ],
    idealFor: 'Shopping Malls, Multiplexes, 5-Star Hotels, Commercial IT Hubs, Public Parking'
  },
  highway: {
    id: 'highway',
    name: 'VILTRON Highway Hypercharger 360',
    category: 'Highway Solutions',
    power: '180 kW – 360 kW',
    image: 'assets/images/highway_hypercharger.jpg',
    tag: 'Ultra-Fast Hypercharger',
    description: 'Flagship liquid-cooled ultra-fast charging dispenser engineered for expressway charging plazas. Capable of adding 250 km of highway driving range in under 12 minutes.',
    specs: [
      { label: 'Peak Power Rating', value: 'Up to 360 kW Liquid-Cooled Continuous Output' },
      { label: 'Voltage Compatibility', value: '200V – 1000V Ultra-Wide Dynamic Range' },
      { label: 'Charging Cable', value: 'Active Liquid-Cooled 500A Ergonomic CCS-2 Cables' },
      { label: 'Charging Speed', value: '10% to 80% charge in 15–18 minutes (Vehicle dependent)' },
      { label: 'Thermal Management', value: 'Dual Closed-Loop Liquid Cooling with Refrigerant Assist' },
      { label: 'Smart Grid & Solar', value: 'BESS (Battery Energy Storage) & Solar PV Ready' },
      { label: 'Telemetry & Safety', value: 'Sub-millisecond Arc Fault & Insulation Resistance Monitoring' },
      { label: 'Certifications', value: 'ARAI Tested, BIS Certified, CE, IEC 61851-1/23' }
    ],
    idealFor: 'National Highway Plazas, Inter-City Corridors, State Expressways, Electric Bus Depots'
  }
};

// Filter Products
function setupProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Product Details Modal
function openProductModal(productId) {
  const product = PRODUCTS_DATA[productId];
  if (!product) return;

  const modalOverlay = document.getElementById('productModal');
  const modalContent = document.getElementById('productModalContent');

  let specsHtml = '';
  product.specs.forEach(spec => {
    specsHtml += `
      <div style="display:flex; justify-content:space-between; padding: 10px 0; border-bottom:1px solid rgba(255,255,255,0.06); font-size:0.88rem;">
        <span style="color:var(--text-muted);">${spec.label}</span>
        <strong style="color:var(--text-primary); text-align:right; max-width:60%;">${spec.value}</strong>
      </div>
    `;
  });

  modalContent.innerHTML = `
    <div style="display:flex; gap:12px; align-items:center; margin-bottom:12px;">
      <span class="section-badge cyan" style="margin-bottom:0;">${product.category}</span>
      <span style="font-family:var(--font-mono); color:var(--accent-green); font-size:0.88rem; font-weight:700;">${product.power}</span>
    </div>
    <h3 style="margin-bottom:14px; color:#fff; font-size:1.6rem;">${product.name}</h3>
    <img src="${product.image}" alt="${product.name}" style="width:100%; height:260px; object-fit:cover; border-radius:12px; margin-bottom:20px; border:1px solid var(--border-neon);" />
    <p style="color:var(--text-secondary); margin-bottom:24px; font-size:0.95rem; line-height:1.6;">${product.description}</p>
    
    <h4 style="margin-bottom:12px; color:#fff; font-size:1.05rem; display:flex; align-items:center; gap:8px;">
      <span style="color:var(--accent-green);">⚡</span> Technical Specifications
    </h4>
    <div style="background:rgba(0,0,0,0.3); padding:16px 20px; border-radius:10px; margin-bottom:24px; border:1px solid rgba(255,255,255,0.05);">
      ${specsHtml}
    </div>

    <div style="margin-bottom:24px; background:rgba(0,245,155,0.06); border:1px solid var(--border-neon); border-radius:10px; padding:14px 18px;">
      <div style="font-size:0.78rem; font-family:var(--font-mono); color:var(--accent-green); text-transform:uppercase; margin-bottom:4px;">Recommended Applications:</div>
      <div style="color:#fff; font-size:0.92rem; font-weight:500;">${product.idealFor}</div>
    </div>

    <div style="display:flex; gap:16px; flex-wrap:wrap;">
      <a href="#contact" class="btn btn-primary" onclick="selectProductInQuote('${product.name}')" style="flex:1;">Request Price Quote</a>
      <a href="https://wa.me/919876543210?text=Hi%20VILTRON,%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}%20specifications%20and%20pricing." target="_blank" class="btn btn-outline" style="flex:1;">Chat on WhatsApp</a>
    </div>
  `;

  modalOverlay.classList.add('active');
}

function closeProductModal() {
  const modalOverlay = document.getElementById('productModal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
  }
}

function selectProductInQuote(productName) {
  closeProductModal();
  const selectElem = document.getElementById('chargerRequirement');
  if (selectElem) {
    for (let i = 0; i < selectElem.options.length; i++) {
      if (selectElem.options[i].text.includes(productName.substring(0, 15))) {
        selectElem.selectedIndex = i;
        break;
      }
    }
  }
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setupProductFilters();

  const modalCloseBtn = document.getElementById('productModalClose');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProductModal);
  }

  const modalOverlay = document.getElementById('productModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProductModal();
      }
    });
  }
});
