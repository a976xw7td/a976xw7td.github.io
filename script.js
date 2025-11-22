// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        // 导航栏滚动效果
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '16px 0';
        }
        
        // 回到顶部按钮显示/隐藏
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 考虑导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 回到顶部按钮功能
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 滚动时显示元素动画
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about, .skills, .projects, .contact');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // 初始检查
    animateOnScroll();
    // 滚动时检查
    window.addEventListener('scroll', animateOnScroll);
    
    // 技能条动画
    const animateSkills = function() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (barPosition < screenPosition) {
                const width = bar.style.width;
                bar.style.width = 0;
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    };
    
    // 初始检查
    animateSkills();
    // 滚动时检查
    window.addEventListener('scroll', animateSkills);
    
    // 项目卡片悬停效果增强
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 表单验证
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // 简单验证
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('请填写所有必填字段');
                return;
            }
            
            // 邮箱验证
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('请输入有效的邮箱地址');
                return;
            }
            
            // 在实际应用中，这里会发送表单数据到服务器
            alert('感谢您的留言！我会尽快回复您。');
            contactForm.reset();
        });
    }
    
    // 响应式导航菜单
    const handleResize = function() {
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth < 768) {
            navLinks.style.flexWrap = 'wrap';
        } else {
            navLinks.style.flexWrap = 'nowrap';
        }
    };
    
    // 初始检查
    handleResize();
    // 窗口调整大小时检查
    window.addEventListener('resize', handleResize);
    
    // 添加页面加载动画
    const pageLoadAnimation = function() {
        document.body.style.opacity = '0';
        
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    };
    
    pageLoadAnimation();
});
