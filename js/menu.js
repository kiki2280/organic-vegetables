document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Находим все нужные элементы в документе
  const menu = document.getElementById("menu_cart");                  // Само мобильное меню
  const openBtn = document.getElementById("open_menu_btn");           // Кнопка открытия меню
  const closeBtn = document.querySelector(".btn_menu_close");         // Кнопка закрытия (крестик)
  const links = document.querySelectorAll(".mob_list_link a, .mob_menu_btn_shop a"); // Все якорные ссылки внутри меню

  // 🔹 Открытие меню
  openBtn.addEventListener("click", () => {
    menu.classList.add("active");             // Добавляем класс, чтобы показать меню
    document.body.style.overflow = "hidden";  // Блокируем прокрутку страницы под меню
  });

  // 🔹 Закрытие меню по кнопке "крестик"
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");          // Убираем класс — скрываем меню
    document.body.style.overflow = "";        // Возвращаем возможность прокрутки страницы
  });

  // 🔹 Закрытие меню при клике на фон (вне контейнера)
  menu.addEventListener("click", (e) => {
    if (e.target === menu) {                  // Проверяем, что кликнули именно по фону
      menu.classList.remove("active");        // Скрываем меню
      document.body.style.overflow = "";      // Разблокируем прокрутку
    }
  });

  // 🔹 Обрабатываем клик по каждой ссылке внутри меню
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();                     // Отменяем стандартный переход браузера
      const id = link.getAttribute("href").substring(1); // Получаем ID секции из href (без #)
      const target = document.getElementById(id);        // Находим саму секцию по ID

      menu.classList.remove("active");        // Закрываем меню
      document.body.style.overflow = "";      // Разрешаем скролл страницы

      // 🔹 Плавный переход к нужной секции
      if (target) {
        window.scrollTo({
          top: target.offsetTop,              // Прокручиваем страницу до секции
          behavior: "smooth"                  // Делаем прокрутку плавной
        });
      }
    });
  });
});
