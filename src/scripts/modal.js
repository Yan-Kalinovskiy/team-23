(() => {
  const refs = {
    openModalBuyBtn: document.querySelector("[data-modal-buy-open]"),
    closeModalBuyBtn: document.querySelector("[data-modal-buy-close]"),
    modalBuy: document.querySelector("[data-modal-buy]"),
    modalBuyLink: document.querySelector("[data-modal-buy-link]"),
    openModalAddBtn: document.querySelector("[data-modal-add-open]"),
    closeModalAddBtn: document.querySelector("[data-modal-add-close]"),
    modalAdd: document.querySelector("[data-modal-add]"),
    modalAddLink: document.querySelector("[data-modal-add-link]"),
    openModalContactsBtn: document.querySelector("[data-modal-contacts-open]"),
    closeModalContactsBtn: document.querySelector("[data-modal-contacts-close]"),
    modalContacts: document.querySelector("[data-modal-contacts]"),
    modalContactsLink: document.querySelector("[data-modal-contacts-link]"),
  };

  refs.openModalBuyBtn.addEventListener("click", toggleModalBuy);
  refs.closeModalBuyBtn.addEventListener("click", toggleModalBuy);
  refs.modalBuyLink.addEventListener("click", removeModalBuy);
  refs.openModalAddBtn.addEventListener("click", toggleModalAdd);
  refs.closeModalAddBtn.addEventListener("click", toggleModalAdd);
  refs.modalAddLink.addEventListener("click", removeModalAdd);
  refs.openModalContactsBtn.addEventListener("click", toggleModalContacts);
  refs.closeModalContactsBtn.addEventListener("click", toggleModalContacts);
  refs.modalContactsLink.addEventListener("click", removeModalContacts);


  function toggleModalBuy() {
    refs.modalBuy.classList.toggle("is-hidden");
  }

  function removeModalBuy() {
    refs.modalBuy.classList.add("is-hidden");
  }

  function toggleModalAdd() {
    refs.modalAdd.classList.toggle("is-hidden");
  }

  function removeModalAdd() {
    refs.modalAdd.classList.add("is-hidden");
  }

  function toggleModalContacts() {
    refs.modalContacts.classList.toggle("is-hidden");
  }

  function removeModalContacts() {
    refs.modalContacts.classList.add("is-hidden");
  }
})();