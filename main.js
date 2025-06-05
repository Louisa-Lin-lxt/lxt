function setLang(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  document.querySelectorAll('a[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  // 按钮文字也切换
  document.querySelectorAll('.btn').forEach(el => {
    if (el.hasAttribute(`data-${lang}`)) {
      el.textContent = el.getAttribute(`data-${lang}`);
    }
  });
}

document.getElementById('en-btn')?.addEventListener('click', () => setLang('en'));
document.getElementById('zh-btn')?.addEventListener('click', () => setLang('zh'));

// 默认英文
setLang('en');

// 头像占位符显示逻辑
const avatarImg = document.querySelector('.avatar img');
const avatarPlaceholder = document.querySelector('.avatar-placeholder');
if (avatarImg && avatarPlaceholder) {
  avatarImg.onload = () => { avatarPlaceholder.style.display = 'none'; };
  avatarImg.onerror = () => { avatarPlaceholder.style.display = 'block'; };
} 