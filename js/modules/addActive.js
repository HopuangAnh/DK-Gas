const addActive = (btn, active) => {
  let btnClick = document.querySelector(btn);
  let menuActive = document.querySelector(active);

  if(btnClick && menuActive) {
    btnClick.addEventListener('click', () => {
      menuActive.classList.contains('active') ? menuActive.classList.remove('active') : menuActive.classList.add('active');
    })
  }
}

export { addActive };