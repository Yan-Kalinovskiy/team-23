(() => {
  const refs = {
    openModalContactsBtn: document.querySelector("[data-modal-contacts-open]"),
    closeModalContactsBtn: document.querySelector("[data-modal-contacts-close]"),
    modalContacts: document.querySelector("[data-modal-contacts]"),
    modalContactsLink: document.querySelector("[data-modal-contacts-link]"),
  };

  refs.openModalContactsBtn.addEventListener("click", toggleModalContacts);
  refs.closeModalContactsBtn.addEventListener("click", toggleModalContacts);
  refs.modalContactsLink.addEventListener("click", removeModalContacts);

  function toggleModalContacts() {
    refs.modalContacts.classList.toggle("is-hidden");
  }

  function removeModalContacts() {
    refs.modalContacts.classList.add("is-hidden");
  }
})();