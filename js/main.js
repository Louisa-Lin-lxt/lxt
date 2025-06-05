// 语言切换功能
let currentLang = 'en';

function switchLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    document.documentElement.lang = currentLang;
    document.querySelector('.current-lang').textContent = currentLang.toUpperCase();
    updateContent(currentLang);
}

// 更新页面内容
function updateContent(lang) {
    const translations = {
        zh: {
            home: '首页',
            portfolio: '作品集',
            about: '关于我',
            contact: '联系方式',
            welcome: '你好，欢迎来到',
            name: '林星潼',
            world: '的世界...',
            bio: '我是卡耐基梅隆大学的一名大一学生，同时也是一名音乐爱好者（非专业），旅行者和动物爱好者。我热爱探索我所喜爱的事物，培养自己的学术能力，为创造更美好的世界解决问题。',
            gallery: '作品展示',
            contactTitle: '联系方式',
            email: '邮箱',
            phone: '电话',
            linkedin: '领英主页',
            instagram: 'Instagram主页',
            blessing: '愿你的未来充满无限可能'
        },
        en: {
            home: 'Home',
            portfolio: 'Portfolio',
            about: 'About Me',
            contact: 'Contact',
            welcome: 'Hi, welcome to',
            name: 'Xingtong Lin',
            world: "'s world...",
            bio: 'I am a freshman studying at Carnegie Mellon University, a musician (non-professional type), a traveler, and an animal lover. I really relish the process of exploring what I love and passionate about, building up my own academic skills, solving problems for a more glamorous world.',
            gallery: 'Gallery',
            contactTitle: 'Contact',
            email: 'Email',
            phone: 'Phone',
            linkedin: 'LinkedIn Profile',
            instagram: 'Instagram Profile',
            blessing: 'May your future be filled with endless possibilities'
        }
    };

    // 更新导航链接
    document.querySelectorAll('.nav-link').forEach(link => {
        const key = link.getAttribute('href').replace('#', '');
        if (translations[lang][key]) {
            link.textContent = translations[lang][key];
        }
    });

    // 更新主页内容
    document.querySelector('.welcome-text').textContent = translations[lang].welcome;
    document.querySelector('.name').textContent = translations[lang].name;
    document.querySelector('.world-text').textContent = translations[lang].world;
    document.querySelector('.bio p').textContent = translations[lang].bio;

    // 更新其他部分
    document.querySelector('.gallery h2').textContent = translations[lang].gallery;
    document.querySelector('.contact h2').textContent = translations[lang].contactTitle;
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
    switchLanguage();
}); 