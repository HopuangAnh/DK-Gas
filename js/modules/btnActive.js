const btnActive = (btn) => {
  let btnClick = document.querySelector(btn);
  if(btnClick) {
    btnClick.addEventListener('click', () => {
      btnClick.classList.contains('active') ? btnClick.classList.remove('active') :  btnClick.classList.add('active');
    })
  }
}

export { btnActive };