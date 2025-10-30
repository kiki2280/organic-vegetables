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

// анимация на сайте  section-reviews

const reviewsSection = document.querySelector('.section-reviews');

const observerReviews = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // по желанию скрывать
    }
  });
}, { threshold: 0.2 });

if (reviewsSection) observerReviews.observe(reviewsSection);


const slider = document.querySelector('.slider');

slider.addEventListener('mousemove', () => {
  slider.classList.add('paused');
});

slider.addEventListener('mouseleave', () => {
  slider.classList.remove('paused');
});


// анимация на сайте  section_HowItWorks


const section_HowItWorks = document.querySelectorAll('.section_HowItWorks');

  const observer_HowItWorks = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
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
      } else {
        entry.target.classList.remove('show'); // если нужно скрывать при уходе
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
    } else {
      entry.target.classList.remove('show'); // если нужно скрывать при уходе
    }
  });
}, { threshold: thresholdValue });

section_Vagetables.forEach(section => observer_Vagetables.observe(section));

  // анимация на сайте  section_Order
