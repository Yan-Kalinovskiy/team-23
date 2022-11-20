(() => {
   const menuBtnRef = document.querySelector("[data-menu-btn]");
   const mobileMenuRef = document.querySelector("[data-menu]");

   menuBtnRef.addEventListener("click", () => {
      const expanded =
         menuBtnRef.getAttribute("aria-expanded") === "true" || false;

      menuBtnRef.classList.toggle("is__open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);

      mobileMenuRef.classList.toggle("is__open");
   });
})();