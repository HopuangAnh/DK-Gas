function AnimateList(){
  var items = document.querySelectorAll('.product-market-list .item');
  console.log(items)
  items.forEach((item,index) => {
    item.setAttribute('data-aos-delay',`${index*100}`)
    item.setAttribute('data-aos','fade-right')

  })
}

export { AnimateList };

