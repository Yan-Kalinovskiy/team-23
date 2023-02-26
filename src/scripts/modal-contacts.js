(() => {
  const refs = {
    openModalContactsBtn: document.querySelector("[data-modal-contacts-open]"),
    closeModalContactsBtn: document.querySelector("[data-modal-contacts-close]"),
    modalContacts: document.querySelector("[data-modal-contacts]"),
    modalContactsLink: document.querySelector("[data-modal-contacts-link]"),
    form: document.querySelector(".register-form"),
  };

  refs.closeModalContactsBtn.addEventListener("click", removeModalContacts);
  refs.modalContactsLink.addEventListener("click", removeModalContacts);
  refs.form.addEventListener("submit", onContactsFormSubmit);

  function removeModalContacts() {
    refs.modalContacts.classList.add("is-hidden");
  }

  function openModalContacts() {
refs.modalContacts.classList.remove("is-hidden");
  }

  function onContactsFormSubmit(event) {
    event.preventDefault();
    const formUserName = refs.form.elements.name;
    const formUserEmail = refs.form.elements.email;
    const formComment = refs.form.elements.comment;
    let formData = {
      name: `${formUserName.value.trim()}`,
      email: `${formUserEmail.value.trim()}`,
      comment: `${formComment.value.trim()}`
    }
    openModalContacts();
    console.log(formData);
    refs.form.reset(); 
    }
})();
