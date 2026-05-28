import { t, getLanguage } from '../i18n.js';

export function renderCostBreakdown(proc) {
  if (!proc.costBreakdown || proc.costBreakdown.length === 0) return null;

  const container = document.createElement('div');
  container.className = 'cost-calculator';

  const itemsHtml = proc.costBreakdown.map((item, i) => {
    const isOptional = item.optional ? 'data-optional="true"' : '';
    const checkedAttr = !item.optional ? 'checked disabled' : '';
    return `
      <div class="cost-item" ${isOptional}>
        <label class="cost-item-label">
          <input type="checkbox" class="cost-item-check" data-index="${i}" ${checkedAttr} />
          <span>${getLanguage() === 'en' && item.label_en ? item.label_en : item.label}</span>
        </label>
        <span class="cost-item-value" data-base="${item.amount}">€${item.amount.toFixed(2)}</span>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <h3 class="cost-calculator-title">🧮 ${t('cost_calculator.title')}</h3>
    <div class="cost-items">${itemsHtml}</div>
    <div class="cost-total">
      <span>${t('cost_calculator.total')}</span>
      <span class="cost-total-value" id="cost-total-value">€0.00</span>
    </div>
  `;

  function updateTotal() {
    const checks = container.querySelectorAll('.cost-item-check');
    let total = 0;
    checks.forEach(c => {
      if (c.checked) {
        const itemEl = c.closest('.cost-item');
        const valEl = itemEl.querySelector('.cost-item-value');
        total += parseFloat(valEl.dataset.base) || 0;
      }
    });
    container.querySelector('#cost-total-value').textContent = '€' + total.toFixed(2);
  }

  container.querySelectorAll('.cost-item-check').forEach(c => {
    c.addEventListener('change', updateTotal);
  });

  updateTotal();
  return container;
}
