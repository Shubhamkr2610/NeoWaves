const openModal = document.querySelector('#open-modal');
const modal = document.querySelector('#modal');
closeBtnTop = document.querySelector('#close');
closeBtnBottom = document.querySelector('#close-button');

openModal.addEventListener('click' , () => {
  modal.style.display="flex"
})
closeBtnTop.addEventListener('click', () => {
    modal.style.display="none"
})
closeBtnBottom.addEventListener('click', () => {
    modal.style.display="none"
})
window.onclick = (event) => {
    if(event.target == modal) {
        modal.style.display="none"
    }
}