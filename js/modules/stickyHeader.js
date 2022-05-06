function stickyHeader() {
//   $(window).scroll(function(event) {
//     var pos_body = $('html,body').scrollTop();
//     console.log(pos_body)
//     if(pos_body>20){
//       $('.header-content').addClass('sticky')
//     }
//     else {
//        $('.header-content').removeClass('sticky')
//     }
//  });
//  $('.back-to-top').click(function(event) {
//     $('html,body').animate({scrollTop: 0},1400);
//  });
 $(window).scroll(function(){
   if ($(window).scrollTop() >= 40) {
       $('.header-content').addClass('sticky');
   }
   else {
       $('.header-content').removeClass('sticky');
   }
});
}
export { stickyHeader };