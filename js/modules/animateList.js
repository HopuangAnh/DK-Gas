function AnimateList(){
  var items = document.querySelectorAll('.active .product-market-list .item');
  console.log(items)
  items.forEach((item,index) => {
    item.setAttribute('data-aos-delay',`${index*100}`)
    // item.setAttribute('data-aos','fade-right')

  })
  // itemArr.forEach((item) => {
  //   console.log(itemArr)
  // })
}

// const animeList = 

export { AnimateList };

