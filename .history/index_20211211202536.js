let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let tittle = document.querySelector("#tittle");
let artist = document.querySelector("#artist");
let recent_volume = document.querySelector("#volume");
let volume_show = document.querySelector("#volume_show");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#show_duration");
let track_image = document.querySelector("#track_image");
let auto_play = document.querySelector("#auto");
let present = document.querySelector("#present");
let total = document.querySelector("#total");

let timer;
let autoplay = 0;
let index_no = 0;
let playing_song = false;
let track = document.createElement("audio");

var all_song = [
  {
    name: "trust nobody",
    path: "./assets/mp3/Shiloh Dynasty & beats mode - Trust Nobody (Lyrics).mp3",
    img: "./assets/img/img5-trust nobody.jpg",
    singer: "shiloh Dynasty",
  },
  {
    name: "Phi Hanh Gia",
    path: "./assets/mp3/phi hanh gia -  RENJA x SLOW T x LIL WUYN x KAIN x SUGAR CANE.mp3",
    img: "./assets/img/img4-phi hanh gia.jpg",
    singer: "RENJA x SLOW T x LIL WUYN x KAIN x SUGAR CANE",
  },
  {
    name: "seve",
    path: "./assets/mp3/Tez Cadey - Seve (slowed remix).mp3",
    img: "./assets/img/img3-seve.jpg",
    singer: "Tez cadey",
  },
  {
    name: "mood",
    path: "./assets/mp3/mood-chillbaby.mp3",
    img: "./assets/img/img2-mood.jpg",
    singer: "Chill Baby",
  },
  {
    name: "Teen Vọng Cổ",
    path: "./assets/mp3/y2mate.com - Teen Vọng Cổ Remix TikTok Umie x Teddy x meChill_480p.mp4",
    img: "./assets/img/img1.jpg",
    singer: "Teddy",
  },
];

function load_track(index_no) {
  track.src = all_song[index_no].path;
  tittle.innerHTML = all_song[index_no].name;
  track_image.src = all_song[index_no].img;
  artist.innerHTML = all_song[index_no].singer;
  track.load();
}

load_track(index_no);

function justplay() {
  if (playing_song == true) {
    playsong();
  } else {
    pausesong();
  }
}

function playsong() {
  track.play();
  playing_song == true;
  play.innerHTML = '<i class="fas fa-pause"></i>';
}

function pausesong() {
  track.pause();
  playing_song = false;
  play.innerHTML = '<i class="fas fa-play"></i>';
}
