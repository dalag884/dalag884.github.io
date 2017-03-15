$(function() {
  $('.oval').mouseenter(function() {
    var id = $(this).attr('data-oval-id');
    $('[data-hover-image-id="' + id + '"]').addClass('active');
  });

  $('.oval').mouseleave(function() {
    var id = $(this).attr('data-oval-id');
    $('[data-hover-image-id="' + id + '"]').removeClass('active');
  });
});
