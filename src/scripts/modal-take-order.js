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
  };

  refs.openModalBuyBtn.addEventListener("click", toggleModalBuy);
  refs.closeModalBuyBtn.addEventListener("click", toggleModalBuy);
  refs.modalBuyLink.addEventListener("click", removeModalBuy);
  refs.openModalAddBtn.addEventListener("click", toggleModalAdd);
  refs.closeModalAddBtn.addEventListener("click", toggleModalAdd);
  refs.modalAddLink.addEventListener("click", removeModalAdd);

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
})();