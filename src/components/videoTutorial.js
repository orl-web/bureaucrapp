import { t, getLanguage } from '../i18n.js';

export function renderVideoTutorial(proc) {
  if (!proc.videoUrl && !proc.videoUrl_it && !proc.videoUrl_en) return null;

  const url = proc.videoUrl_en && getLanguage() === 'en' ? proc.videoUrl_en : proc.videoUrl_it || proc.videoUrl;
  if (!url) return null;

  let embedUrl = url;
  if (url.includes('youtube.com/watch') || url.includes('youtu.be')) {
    const match = url.match(/(?:v=|youtu\.be\/)([\w-]+)/);
    if (match) embedUrl = `https://www.youtube-nocookie.com/embed/${match[1]}`;
  } else if (url.includes('vimeo.com')) {
    const match = url.match(/vimeo\.com\/(\d+)/);
    if (match) embedUrl = `https://player.vimeo.com/video/${match[1]}`;
  }

  const container = document.createElement('div');
  container.className = 'video-tutorial';
  container.innerHTML = `
    <h3 class="video-tutorial-title">🎬 ${t('video.title')}</h3>
    <div class="video-tutorial-wrapper">
      <iframe src="${embedUrl}" title="${t('video.title')}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
    </div>
  `;
  return container;
}
