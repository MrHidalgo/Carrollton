'use strict';

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPopups
 *
 * @description
 */
var initPopups = function initPopups() {

  $('[popup-js]').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'is-show',
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      close: function close() {}
    }
  });

  $('[popup-video-js]').magnificPopup({
    type: 'iframe',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'is-show',
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      close: function close() {}
    }
  });
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

  var mySwiperSay = new Swiper('.saySlider', {
    loop: true,
    grabCursor: false,
    effect: 'slide',
    speed: 700,
    slidesPerView: 3,
    spaceBetween: 15,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.say__slider-btn--next',
      prevEl: '.say__slider-btn--prev'
    }
  });

  var mySwiperProject = new Swiper('.projectSlider', {
    loop: true,
    grabCursor: false,
    effect: 'flip',
    flipEffect: {
      rotate: 30,
      slideShadows: false
    },
    autoplay: {
      delay: 4000
    },
    speed: 850,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.projects__slider-btn--next',
      prevEl: '.projects__slider-btn--prev'
    }
  });

  /*const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    // autoplay: {
    //   delay: 5000,
    // },
    // Disable preloading of all images
    // preloadImages: false,
    // Enable lazy loading
    // lazy: {
    //   loadPrevNext: true,
    // },
     // off touch for destop
    // touchMoveStopPropagation:false,
    // simulateTouch : false,
    // allowSwipeToNext: true,
    // allowSwipeToPrev: true,
    // allowPageScroll: "auto ",
     slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
     // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // renderBullet: function (index, className) {
      //   return `
      //     <div class="${className}">
      //       ${index}
      //     </div>
      //   `;
      // }
    },
     // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
     on: {
      "slideChange": function () {
        console.log("slideChange");
      },
    }
  });*/
};

/**
 * @description Document DOM ready.
 */
(function () {
  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */

  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @name initNative
   *
   * @description Init all method
   */
  var initNative = function initNative() {
    // default
    initPreventBehavior();
    // ==========================================

    // lib
    initSwiper();
    initPopups();
    // ==========================================

    // callback
    // ==========================================
  };
  initNative();
})();