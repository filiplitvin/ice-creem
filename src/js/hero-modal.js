(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open1]"), 
    closeModalBtn: document.querySelector("[data-modal-close1]"), 
    modal: document.querySelector("[data-modal1]"), 
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