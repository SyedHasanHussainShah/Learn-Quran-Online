// Initialize AOS (Animate On Scroll) Library
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Navigation Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        navbar.classList.add('bg-white/95', 'shadow-xl');
        navbar.classList.remove('bg-white/90', 'shadow-lg');
    } else {
        navbar.classList.add('bg-white/90', 'shadow-lg');
        navbar.classList.remove('bg-white/95', 'shadow-xl');
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('slide-down');
    
    // Animate hamburger icon
    const svg = mobileMenuBtn.querySelector('svg');
    svg.classList.toggle('rotate-90');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Active Navigation Link Highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-islamic-green', 'font-semibold');
        link.classList.add('text-islamic-navy');
        
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-islamic-navy');
            link.classList.add('text-islamic-green', 'font-semibold');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);

// Hero Section Parallax Effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#home');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Button Click Effects
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple CSS dynamically
const rippleCSS = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Contact Form Validation and Submission
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const firstName = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (!firstName || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            this.reset();
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        }, 2000);
    });
}

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 translate-x-full`;
    
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    notification.classList.add(bgColor, 'text-white');
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Loading Screen (if needed)
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// Testimonials Carousel (Auto-rotate)
function initTestimonialsCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (testimonials.length === 0) return;
    
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.opacity = i === index ? '1' : '0.7';
            testimonial.style.transform = i === index ? 'scale(1.05)' : 'scale(1)';
        });
    }
    
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }
    
    // Auto-rotate every 5 seconds
    setInterval(nextTestimonial, 5000);
    
    // Initialize
    showTestimonial(0);
}

// Course Cards Hover Effect
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    });
});

// Feature Cards Animation on Scroll
function animateFeatureCards() {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        });
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        
        observer.observe(card);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateFeatureCards();
    initTestimonialsCarousel();
});

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
    
    // Press 'Enter' or 'Space' on focused elements
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('nav-link')) {
        e.preventDefault();
        e.target.click();
    }
});

// Scroll to Top Button
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
    `;
    scrollBtn.className = 'fixed bottom-8 right-8 bg-islamic-green text-white w-12 h-12 rounded-full shadow-lg hover:bg-islamic-navy transition-all duration-300 z-40 opacity-0 invisible';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollBtn.classList.remove('opacity-0', 'invisible');
            scrollBtn.classList.add('opacity-100', 'visible');
        } else {
            scrollBtn.classList.add('opacity-0', 'invisible');
            scrollBtn.classList.remove('opacity-100', 'visible');
        }
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// Performance: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Lazy Loading for Images (if any are added later)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();

// Add loading states to interactive elements
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.disabled) {
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 1000);
        }
    });
});

// Console welcome message
console.log(`
🕌 Welcome to QuranLearn!
📖 A modern platform for Quranic education
🌟 Built with love for the Muslim community

May Allah bless your learning journey!
`);

// Error handling for AOS
window.addEventListener('error', function(e) {
    if (e.message.includes('AOS')) {
        console.warn('AOS library failed to load. Animations may not work properly.');
    }
});

// Accessibility: Announce page changes for screen readers
function announcePageChange(pageName) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `Navigated to ${pageName} section`;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Update navigation to include accessibility announcements
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const sectionTitle = targetSection.querySelector('h1, h2, h3')?.textContent || targetId;
            announcePageChange(sectionTitle);
        }
    });
});

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current).toLocaleString();
                }, 20);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// Enhanced Scroll Performance
let ticking = false;

function updateScrollEffects() {
    if (!ticking) {
        requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const navbar = document.getElementById('navbar');
            
            // Navbar scroll effect
            if (scrolled > 100) {
                navbar.classList.add('bg-white/95', 'shadow-xl');
                navbar.classList.remove('bg-white/90', 'shadow-lg');
            } else {
                navbar.classList.add('bg-white/90', 'shadow-lg');
                navbar.classList.remove('bg-white/95', 'shadow-xl');
            }
            
            // Parallax effect for hero section
            const hero = document.querySelector('#home');
            if (hero && scrolled < window.innerHeight) {
                const speed = scrolled * 0.3;
                hero.style.transform = `translateY(${speed}px)`;
            }
            
            ticking = false;
        });
        ticking = true;
    }
}

// Enhanced scroll event with throttling
window.addEventListener('scroll', updateScrollEffects, { passive: true });

// Fix text visibility on scroll
function ensureTextVisibility() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const container = section.querySelector('.container');
        if (container) {
            container.style.position = 'relative';
            container.style.zIndex = '10';
        }
    });
}

// Enhanced mobile menu with better animations
function initEnhancedMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.style.maxHeight = '0';
                mobileMenu.style.opacity = '0';
                
                // Animate in
                requestAnimationFrame(() => {
                    mobileMenu.style.transition = 'all 0.3s ease-out';
                    mobileMenu.style.maxHeight = '400px';
                    mobileMenu.style.opacity = '1';
                });
            } else {
                mobileMenu.style.transition = 'all 0.3s ease-in';
                mobileMenu.style.maxHeight = '0';
                mobileMenu.style.opacity = '0';
                
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            }
            
            // Animate hamburger icon
            const svg = mobileMenuBtn.querySelector('svg');
            svg.style.transform = isHidden ? 'rotate(90deg)' : 'rotate(0deg)';
        });
    }
}

// Enhanced responsive behavior
function handleResponsiveChanges() {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    // Adjust animations based on screen size
    if (isMobile) {
        // Disable heavy animations on mobile
        document.querySelectorAll('.floating-particle').forEach(particle => {
            particle.style.display = 'none';
        });
    } else {
        document.querySelectorAll('.floating-particle').forEach(particle => {
            particle.style.display = 'block';
        });
    }
    
    // Adjust AOS settings based on device
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// Enhanced image loading with better fallbacks
function enhanceImageLoading() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            img.addEventListener('error', function() {
                this.style.opacity = '0.5';
                console.log('Image failed to load:', this.src);
            });
        }
    });
}

// Touch gestures for mobile
function initTouchGestures() {
    if ('ontouchstart' in window) {
        let startY = 0;
        let endY = 0;
        
        document.addEventListener('touchstart', function(e) {
            startY = e.touches[0].clientY;
        }, { passive: true });
        
        document.addEventListener('touchend', function(e) {
            endY = e.changedTouches[0].clientY;
            const diff = startY - endY;
            
            // Swipe up gesture
            if (diff > 50) {
                // Could trigger scroll to next section
            }
            // Swipe down gesture
            else if (diff < -50) {
                // Could trigger scroll to previous section
            }
        }, { passive: true });
    }
}

// Performance monitoring
function initPerformanceMonitoring() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
}

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('QuranLearn website initialized successfully!');
    
    // Initialize enhanced features
    animateCounters();
    ensureTextVisibility();
    initEnhancedMobileMenu();
    enhanceImageLoading();
    initTouchGestures();
    initPerformanceMonitoring();
    
    // Handle responsive changes
    handleResponsiveChanges();
    window.addEventListener('resize', handleResponsiveChanges);
    
    // Re-initialize features that might need it
    setTimeout(() => {
        animateFeatureCards();
        initTestimonialsCarousel();
    }, 100);
});