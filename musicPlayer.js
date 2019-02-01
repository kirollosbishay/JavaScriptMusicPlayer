var songs = ["Adele - Hello.mp3","Stereo Hearts.mp3","Tarabyon.com_Amr Diab - 03.We_Hatebtady.mp3","What Makes You Beautiful.mp3"];
var songTitle = document.getElementById('songtitle');
var songSlider = document.getElementById("songslider");
var currentTime = document.getElementById("currenttime");
var duration = document.getElementById("duration");
var volumeSlider = document.getElementById("volumeSlider");
var nextSongTitle = document.getElementById("nextSong");
var song = new Audio();
var currentSong=0;
window.onload = loadSong;
function loadSong () {
	song.src="songs/" + songs[currentSong];
	songTitle.textContent = (currentSong+1)+"."+songs[currentSong];
	song.playbackRate =1;
	nextSongTitle.innerHTML = "<b>next song</b>" + songs[currentSong+1 % songs.length];
	song.play();
}
setInterval(updateSongSlider, 1000);

function updateSongSlider () {
	// body... 
	var c = Math.round(song.currentTime);
	songSlider.value = c;
	currentTime.textContent = convertTime(c);
}
function convertTime () {
	// body... 
	var min = Math.floor(sec/60);
	var sec = sec % 60;
	min = (min<10) ? "0" + min : min;
	sec = ( sec < 10) ? "0" + sec : sec;
	return (min + ":" + sec);
}
function showDuration(){
	var d = Math.floor(song.duration);
	songSlider.setAttribute("max", d);
}
var img = document.getElementById("play")
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
}
function previous () {
	// body...
	currentSong--;
	currentSong = (currentSong <0 )? songs.length -1 : currentSong; 
	loadSong();
}
function seeksong () {
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