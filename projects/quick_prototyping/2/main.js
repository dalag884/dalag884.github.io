function updateTime() {
  var date = new Date();
  $('#time').html( date.toGMTString() );

}
$(function() {
  updateTime();
  setInterval(updateTime, 1000);
});




