import { t, getLanguage } from '../i18n.js';
import { showToast } from './utils.js';
import { trackEvent } from '../analytics.js';

const VAULT_KEY = 'bureaucrapp_vault';

function getVault() {
  try { return JSON.parse(localStorage.getItem(VAULT_KEY) || '{}'); } catch { return {}; }
}

function setVault(vault) {
  localStorage.setItem(VAULT_KEY, JSON.stringify(vault));
}

export function renderDocVaultButton(procedureId, docNames) {
  const container = document.createElement('div');
  container.className = 'doc-vault';

  const vault = getVault();
  const savedDocs = vault[procedureId] || [];

  const btn = document.createElement('button');
  btn.className = 'action-btn action-btn--secondary';
  btn.style.width = '100%';
  btn.style.justifyContent = 'center';
  btn.style.fontSize = 'var(--fs-sm)';
  btn.innerHTML = `📁 ${t('doc_vault.toggle')} (${savedDocs.length})`;

  let panel = null;

  btn.addEventListener('click', () => {
    if (panel && panel.parentNode) {
      panel.remove();
      return;
    }
    panel = document.createElement('div');
    panel.className = 'doc-vault-panel';

    const currentVault = getVault();
    const currentSaved = currentVault[procedureId] || [];

    panel.innerHTML = `
      <div class="doc-vault-header">
        <strong>${t('doc_vault.title')}</strong>
        <button class="doc-vault-close" id="vault-close">✕</button>
      </div>
      <div class="doc-vault-list" id="vault-list">
        ${currentSaved.length === 0 ? `<p style="font-size:var(--fs-sm);color:var(--text-secondary)">${t('doc_vault.empty')}</p>` : ''}
        ${currentSaved.map((doc, i) => `
          <div class="doc-vault-item">
            <span class="doc-vault-item-name">${doc.name}</span>
            <span class="doc-vault-item-size">${(doc.size / 1024).toFixed(1)} KB</span>
            <button class="doc-vault-remove" data-index="${i}">✕</button>
          </div>
        `).join('')}
      </div>
      <form class="doc-vault-upload" id="vault-upload">
        <label class="doc-vault-upload-label">
          <span>+ ${t('doc_vault.upload')}</span>
          <input type="file" id="vault-file" accept=".pdf,.jpg,.jpeg,.png,.webp" hidden />
        </label>
        <select id="vault-doc-select" class="filter-select" style="width:100%;margin-top:0.5rem">
          <option value="">${t('doc_vault.select_doc')}</option>
          ${docNames.map((d, i) => `<option value="${i}">${d}</option>`).join('')}
        </select>
      </form>
      <p style="font-size:0.7rem;color:var(--text-muted);margin-top:0.5rem">${t('doc_vault.note')}</p>
    `;

    container.appendChild(panel);

    panel.querySelector('#vault-close').addEventListener('click', () => panel.remove());

    const fileInput = panel.querySelector('#vault-file');
    const docSelect = panel.querySelector('#vault-doc-select');

    panel.querySelector('.doc-vault-upload-label').addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const docIndex = docSelect.value;
      const docName = docIndex !== '' ? docNames[parseInt(docIndex)] : file.name;

      const reader = new FileReader();
      reader.onload = (ev) => {
        const vault2 = getVault();
        if (!vault2[procedureId]) vault2[procedureId] = [];
        vault2[procedureId].push({
          id: Date.now(),
          name: docName,
          data: ev.target.result,
          size: file.size,
          type: file.type,
          uploaded: new Date().toISOString()
        });
        setVault(vault2);
        trackEvent('doc_vault_upload', { procedure_id: procedureId, size: file.size });
        showToast('📁 ' + t('doc_vault.saved'));
        btn.innerHTML = `📁 ${t('doc_vault.toggle')} (${vault2[procedureId].length})`;
        panel.remove();
      };
      reader.readAsDataURL(file);
    });

    panel.querySelectorAll('.doc-vault-remove').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.index, 10);
        const vault3 = getVault();
        if (vault3[procedureId]) {
          vault3[procedureId].splice(idx, 1);
          if (vault3[procedureId].length === 0) delete vault3[procedureId];
          setVault(vault3);
        }
        btn.innerHTML = `📁 ${t('doc_vault.toggle')} (${(vault3[procedureId] || []).length})`;
        panel.remove();
      });
    });
  });

  container.appendChild(btn);
  return container;
}
