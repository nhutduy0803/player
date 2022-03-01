var previous = document.querySelector("#pre");
var play = document.querySelector("#play");
var next = document.querySelector("#next");
var tittle = document.querySelector("#tittle");
var artist = document.querySelector("#artist");
var recent_volume = document.querySelector("#volume");
var volume_show = document.querySelector("#volume_show");
var slider = document.querySelector("#duration_slider");
var show_duration = document.querySelector("#show_duration");
var track_image = document.querySelector("#track-image");
var auto_play = document.querySelector("#auto");
var present = document.querySelector("#present");
var total = document.querySelector("#total");
var timer;
var autoplay = 0;
var index_no = 0;
var playing_song = false;
var track = document.createElement("audio");

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
    singer: "RENJA x SLOW T ",
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
  total.innerHTML = all_song.length;
  present.innerHTML = index_no + 1;
  timer = setInterval(range_slider, 1000);
  reset_slider();
  track.load();
  load_track(index_no);
}

load_track(index_no);

function justplay() {
  if (playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}

function playsong() {
  track.play();
  playing_song = true;
  play.innerHTML = '<i class="fas fa-pause"></i>';
  track_image.classList.add("hihi");
}

function pausesong() {
  track.pause();
  playing_song = false;
  play.innerHTML = '<i class="fas fa-play"></i>';
  track_image.classList.remove("hihi");
}

function previous_song() {
  if (index_no === 0) {
    return false;
  } else {
    index_no--;
  }
  pausesong();
  load_track(index_no);
}
function next_song() {
  if (index_no === all_song.length < 1) {
    return false;
  } else {
    index_no++;
  }
  pausesong();
  load_track(index_no);
}

function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

function range_slider() {
  let position = 0;

  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  if (track.ended) {
    play.innerHTML = '<i class="fas fa-play"></i>';
    if (autoplay == 1) {
      index_no += 1;
      load_track(index_no);
      playsong();
    }
  }
}
