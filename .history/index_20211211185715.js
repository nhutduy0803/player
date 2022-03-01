var previous = document.querySelector("#pre");
var play = document.querySelector("#play");
var next = document.querySelector("#next");
var tittle = document.querySelector("#title");
var artist = document.querySelector("#artist");
var recent_volume = document.querySelector("#volume");
var volume_show = document.querySelector("#volume_show");
var slider = document.querySelector("#duration_slider");
var show_duration = document.querySelector("#show_duration");
var track_image = document.querySelector("#track_image");
var auto_play = document.querySelector("#auto");
var present = document.querySelector("#present");
var total = document.querySelector("#total");

let timer;
let autoplay = 0;
let index_no = false;
let track = document.createElement("audio");
let all_song = [
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
