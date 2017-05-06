function updateTime() {
  var date = new Date();
  $('#time').html( date.toGMTString() );
}

$(function() {
  updateTime();
  setInterval(updateTime, 1000);
});

function updateTime() {
  var localDate = new Date();
  var utc = localDate.getTime() + ( localDate.getTimezoneOffset() * 60000 );
  var indiaUtcOffset = 5.5;
  var indiaDate = new Date( utc + ( 3600000 * indiaUtcOffset ) );
  var ist = indiaDate.toLocaleString();
  $('#time2').html( ist );
}
