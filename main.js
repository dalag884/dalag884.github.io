$(function() {
  $(".hover").mouseenter(function(){
    console.log( $(this) );
    $(this).addClass('active');
  });
});
