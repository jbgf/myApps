//全屏轮播（魔方翻动）
var index_full_swiper = new Swiper('.index_full_swiper', {
  //一般选项
  direction: 'vertical',
  speed: 500,
  a11y: true,
  effect : 'cube',
  cube: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.96
  },
  breakpoints: { 
    //当宽度小于等于768 
    768: {
      effect : 'silde'
    },
    //当宽度小于等于992
    992: {
      effect : 'silde'
    },
    //当宽度小于等于1200
    1200: {
      effect : 'silde'
    }
  },
  keyboardControl: true,
  mousewheelControl: true,
  mousewheelReleaseOnEdges: true,
  //图片选项
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  onSlideChangeEnd: function(swiper){
    if(index_full_swiper.isBeginning){
      $(".navIVstyle").removeClass('on');
    }else{
      $(".navIVstyle").addClass('on');
    }
  },
  /**/
});


//首屏三轮播
var index_banner_swiper = new Swiper('.index_banner_swiper',{
  //一般选项
  direction: 'horizontal',
  speed: 500,
  a11y: true,
  autoplay : 5000,
  autoplayStopOnLast : true,
  longSwipes : false,
  //分页器
  pagination : '.swiper-pagination',
  //paginationClickable: true,
  effect : 'slide',

  //图片选项
  lazyLoading: true,
  lazyLoadingInPrevNext: true
})


//核心产品（普通断点轮播）
var index_product_swiper = new Swiper('.index_product_swiper',{
  //一般选项
  
  direction: 'horizontal',
  speed: 500,
  a11y: true,
  grabCursor : true,
  //网格分布
  slidesPerView : 3,
  spaceBetween : 45,
    breakpoints: { 
      //当宽度小于等于768 
      768: {
        slidesPerView : 1,
        spaceBetween : 15,
      },
      //当宽度小于等于992
      992: {
        slidesPerView : 3,
        spaceBetween : 25,
      },
      //当宽度小于等于1200
      1200: {
        slidesPerView : 3,
        spaceBetween : 35,
      }
    },
  //分页器
  //pagination: '.swiper-product-pagination',
  //paginationClickable: true,
  //环路
  loop: true,
  loopAdditionalSlides: 1,
  loopedSlides: 1,
  
  //图片选项
  lazyLoading: true,
  lazyLoadingInPrevNext: true
})

//解决方案（阴影翻动）
var index_solution_swiper = new Swiper('.index_solution_swiper',{
  initialSlide :1,
  direction: 'horizontal',
  speed: 500,
  a11y: true,
  //网格分布
  centeredSlides : true,
  slidesPerView: 3,
  spaceBetween : 120,
  centeredSlides: true,
  effect : 'coverflow',
  coverflow: {
    rotate: 0,
    stretch: 10,
    depth: 200,
    modifier: 1,
    slideShadows : false
    },
  breakpoints: { 
      //当宽度小于等于768 
    768: {
      slidesPerView: 1.5,
      spaceBetween : 60,
      coverflow: {
        rotate: 0,
        stretch: 10,
        depth: 80,
        modifier: 2,
        slideShadows : false
      },
    },
    //当宽度小于等于992
    992: {
      slidesPerView: 2,
      spaceBetween : 120,
      coverflow: {
      rotate: 0,
      stretch: 10,
      depth: 100,
      modifier: 2,
      slideShadows : false
      },
    },
    //当宽度小于等于1200
    1200: {
      slidesPerView: 2.4,
      spaceBetween : 100,
      coverflow: {
      rotate: 0,
      stretch: 10,
      depth: 100,
      modifier: 2,
      slideShadows : false
      },
    }
  },
  
  //图片选项
  lazyLoading: true,
  lazyLoadingInPrevNext: true
})

//关于我们（时间轴拖动）
var index_timeaxis_swiper = new Swiper('.index_timeaxis_swiper',{
  slidesPerView: "auto",
  a11y: true
})

