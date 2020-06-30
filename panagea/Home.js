// dots = document.getElementsByClassName('owl-dot')
// for (j = 0; j < dots.length; j++) {
//     dots[j].onclick = function() {
//         for (i = 0; i < dots.length; i++) {
//             dots[i].classList.remove('active')
//         }
//         this.classList.toggle("active")
//     }
// }

// $(document).ready(function() {
//     if (top == 0) {
//         $('nav.navbar').removeClass('sticky');
//         $('nav.navbar a > img').attr("src", "../Media/logo.png");
//         $('#toTop').css('display', 'none');
//     } else {
//         $('nav.navbar').addClass('sticky');
//         $('nav.navbar a > img').attr("src", "../Media/logo_sticky.png");
//         $('#toTop').css('display', 'block');
//     }
// });

function drop() {
  arrow = document.getElementsByClassName("panel-dropdown");
  for (i = 0; i < arrow.length; i++) {
    arrow[i].classList.toggle("active");
  }
}

var offset = $("nav.navbar").offset();
var top = offset.top;

$(document).ready(function () {
  var topscroll = $(window).scrollTop();
  if (topscroll == 0) {
    $("nav.navbar").removeClass("sticky");
    $("nav.navbar a > img").attr("src", "./Media/logo.png");
    $("#toTop").css("display", "none");
  } else {
    $("nav.navbar").addClass("sticky");
    $("nav.navbar a > img").attr("src", "./Media/logo_sticky.png");
    $("#toTop").css("display", "block");
  }
  // PreLoader
  setTimeout(function () {
    $("#preloader").fadeOut(2000);
    // $('#preloader').chidren().fadeOut(2000)
  }, 3000);

  var total = 0;
  inputs = $(".num");
  for (i = 0; i < $(".num").length; i++) {
    var inputVal = $(".num")[i];
    total += parseInt(inputVal.value);
  }
  $("#qtyTotal").text(total);
});

// function drop() {
//     $(this).toggleClass('active')
// };

$(window).scroll(function () {
  // Sticky NavBAr
  var offset = $("nav.navbar").offset();
  var top = offset.top;
  if (top == 0) {
    $("nav.navbar").removeClass("sticky");
    $("nav.navbar a > img").attr("src", "./Media/logo.png");
    $("#toTop").css("display", "none");
  } else {
    $("nav.navbar").addClass("sticky");
    $("nav.navbar a > img").attr("src", "./Media/logo_sticky.png");
    $("#toTop").css("display", "block");
  }
  // Call Section Animation
  var offset1 = $("div.call_section").offset();
  var top1 = offset.top;
  if (top1 > 3300) {
    $("div.wow").css("visibility", "visible");
    $("div.wow").addClass("animated");
  }
});

$(".qtyInc").click(function () {
  $("#qtyTotal").addClass("rotate-x");

  var adults = $(this).prev().val();
  var newVal = parseInt(adults) + 1;
  $(this).prev().val(newVal);
  // console.log(newVal)
  var total = 0;
  inputs = $(".num");
  for (i = 0; i < $(".num").length; i++) {
    var inputVal = $(".num")[i];
    total += parseInt(inputVal.value);
  }
  $("#qtyTotal").text(total);

  setTimeout(function () {
    $("#qtyTotal").removeClass("rotate-x");
  }, 500);
});

$(".qtyDec").click(function () {
  $("#qtyTotal").addClass("rotate-x");

  var adults = $(this).next().val();
  newVal = parseInt(adults) - 1;
  var newAdults = $(this).next().val(newVal);
  // console.log(newVal)
  var total = 0;
  inputs = $(".num");
  for (i = 0; i < $(".num").length; i++) {
    var inputVal = $(".num")[i];
    total += parseInt(inputVal.value);
  }
  $("#qtyTotal").text(total);

  setTimeout(function () {
    $("#qtyTotal").removeClass("rotate-x");
  }, 500);
});

$("#toTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 700);
});

$(".owl-carousel").owlCarousel({
  // lazyLoad: true,
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
