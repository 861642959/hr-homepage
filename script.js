// ===== ① 移动端导航菜单开合 =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// 点击任意导航链接后收起移动端菜单
navLinks.addEventListener('click', (e) => {
  if (e.target.matches('a')) {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// ===== ② 滚动时给导航栏加投影 =====
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ===== ③ 滚动高亮当前区块对应的导航项（scrollspy） =====
const sections = document.querySelectorAll('main section[id]');
const linkMap = new Map();
document.querySelectorAll('.nav-link').forEach((link) => {
  linkMap.set(link.getAttribute('href').slice(1), link);
});

function updateActiveNav() {
  const offset = 120; // 略大于导航栏高度
  let currentId = sections.length ? sections[0].id : '';
  sections.forEach((sec) => {
    if (sec.getBoundingClientRect().top <= offset) {
      currentId = sec.id;
    }
  });
  linkMap.forEach((link, id) => {
    link.classList.toggle('active', id === currentId);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();
