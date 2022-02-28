$(document).ready(function() {
// alert("you got this alert");
$("#text01").draggable();
$("#gif00").draggable();
$("#text01").hover(function(){
   $("#link1").show();
   });

$("#img01").click(function(){
    $("#text01").toggle();
   });

   $("#img02").hover(function(){
        $(this).toggle();
        });

  $("#text02").hover(function(){
        $("#text03").append("Linabell! ");
        });


})
