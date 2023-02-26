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
    form: document.querySelector(".contacts-form"),
  };

  refs.form.addEventListener("submit", onOrderFormSubmit);
  refs.closeModalBuyBtn.addEventListener("click", removeModalBuy);
  refs.modalBuyLink.addEventListener("click", removeModalBuy);
  refs.closeModalAddBtn.addEventListener("click", removeModalAdd);
  refs.modalAddLink.addEventListener("click", removeModalAdd);
  
  function onOrderFormSubmit (event) {
    event.preventDefault();
    refs.form.reset(); 
    if (event.submitter === event.target[9]) {
      refs.modalBuy.classList.remove("is-hidden");
      refs.modalBuy.classList.add("with-transition");
      return
    } 
    if (event.submitter === event.target[10]) {
      refs.modalAdd.classList.remove("is-hidden");
      refs.modalAdd.classList.add("with-transition");
      return
    } 
  }

  function removeModalBuy() {
    refs.modalBuy.classList.add("is-hidden");
  }

  function removeModalAdd() {
    refs.modalAdd.classList.add("is-hidden");
  }
})();