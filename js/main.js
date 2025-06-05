// 语言切换功能
function switchLanguage(lang) {
    const buttons = document.querySelectorAll('.language-switch button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent.toLowerCase().includes(lang)) {
            button.classList.add('active');
        }
    });

    // 更新页面内容
    document.documentElement.lang = lang;
    updateContent(lang);
}

// 更新页面内容
function updateContent(lang) {
    const translations = {
        zh: {
            home: '首页',
            portfolio: '作品集',
            about: '关于我',
            contact: '联系方式',
            subtitle: '卡耐基梅隆大学【大一】学生',
            viewWorks: '查看作品',
            downloadCV: '下载简历',
            selectedWorks: '精选作品',
            aboutMe: '关于我',
            contactInfo: '联系方式',
            blessing: '愿你的未来充满无限可能'
        },
        en: {
            home: 'Home',
            portfolio: 'Portfolio',
            about: 'About',
            contact: 'Contact',
            subtitle: 'A [Freshman] studying at Carnegie Mellon University',
            viewWorks: 'View Works',
            downloadCV: 'Download CV',
            selectedWorks: 'Selected Works',
            aboutMe: 'About Me',
            contactInfo: 'Contact Info',
            blessing: 'May your future be filled with endless possibilities'
        }
    };

    // 更新导航链接
    document.querySelectorAll('.nav-links a').forEach(link => {
        const key = link.getAttribute('href').replace('#', '');
        if (translations[lang][key]) {
            link.textContent = translations[lang][key];
        }
    });

    // 更新其他文本内容
    document.querySelector('.subtitle').textContent = translations[lang].subtitle;
    document.querySelector('.btn.primary').textContent = translations[lang].viewWorks;
    document.querySelector('.btn.secondary').textContent = translations[lang].downloadCV;
    document.querySelector('.portfolio h2').textContent = translations[lang].selectedWorks;
    document.querySelector('.about h2').textContent = translations[lang].aboutMe;
    document.querySelector('.contact h2').textContent = translations[lang].contactInfo;
    document.querySelector('.blessing').textContent = translations[lang].blessing;
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // 向下滚动
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // 向上滚动
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    // 设置默认语言
    const defaultLang = 'zh';
    switchLanguage(defaultLang);
}); 