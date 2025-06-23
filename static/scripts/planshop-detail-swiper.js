document.addEventListener("DOMContentLoaded", function(){

  // 구분자 html 슬라이드 Start
  const htmlEditorSwiper = document.querySelectorAll('.html-edite-swiper')
  if(htmlEditorSwiper && htmlEditorSwiper.length > 0){
    htmlEditorSwiper.forEach(function(item){
      setTimeout(function(){
        let swiper;
        swiper = new Swiper(item, {
          loop : true,
          pagination: {
            el: item.children[1]
          },
        });
      },500)
    })
  }
  // 구분자 html 슬라이드 End

  // 기획전 상세 html swiper method Start
  const slideRollingBtnSwiper2023 = function(ta){
    let swiper
    swiper = new Swiper(ta,{
      speed: 500,
      slidesPerView: 'auto',
      freeMode: false,
      centeredSlides:true,
      simulateTouch : false,
      loop:true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      autoHeight: true,
      navigation: {
        nextEl: ta + ' .swiper-button-next',
        prevEl: ta + ' .swiper-button-prev'
      },
    })
  }
  // 기획전 상세 html swiper method End

  // 시스템 파리 컬렉션
  if(document.querySelector('.pc-planshop2023-detail02')){
    setTimeout(function(){
      slideRollingBtnSwiper2023('.pc-planshop2023-detail02-slide01')
      slideRollingBtnSwiper2023('.pc-planshop2023-detail02-slide02')
    },500)
  }
  // 시스템 파리 컬렉션
})