const underline = document.querySelector('.underline');
const navLinks = document.querySelectorAll('.nav_links a');
const navContainer = document.querySelector('.nav_links');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const li = link.closest('li');
    if (li && li.id) {
      sessionStorage.setItem('lastLinkId', li.id);
    }
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    moveUnderline(link);
  });
});

const lastLinkId = sessionStorage.getItem('lastLinkId');
const lastLink = lastLinkId ? document.querySelector(`#${lastLinkId} a`) : null;

if (lastLink) {
  requestAnimationFrame(() => {
    navLinks.forEach(l => l.classList.remove('active'));
    lastLink.classList.add('active');
    moveUnderline(lastLink);
  });
}

function moveUnderline(link) {
  const rect = link.getBoundingClientRect();
  const containerRect = navContainer.getBoundingClientRect();
  underline.style.left = `${rect.left - containerRect.left}px`;
  underline.style.width = `${rect.width}px`;
}
