
function updateTime() {
    var date = new Date();
    $('#time').html( date.toLocaleString() );

  var localDate = new Date();
  var utc = localDate.getTime() + ( localDate.getTimezoneOffset() * 60000 );
  var indiaUtcOffset = 5.5;
  var indiaDate = new Date( utc + ( 3600000 * indiaUtcOffset ) );
  var ist = indiaDate.toLocaleString();

  $('#time2').html( ist );

  var hour = date.getHours();

  if ( hour > 6 && hour < 12 ){
    console.log('breakfast');
    $('.breakfast').css( 'display', 'inline');
  } else if ( hour >= 12 && hour < 19 ) {
    console.log('lunch');
    $('.lunch').css( 'display', 'inline');
  } else {
    console.log('dinner');
    $('.dinner').css( 'display', 'inline');
  }
}

$(function() {
  updateTime();
  setInterval(updateTime, 1000);
});

