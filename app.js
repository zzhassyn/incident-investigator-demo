function openEvidence(hash) {
  if (!hash.startsWith('#ev-')) return;
  const entry = document.getElementById(hash.slice(1));
  if (!(entry instanceof HTMLDetailsElement)) return;
  entry.open = true;
  entry.querySelector('summary').focus({ preventScroll: true });
  entry.scrollIntoView({ block: 'start' });
}

document.addEventListener('click', event => {
  const link = event.target.closest?.('a[href^="#ev-"]');
  if (link && !event.defaultPrevented && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
    openEvidence(link.hash);
  }
});
window.addEventListener('hashchange', () => openEvidence(location.hash));
openEvidence(location.hash);
