$(document).ready(function() {
$(".clickable").click(function() {
$(".clckable2").hide();
$(".clckable3").hide();
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

});