// 滚动动画
document.addEventListener('DOMContentLoaded', () => {
    // 语言切换功能
    const languageButtons = document.querySelectorAll('.language-btn');
    const contentSections = {
        'zh': document.querySelectorAll('[lang="zh"]'),
        'en': document.querySelectorAll('[lang="en"]')
    };

    function switchLanguage(lang) {
        // 更新按钮状态
        languageButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // 更新内容显示
        Object.entries(contentSections).forEach(([language, elements]) => {
            elements.forEach(el => {
                el.classList.toggle('active', language === lang);
            });
        });

        // 保存语言选择到本地存储
        localStorage.setItem('preferred-language', lang);
    }

    // 初始化语言设置
    const savedLanguage = localStorage.getItem('preferred-language') || 'zh';
    switchLanguage(savedLanguage);

    // 添加语言切换事件监听器
    languageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 为所有需要动画的元素添加观察器
    document.querySelectorAll('.about-content, .portfolio-item, .resume-content, .contact-section').forEach((element) => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

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
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.transform = 'translateY(0)';
            return;
        }
        
        if (currentScroll > lastScroll) {
            // 向下滚动
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}); 