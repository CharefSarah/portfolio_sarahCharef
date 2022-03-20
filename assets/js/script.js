$('.nav_mobile_button').on('click', function (e) {
  $('.nav_mobile_links').each(function () {
    if ($(".nav_mobile_links").hasClass('open_nav_mobile')) {
      $('.nav_mobile_links').removeClass('open_nav_mobile');
      $('.nav_mobile_links').addClass('blocked');
      $('#dots').removeClass('vivid_blue');
      $('#dots').addClass('dark');
      $('#body').removeClass('blocked');

    } else {
      $('.nav_mobile_links').addClass('open_nav_mobile');
      $('#body').addClass('blocked');
      $('#dots').removeClass('dark');
      $('#dots').addClass('vivid_blue');
    }
  });

});


/* -------------------------------------------------------------------------- */
/*                                SCRIPT SLIDER                               */
/* -------------------------------------------------------------------------- */
const slider = document.querySelector('.media-scroller'); // Classe du Sliders
let isDown = false;
let startX;
let scrollLeft;

document.querySelectorAll('.media-scroller').forEach(item => {
  item.addEventListener('mousedown', (e) => {
    isDown = true;
    item.style.cursor = "grabbing";
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
});

document.querySelectorAll('.media-scroller').forEach(item => {
  item.addEventListener('mouseleave', (e) => {
    item.style.cursor = "grab";
    isDown = false;
  });
});

document.querySelectorAll('.media-scroller').forEach(item => {
  item.addEventListener('mouseup', (e) => {
    isDown = false;
    item.style.cursor = "grab";
  });
});

document.querySelectorAll('.media-scroller').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;

    const walk = (x - startX) * 3; //scroll-fast
    item.scrollLeft = scrollLeft - walk;
  
  });
});

const mouseMoveHandler = function (e) {
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  ele.scrollTop = pos.top - dy;
  ele.scrollLeft = pos.left - dx;
};

$('.link1').hover(function () {
  $('.open_nav').each(function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
    }
  });
  $('.open_nav1').addClass('open');
})
$('.link2').hover(function () {

  $('.open_nav').each(function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
    }
  });
  $('.open_nav2').addClass('open');
});
$('.main').hover(function () {
  $('.open_nav').each(function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
    }
  });
});

$('.close').on('click', function (e) {
  document.getElementById("popup1").style.display = "none";
  document.getElementById("pop").style.display = "none";

});


$('.close').on('click', function (e) {
  localStorage.setItem("modal", "hide");

});


jQuery(document).ready(function () {
  jQuery('.titleWrapper').click(function () {
    var toggle = jQuery(this).next('div#descwrapper');
    jQuery(toggle).slideToggle("slow");
  });
  jQuery('.inactive').click(function () {
    jQuery(this).toggleClass('inactive active');
  });
});