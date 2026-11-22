const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function setMenuOpen(open) {
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
}

document.documentElement.classList.add('has-menu-toggle');

menu.addEventListener('click', () => {
  setMenuOpen(menu.getAttribute('aria-expanded') === 'false');
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (menu.getAttribute('aria-expanded') === 'true') {
      const section = document.getElementById(link.hash.slice(1));
      section.setAttribute('tabindex', '-1');
      section.focus({ preventScroll: true });
      setMenuOpen(false);
    }
  });
});

document.querySelector('.site-header').addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    menu.focus();
    setMenuOpen(false);
  }
});
