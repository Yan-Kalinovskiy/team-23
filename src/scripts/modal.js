// Для модального вікна, яке викликається кнопкою "buy-it-now" на сторінці take-order
(() => {
  const refs = {
    openModalBuyBtn: document.querySelector("[data-modal-buy-open]"),
    closeModalBuyBtn: document.querySelector("[data-modal-buy-close]"),
    modalBuy: document.querySelector("[data-modal-buy]"),
  };

  refs.openModalBuyBtn.addEventListener("click", toggleModalBuy);
  refs.closeModalBuyBtn.addEventListener("click", toggleModalBuy);

  function toggleModalBuy() {
    refs.modalBuy.classList.toggle("is-hidden");
  }
})();

// Для модального вікна, яке викликається кнопкою "add-to-cart" на сторінці take-order
(() => {
  const refs = {
    openModalAddBtn: document.querySelector("[data-modal-add-open]"),
    closeModalAddBtn: document.querySelector("[data-modal-add-close]"),
    modalAdd: document.querySelector("[data-modal-add]"),
  };

  refs.openModalAddBtn.addEventListener("click", toggleModalAdd);
  refs.closeModalAddBtn.addEventListener("click", toggleModalAdd);

  function toggleModalAdd() {
    refs.modalAdd.classList.toggle("is-hidden");
  }
})();

// Для модального вікна на сторінці contacts
(() => {
  const refs = {
    openModalContactsBtn: document.querySelector("[data-modal-contacts-open]"),
    closeModalContactsBtn: document.querySelector("[data-modal-contacts-close]"),
    modalContacts: document.querySelector("[data-modal-contacts]"),
  };

  refs.openModalContactsBtn.addEventListener("click", toggleModalContacts);
  refs.closeModalContactsBtn.addEventListener("click", toggleModalContacts);

  function toggleModalContacts() {
    refs.modalContacts.classList.toggle("is-hidden");
  }
})();