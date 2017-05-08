
function updateTime() {
    var date = new Date();
    $('#time').html( date.toLocaleString() );

  var localDate = new Date();
  var utc = localDate.getTime() + ( localDate.getTimezoneOffset() * 60000 );
  var indiaUtcOffset = 5.5;
  var indiaDate = new Date( utc + ( 3600000 * indiaUtcOffset ) );
  var ist = indiaDate.toLocaleString();
  $('#time2').html( ist );
}

$(function() {
  updateTime();
  setInterval(updateTime, 1000);
});



$(function() {
  $('.image').mouseenter(function(event) {
    // console.log('event.pageX is', event.pageX);
    // console.log('event.pageY is', event.pageY);

    var id = $(this).attr('data-image-id');
    $('[data-hover-image-id="' + id + '"]')
      .addClass('active')
      .css({
        left: event.pageX + 'px',
        top: event.pageY + 'px'
      });
  });

  $('.image').mouseleave(function() {
    $('.hover-images img').removeClass('active');
  });
});
