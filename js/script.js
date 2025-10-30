  // анимация на сайте  hero-section

const hero_section = document.querySelector('.hero_section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

if(hero_section) observer.observe(hero_section);


// анимация на сайте  section_HowItWorks


const section_HowItWorks = document.querySelectorAll('.section_HowItWorks');

  const observer_HowItWorks = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  section_HowItWorks.forEach(section => observer_HowItWorks.observe(section));


  // анимация на сайте  section_Taste

document.addEventListener("DOMContentLoaded", () => {
  const section_Taste = document.querySelector('.section_Taste');

  const observer_Taste = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  if (section_Taste) observer_Taste.observe(section_Taste);
});

  // анимация на сайте  section_Vagetables

// Определяем порог в зависимости от ширины экрана
let thresholdValue;

if (window.innerWidth < 800) {        // Мобильные устройства
  thresholdValue = 0.2;               // 20% видимости
} else {                               // Планшеты и десктоп
  thresholdValue = 0.3;               // 30% видимости
}

const section_Vagetables = document.querySelectorAll('.section_Vagetables');

const observer_Vagetables = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: thresholdValue });

section_Vagetables.forEach(section => observer_Vagetables.observe(section));


  // анимация на сайте  section-reviews

// ====== Анимации секций ======

// Универсальная функция для IntersectionObserver
function animateSection(selector, threshold = 0.2, once = false) {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                if (once) observer.unobserve(entry.target);
            }
        });
    }, { threshold });

    elements.forEach(el => observer.observe(el));
}

// Анимация секций
animateSection('.hero_section', 0.3);
animateSection('.section_HowItWorks', 0.2);
animateSection('.section_Taste', 0.2);
animateSection('.section_Vagetables', window.innerWidth < 800 ? 0.2 : 0.3);
animateSection('.section-reviews', 0.2);
animateSection('.section_Order', 0.2, true);


// ====== Плавный слайдер для Reviews ======
const slider = document.querySelector('.reviews-list');

if (slider) {
    let animId;
    let direction = 1;
    const speed = 0.5;

    // Функция анимации слайдера
    function animateSlider() {
        slider.scrollLeft += speed * direction;
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) direction = -1;
        if (slider.scrollLeft <= 0) direction = 1;
        animId = requestAnimationFrame(animateSlider);
    }

    // Запуск только на планшете и ПК
    if (window.innerWidth >= 768) {
        animateSlider();

        // Остановка при наведении
        slider.addEventListener('mouseenter', () => cancelAnimationFrame(animId));
        slider.addEventListener('mouseleave', animateSlider);
    } else {
        // На мобильных включаем нативный скролл (свайп)
        slider.style.overflowX = 'auto';
    }
}


  // анимация на сайте  section_Order

  const sectionOrder = document.querySelector('.section_Order');

const observerOrder = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
      observerOrder.unobserve(entry.target); // отключаем наблюдение, чтобы анимация сработала один раз
    }
  });
}, { threshold: 0.2 });

if(sectionOrder) observerOrder.observe(sectionOrder);
