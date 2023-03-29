const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1, //한 화면에 보이는 슬라이드의 개수
  // spaceBetween: 0, //슬라이드간의 간격
  // slidesPerGroup: 1, //한번에 슬라이드 되는 개수

  loop: true, //무한반복
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true,
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* 메인슬라이더 */

const $container = $(".slides > .MainSpaceSlideTab > .MainSpaceSlideTab-item");
const $indicator = $(
  ".slides > .MainSpaceTab > .MainSpaceTab-list > .MainSpaceTab-item>.MainSpaceTab-link"
);

const $btnPrev = $(".slides > .slides-navigation.slides-prev");
const $btnNext = $(".slides > .slides-navigation.slides-next");

let nowIdx = 0;

$indicator.on("click", function (evt) {
  evt.preventDefault();
  nowIdx = $indicator.index(this);
  $indicator.eq().parent().addClass("on").siblings().removeClass("on");
  $container.stop().animate({ left: -1480 * nowIdx }, 2000);
});

//다음버튼
$btnNext.on("click", function (evt) {
  evt.preventDefault();

  if (nowIdx < 10) {
    nowIdx++;
  } else {
    nowIdx = 0;
  }

  // $indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
  $container.stop().animate({ left: -536 * nowIdx }, 400);
});

//이전버튼
$btnPrev.on("click", function (evt) {
  evt.preventDefault();

  if (nowIdx > 0) {
    nowIdx--;
  } else {
    nowIdx = 3;
  }

  $indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
  $container.stop().animate({ right: -478 * nowIdx }, 400);
});


// 공간슬라이드

const $gnb = $("header .gnb");
const $lnb = $gnb.find(".lnb");
const $bg_lnb = $(".bg_lnb");

const navFadeIn = function () {
  $bg_lnb.stop().slideDown(50);
  $lnb.stop().slideDown(50);
  // $bg_lnb.stop().fadeIn(50);
  // $lnb.stop().fadeIn(50);
};

const navFadeOut = function () {
  $bg_lnb.stop().slideUp(50);
  $lnb.stop().slideUp(50);
  // $bg_lnb.stop().fadeOut(50);
  // $lnb.stop().fadeOut(50);
};

$gnb.on("mouseenter", function () {
  navFadeIn();
});

$gnb.on("mouseleave", function () {
  navFadeOut();
});

$bg_lnb.on("mouseenter", function () {
  navFadeIn();
});

$bg_lnb.on("mouseleave", function () {
  navFadeOut();
});
/* 네비게이션 */


	const $header = $('header');
	const $mnu = $('#wrap > header > .gnb-container > nav > .gnb > li > a  ');
	const arrTopVal = [];
  

	$('section').each(function(idx){
  
	  arrTopVal[idx] = $(this).offset().top;
  
	});
  
  

	$mnu.on('click', function(evt){
	  evt.preventDefault();
  

	  let nowIdx = $mnu.index(this);

	  $('html,body').animate({scrollTop:arrTopVal[nowIdx]});
	});

//스크롤시 헤더
const $fade = $("#wrap > section > h2 > span");
$(window).scroll(function () {
  if ($("body, html").scrollTop() >170) {
    $("header").fadeIn();
  }
  if ($("body, html").scrollTop() >0) {
    $("header").hide();
  }
});

$(window).on({
  scroll: function () {

    const scrollTop = Math.ceil($(window).scrollTop());


    if (scrollTop > 80) {
      $header.addClass("fixed");
      $header.next().css({ marginTop: 66 });
    } else {
      $header.removeClass("fixed");
      $header.next().css({ marginTop: 0 });
    }

    for (let i = 0; i < $mnu.length; i++) {

      if (scrollTop >= arrTopVal[i] - 200) {
        $mnu.eq(i).parent().addClass("on").siblings().removeClass("on");
      } else if (scrollTop < arrTopVal[0] - 200) {
        $mnu.parent().removeClass("on");
      }
    }
  },
});

const $sitemapbtn = $("#wrap > footer > .footer-top > .sitemapselect ");
const $sitemapmmnu = $(
  "#wrap > footer > .footer-top > .sitemapselect > .sitemapselectlist "
);

const navFadeIn1 = function () {
  $sitemapmmnu.stop().slideDown(140);

};

const navFadeOut1 = function () {
  $sitemapmmnu.stop().slideUp(140);

};

$sitemapbtn.on("mouseenter", function () {
  navFadeIn1();
});

$sitemapbtn.on("mouseleave", function () {
  navFadeOut1();
});

