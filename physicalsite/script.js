$(document).ready(function() {
// alert("you got this alert");

$("#gif01").draggable();
$("#blue").draggable();
$("#green").draggable();
$("#yellow").draggable();



        // var music = document.getElementById("m1");
        //
        // music.controls=false;
        // music.autoplay=true;

        var audio = new Audio('summer_beach2.mp3');
        audio.loop=true;

        var audio2=new Audio('wind_bell.mp3');
        var audio3=new Audio('wb2.mp3');
        var audio4=new Audio('wb3.mp3');

        var audio5=new Audio('autumn_insects2.mp3');
        // function
        // audio.play();

$("#gif01").click(function(){
  // alert("The paragraph was clicked.");
if (audio.paused){
  audio.play();
}
else{
  audio.pause();
}

});

$("#curve").click(function(){
  // alert("The paragraph was clicked.");
if (audio5.paused){
  audio5.play();
}
else{
  audio5.pause();
}

});


$("#blue").click(function(){
  //alert("The paragraph was clicked.");
audio2.play();
});

$("#green").click(function(){
  //alert("The paragraph was clicked.");
audio4.play();
});

$("#yellow").click(function(){
  //alert("The paragraph was clicked.");
audio3.play();
});

})
