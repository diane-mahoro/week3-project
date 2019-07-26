$(document).ready(function() {
$(".clickable").click(function() {
$("#showing1").toggle();
$("#hiden1").toggle();
});

 $(".clickable2").click(function() {
     $("#showing2").toggle();
     $("#hiden2").toggle();
 });

 $(".clickable3").click(function() {
    $("#showing3").toggle();
    $("#hiden3").toggle();
});
$("#im1" || "#im2").hover(function() {
$("#im1").css("opacity", "0.2");
$
},
function(){
$("#im1").css("opacity", "1");
});
$("form").submit(function(event) {
    alert("thank you very much for contacting us");
});
});