// --- Bookmarks (Favorites) ---
const BOOKMARKS_KEY = 'bureaucrapp_bookmarks';

export function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || '[]');
  } catch { return []; }
}

export function isBookmarked(procedureId) {
  return getBookmarks().includes(procedureId);
}

export function toggleBookmark(procedureId) {
  const bookmarks = getBookmarks();
  const idx = bookmarks.indexOf(procedureId);
  if (idx > -1) {
    bookmarks.splice(idx, 1);
  } else {
    bookmarks.push(procedureId);
  }
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  return idx === -1; // returns true if now bookmarked
}

// --- Toast Notifications ---
let toastTimeout;
export function showToast(message, duration = 2500) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, duration);
}

// --- Share ---
export async function shareProcedure(procedure) {
  const url = `${window.location.origin}${window.location.pathname}#/procedure/${procedure.id}`;
  const shareData = {
    title: `${procedure.title} — Bureaucrapp`,
    text: procedure.subtitle,
    url: url
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (e) {
      if (e.name === 'AbortError') return;
    }
  }

  // Fallback: copy to clipboard
  try {
    await navigator.clipboard.writeText(url);
    showToast('🔗 Link copiato negli appunti!');
  } catch {
    showToast('❌ Impossibile copiare il link');
  }
}

// --- Print ---
export function printProcedure() {
  window.print();
}
