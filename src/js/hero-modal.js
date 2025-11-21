(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"), 
    closeModalBtn: document.querySelector("[data-modal-close]"), 
    modal: document.querySelector("[data-modal]"), 
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