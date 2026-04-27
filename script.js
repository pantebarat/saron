const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function goProfile(){
  window.location.href = "profile.html";
}

function goHome(){
  window.location.href = "index.html";
}

// AMBIL AUDIO
const music = document.getElementById("bg-music");

// FLAG biar tidak diputar berulang
let musicPlayed = false;

// COBA AUTO PLAY SAAT LOAD
window.addEventListener("load", () => {
  tryPlayMusic();
});

// FUNCTION PLAY
function tryPlayMusic(){
  if(musicPlayed) return;

  const playPromise = music.play();

  if(playPromise !== undefined){
    playPromise
      .then(() => {
        musicPlayed = true;
      })
      .catch(() => {
        // gagal → tunggu interaksi user
        document.addEventListener("click", startMusicOnce);
        document.addEventListener("touchstart", startMusicOnce);
      });
  }
}

// PLAY SEKALI SAAT INTERAKSI
function startMusicOnce(){
  if(!musicPlayed){
    music.play();
    musicPlayed = true;
  }

  document.removeEventListener("click", startMusicOnce);
  document.removeEventListener("touchstart", startMusicOnce);
}

// TOGGLE BUTTON
function toggleMusic(){
  if(music.paused){
    music.play();
  } else {
    music.pause();
  }
}