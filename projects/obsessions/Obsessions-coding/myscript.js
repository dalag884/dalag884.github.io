$(function() {
  $('.oval').mouseenter(function(event) {
    // console.log('event.pageX is', event.pageX);
    // console.log('event.pageY is', event.pageY);

    var id = $(this).attr('data-oval-id');
    $('[data-hover-image-id="' + id + '"]')
      .addClass('active')
      .css({
        left: event.pageX + 'px',
        top: event.pageY + 'px'
      });
  });

  $('.oval').mouseleave(function() {
    $('.hover-images img').removeClass('active');
  });
});
