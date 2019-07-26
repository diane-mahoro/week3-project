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
$("#im1").hover(function() {
$("#im1").css("opacity", "0.2");
$("#text1").show();
},
function(){
$("#im1").css("opacity", "1");
$("#text1").hide();
});
$("#im2").hover(function() {
    $("#im2").css("opacity", "0.2");
    $("#text2").show();
    },
    function(){
    $("#im2").css("opacity", "1");
    $("#text2").hide();
    });
    $("#im3").hover(function() {
        $("#im3").css("opacity", "0.2");
        $("#text3").show();
        },
        function(){
        $("#im3").css("opacity", "1");
        $("#text3").hide();
        });
        $("#im4").hover(function() {
            $("#im4").css("opacity", "0.2");
            $("#text4").show();
            },
            function(){
            $("#im4").css("opacity", "1");
            $("#text4").hide();
            });
            $("#im5").hover(function() {
                $("#im5").css("opacity", "0.2");
                $("#text5").show();
                },
                function(){
                $("#im5").css("opacity", "1");
                $("#text5").hide();
                });
                $("#im6").hover(function() {
                    $("#im6").css("opacity", "0.2");
                    $("#text6").show();
                    },
                    function(){
                    $("#im6").css("opacity", "1");
                    $("#text6").hide();
                    });
                    $("#im7").hover(function() {
                        $("#im7").css("opacity", "0.2");
                        $("#text7").show();
                        },
                        function(){
                        $("#im7").css("opacity", "1");
                        $("#text7").hide();
                        });
                        $("#im8").hover(function() {
                            $("#im8").css("opacity", "0.2");
                            $("#text8").show();
                            },
                            function(){
                            $("#im8").css("opacity", "1");
                            $("#text8").hide();
                            });
$("form").submit(function(event) {
    var a= $("#A1").val();
    alert("thank you very much " + a + "for contacting us");
});
});