// Funcionalidad compartida del sitio (menú móvil + año del footer)
document.addEventListener("DOMContentLoaded", function () {
  // --- Menú hamburguesa (móvil) ---
  var btn = document.getElementById("menuBtn");
  var menu = document.getElementById("mobileMenu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var isHidden = menu.classList.toggle("hidden");
      btn.setAttribute("aria-expanded", isHidden ? "false" : "true");
    });
    // Cerrar el menú al tocar un enlace
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.add("hidden");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Año actual en el footer ---
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
