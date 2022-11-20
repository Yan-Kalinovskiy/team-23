// Для модального вікна, яке викликається кнопкою "buy-it-now" на сторінці take-order
(() => {
  const refs = {
    openModalBuyBtn: document.querySelector("[data-modal-buy-open]"),
    closeModalBuyBtn: document.querySelector("[data-modal-buy-close]"),
    modalBuy: document.querySelector("[data-modal-buy]"),
    modalBuyLink: document.querySelector("[data-modal-buy-link]"),
  };

  refs.openModalBuyBtn.addEventListener("click", toggleModalBuy);
  refs.closeModalBuyBtn.addEventListener("click", toggleModalBuy);
  refs.modalBuyLink.addEventListener("click", removeModalBuy);

  function toggleModalBuy() {
    refs.modalBuy.classList.toggle("is-hidden");
  }

  function removeModalBuy() {
    refs.modalBuy.classList.add("is-hidden");
  }
})();

// Для модального вікна, яке викликається кнопкою "add-to-cart" на сторінці take-order
(() => {
  const refs = {
    openModalAddBtn: document.querySelector("[data-modal-add-open]"),
    closeModalAddBtn: document.querySelector("[data-modal-add-close]"),
    modalAdd: document.querySelector("[data-modal-add]"),
    modalAddLink: document.querySelector("[data-modal-add-link]"),
  };

  refs.openModalAddBtn.addEventListener("click", toggleModalAdd);
  refs.closeModalAddBtn.addEventListener("click", toggleModalAdd);
  refs.modalAddLink.addEventListener("click", removeModalAdd);

  function toggleModalAdd() {
    refs.modalAdd.classList.toggle("is-hidden");
  }

  function removeModalAdd() {
    refs.modalAdd.classList.add("is-hidden");
  }
})();

// Для модального вікна на сторінці contacts
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