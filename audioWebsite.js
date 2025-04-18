var mysong = document.getElementById('mysong');
var play = document.getElementById('play');

play.onclick = function(){
   if (mysong.paused){
    mysong.play();
    play.src = 'images1/pause.png';
   }
   else{
    mysong.pause();
    play.src = 'images1/play.png';
   }
}