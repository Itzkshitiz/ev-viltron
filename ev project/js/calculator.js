/**
 * VILTRON EV Charging Infrastructure - Commercial ROI & Savings Calculator
 * Computes estimated revenue, earnings & carbon savings in Indian Rupees (₹)
 */

function initCalculator() {
  const chargerTypeSelect = document.getElementById('calcChargerType');
  const gunsSlider = document.getElementById('calcGuns');
  const gunsVal = document.getElementById('calcGunsVal');
  const hoursSlider = document.getElementById('calcHours');
  const hoursVal = document.getElementById('calcHoursVal');
  const tariffSlider = document.getElementById('calcTariff');
  const tariffVal = document.getElementById('calcTariffVal');

  const monthlyRevDisplay = document.getElementById('calcMonthlyRev');
  const annualProfitDisplay = document.getElementById('calcAnnualProfit');
  const co2SavedDisplay = document.getElementById('calcCo2Saved');
  const energyDispensedDisplay = document.getElementById('calcEnergyMonthly');

  if (!chargerTypeSelect || !gunsSlider || !hoursSlider || !tariffSlider) return;

  function calculate() {
    const powerKw = parseFloat(chargerTypeSelect.value) || 60;
    const guns = parseInt(gunsSlider.value) || 2;
    const hoursPerDay = parseFloat(hoursSlider.value) || 6;
    const ratePerKwh = parseFloat(tariffSlider.value) || 19;

    // Commercial EV input power cost average in India (DISCOM EV commercial tariff ~₹8/kWh including fixed & wheeling charges)
    const baseElectricityCost = 8.5;
    const marginPerKwh = Math.max(1, ratePerKwh - baseElectricityCost);

    // Realistic load factor (60% to 75% average utilization curve per session)
    const loadFactor = 0.72;

    // Daily energy dispensed (kWh)
    const dailyKwh = powerKw * guns * hoursPerDay * loadFactor;
    const monthlyKwh = dailyKwh * 30;

    // Monthly gross revenue & net host margin
    const monthlyRevenue = monthlyKwh * ratePerKwh;
    const monthlyProfit = monthlyKwh * marginPerKwh;
    const annualProfit = monthlyProfit * 12;

    // Carbon offset: ~0.82 kg CO2 saved per kWh vs fossil fuel ICE car
    const annualCo2Tons = (monthlyKwh * 12 * 0.82) / 1000;

    // Update Slider text badges
    gunsVal.innerText = `${guns} Gun${guns > 1 ? 's' : ''}`;
    hoursVal.innerText = `${hoursPerDay} Hrs/Day`;
    tariffVal.innerText = `₹${ratePerKwh.toFixed(1)} / kWh`;

    // Format currency to Indian format (Lakhs / Thousands)
    monthlyRevDisplay.innerText = formatINR(monthlyRevenue);
    annualProfitDisplay.innerText = formatINR(annualProfit);
    co2SavedDisplay.innerText = `${annualCo2Tons.toFixed(1)} Tons`;
    if (energyDispensedDisplay) {
      energyDispensedDisplay.innerText = `${Math.round(monthlyKwh).toLocaleString('en-IN')} kWh/mo`;
    }
  }

  function formatINR(amount) {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakhs`;
    } else {
      return `₹${Math.round(amount).toLocaleString('en-IN')}`;
    }
  }

  chargerTypeSelect.addEventListener('change', calculate);
  gunsSlider.addEventListener('input', calculate);
  hoursSlider.addEventListener('input', calculate);
  tariffSlider.addEventListener('input', calculate);

  calculate();
}

window.addEventListener('DOMContentLoaded', initCalculator);
