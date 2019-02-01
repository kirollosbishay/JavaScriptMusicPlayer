var songs = ["Adele - Hello.mp3","Stereo Hearts.mp3","Tarabyon.com_Amr Diab - 03.We_Hatebtady.mp3","What Makes You Beautiful.mp3"];
var songTitle = document.getElementById('songTitle');
var songSlider = document.getElementById("songSlider");
var currentTime = document.getElementById("currentTime");
var duration = document.getElementById("duration");
var volumeSlider = document.getElementById("volumeSlider");
var nextSongTitle = document.getElementById("nextSong");
var shuffleButton = document.getElementById("shuffle")
var repeatButton = document.getElementById("repeat")
var repeat = false;
var shuffle = false;
var song = new Audio();
var currentSong=0;
var randNO = [Math.floor(Math.random() * songs.length)];
window.onload = loadSong;
function loadSong () {
	song.src="songs/" + songs[currentSong];
	songTitle.textContent = (currentSong+1)+"."+songs[currentSong];
	song.playbackRate =1;
	nextSongTitle.innerHTML = "<b>next song</b>" + songs[currentSong+1 % songs.length];
	song.play();
	setTimeout(showDuration, 1000)
	if(currentSong>=songs.length && repeat==true){
		currentSong=0;
	}
	// song.volume = volumeSlider.value;
	song.addEventListener("ended", next );
}
setInterval(updateSongSlider, 1000);

function updateSongSlider () {
	// body... 
	var c = Math.round(song.currentTime);
	songSlider.value = c;
	currentTime.textContent = convertTime(c);
}
function convertTime (secs) {
	// body... 
	var min = Math.floor(secs/60);
	var sec = secs % 60;
	min = (min<10) ? "0" + min : min;
	sec = ( sec < 10) ? "0" + sec : sec;
	return (min + ":" + sec);
}
function showDuration(){
	var d = Math.floor(song.duration);
	songSlider.setAttribute("max", d);
}
// var img = document.getElementById("play")
function playOrPause (img) {
	// body... 
	song.playbackRate =1;
	if(song.paused){
		song.play();
		img.src = "images/1.png";
	}else {
		song.pause();
		img.src = "images/play.png"
	}
}
function next() {
	// body... 
	currentSong = currentSong +1 % songs.length;
	loadSong();
}
function previous () {
	// body...
	currentSong--;
	currentSong = (currentSong <0 )? songs.length -1 : currentSong; 
	loadSong();
}
function seekSong () {
	// body... 
	song.currentTime = songSlider.value;
	currentTime.textContent = currentTime(song.currentTime);
}
function adjustVolume () {
	// body... 
	song.volume =  volumeSlider.value;
}
function increasePlaybackRate () {
	// body... 
	song.playbackRate += 0.5;
}
function decreasePlaybackRate () {
	// body... 
	song.playbackRate -= 0.5;
}

shuffleButton.addEventListener('click', function(){
	if ( shuffle== false){

	shuffleButton.style.backgroundColor="Red";
	song.pause();
	currentSong=randNO;
  	loadSong();
  	song.play();
  	randNO = [Math.floor(Math.random() * songs.length)];

  	shuffle = true;
  }else if ( shuffle == true)
  {
	shuffleButton.style.backgroundColor="Green";

  }
 
});
repeatButton.addEventListener("click", function(){
	if (repeat ==false){
	repeatButton.style.backgroundColor="Red";
	repeat = true;
	currentSong = 0;
	loadSong();
}else if (repeat = true){
	repeatButton.style.backgroundColor="Green";

}
})