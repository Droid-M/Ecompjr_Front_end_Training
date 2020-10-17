$(document).ready(function() {

  $('.filter-btn').on('click', function() {
    let type = $(this).attr('id');
    let box = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');
    findBox(type, box);
  });

  function findBox(type, box) {
    if (type == 'all') {
      box.fadeIn();
    }
    else {
      box.each (function () {
        if (!$(this).hasClass(type)) {
          $(this).fadeOut();
        }
        else {
          $(this).fadeIn();
        }
      });
    }
  }

  $('.main-btn').on('click', function() {
    let scroll = "#" + $(this).attr('name');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(scroll).offset().top - 140
    }, 1200);
  });

  $('.nav-item').click(function() {
    let scroll = "#" + $(this).attr('name');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(scroll).offset().top - 140
    }, 1200);
  });

});