(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-form-open]"), 
    closeModalBtn: document.querySelector("[data-form-close]"), 
    modal: document.querySelector("[data-form]"), 
  };

  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.openModalBtns.forEach(button => {
    button.addEventListener("click", toggleModal);
  });
  

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();