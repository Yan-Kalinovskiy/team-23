(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=(document.querySelector(".js-close-menu"),document.querySelector("[data-menu-btn]"));t.addEventListener("click",(()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is__open"),o.classList.toggle("is__open");bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)})),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is__open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),(()=>{const e={openModalContactsBtn:document.querySelector("[data-modal-contacts-open]"),closeModalContactsBtn:document.querySelector("[data-modal-contacts-close]"),modalContacts:document.querySelector("[data-modal-contacts]"),modalContactsLink:document.querySelector("[data-modal-contacts-link]"),form:document.querySelector(".register-form")};function t(){e.modalContacts.classList.add("is-hidden")}e.closeModalContactsBtn.addEventListener("click",t),e.modalContactsLink.addEventListener("click",t),e.form.addEventListener("submit",(function(t){t.preventDefault();const o=e.form.elements.name,n=e.form.elements.email,a=e.form.elements.comment;let c={name:`${o.value.trim()}`,email:`${n.value.trim()}`,comment:`${a.value.trim()}`};e.modalContacts.classList.remove("is-hidden"),e.modalContacts.classList.add("with-transition"),console.log(c),e.form.reset()}))})();
//# sourceMappingURL=contacts.2377ae04.js.map
