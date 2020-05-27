const open = document.getElementById('open');

const close = document.getElementById('close');

const container = document.getElementById('modal-container');

open.addEventListener('click', openModal);

close.addEventListener('click', closeModal);

// function openModal(){
//   container.classList.add('show');
// }

function closeModal(){
  container.classList.remove('show');
}

function openModal(){
  container.classList.add('show');
}