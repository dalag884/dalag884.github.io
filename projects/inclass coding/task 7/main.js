$(document).ready(function(){
    $(".box").click(function(){
       var items = $(".boxes");
var item = Math.floor(Math.random() * items.length);
      $(items[item]).css({backgroundColor:"#6A37B7", color:"white"});
    });
});
