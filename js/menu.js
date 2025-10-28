document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu_cart");
  const openBtn = document.getElementById("open_menu_btn");
  const closeBtn = document.querySelector(".btn_menu_close");

  console.log(closeBtn);

  if (!menu || !openBtn || !closeBtn) {
    console.warn("⚠️ Проверь HTML — не найдены нужные элементы!");
    return;
  }

  openBtn.addEventListener("click", () => {
    menu.classList.add("active");
    document.body.style.overflow = "hidden"; // блокируем прокрутку
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.style.overflow = ""; // возвращаем прокрутку
  });

  menu.addEventListener("click", (e) => {
    if (e.target === menu) {
      menu.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

