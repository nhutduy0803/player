// ///////////////////////////////////////////////////////

let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#tittle");
let recent_volume = document.querySelector("#volume");
let volume_show = document.querySelector("#volume_show");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#show_duration");
let track_image = document.querySelector("#track-image");
let auto_play = document.querySelector("#auto");
let present = document.querySelector("#present");
let total = document.querySelector("#total");
let artist = document.querySelector("#artist");

let timer;
let autoplay = 0;
let index_no = 0;
let Playing_song = false;
//create  audio Element
let track = document.createElement("audio");

//All songs list
let All_song = [
  {
    name: "Cưa Là Đổ",
    path: "./assets/mp3/CƯA LÀ ĐỔ - PHÁT HỒ X2X _ OFFICIAL MUSIC VIDEO LYRICS.mp3",
    img: "./assets/img/cưa là đổ.jpg",
    singer: "Phát Hồ",
  },
  // {
  //   name: "Biết Tìm Đâu",
  //   path: "./assets/mp3/_từng ngày dài còn lại một mình nơi đây..._ _ biết tìm đâu (𝙨𝙡𝙤𝙬𝙚𝙙 + 𝙧𝙚𝙫𝙚𝙧𝙗).mp3",
  //   img: "./assets/img/biết tìm đâu.jpg",
  //   singer: "Tuấn Hưng",
  // },

  {
    name: "Ngược Chiều Yêu Thương",
    path: "./assets/mp3/NGƯỢC CHIỀU YÊU THƯƠNG (Lyric Video) _ DƯƠNG EDWARD x VŨ DUY KHÁNH _ KHÚC HOẠ TÌNH 2021 (TẬP 8 ).mp3",
    img: "./assets/img/ngược chiều yêu thương.jpg",
    singer: "Dương Edward",
  },
  {
    name: "BigcityBoi",
    path: "./assets/mp3/TOULIVER x BINZ - _BIGCITYBOI_ (Official Music Video).mp3",
    img: " ./assets/img/bigcityboiz.jpg",
    singer: "Binz",
  },
  {
    name: "Comming For You",
    path: "./assets/mp3/SwitchOTR - Coming for You (Official Audio) ft. A1 x J1.mp3",
    img: " ./assets/img/comming for you.jpg",
    singer: "XboxserviceX",
  },
  {
    name: "Trust nobody",
    path: "./assets/mp3/Shiloh Dynasty & beats mode - Trust Nobody (Lyrics).mp3",
    img: "./assets/img/img5-trust nobody.jpg",
    singer: "shiloh Dynasty",
  },
  {
    name: "Phi Hành Gia",
    path: "./assets/mp3/phi hanh gia -  RENJA x SLOW T x LIL WUYN x KAIN x SUGAR CANE.mp3",
    img: "./assets/img/img4-phi hanh gia.jpg",
    singer: "RENJA x SLOW T ",
  },
  {
    name: "Seve",
    path: "./assets/mp3/Tez Cadey - Seve (slowed remix).mp3",
    img: "./assets/img/img3-seve.jpg",
    singer: "Tez cadey",
  },
  {
    name: "Mood",
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
  {
    name: "Liều Thuốc Cho Trái Tim",
    path: "./assets/mp3/Liều Thuốc Cho Trái Tim - Nguyễn Đình Vũ ft. Neko x Minn「Lo - Fi Version by 1 9 6 7」_ Audio Lyrics.mp3",
    img: "./assets/img/liều thuốc cho trái tim.jpg",
    singer: "Nguyễn Đình Vũ",
  },
];

// All functions

// function load the track
function load_track(index_no) {
  clearInterval(timer);
  reset_slider();

  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  track.load();

  timer = setInterval(range_slider, 1000);
  total.innerHTML = All_song.length;
  present.innerHTML = index_no + 1;
}

load_track(index_no);

//mute sound function
function mute_sound() {
  track.volume = 0;
  volume.value = 0;
  volume_show.innerHTML = 0;
}

// checking.. the song is playing or not
function justplay() {
  if (Playing_song == false) {
    playsong();
    track_image.classList.add("hihi");
  } else {
    pausesong();
    track_image.classList.remove("hihi");
  }
}

// reset song slider
function reset_slider() {
  slider.value = 0;
}

// play song
function playsong() {
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fas fa-pause"></i>';
}

//pause song
function pausesong() {
  track.pause();
  Playing_song = false;
  play.innerHTML = '<i class="fas fa-play "></i>';
}

// next song
function next_song() {
  if (index_no < All_song.length - 1) {
    index_no += 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = 0;
    load_track(index_no);
    playsong();
  }
}

// previous song
function previous_song() {
  if (index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = All_song.length;
    load_track(index_no);
    playsong();
  }
}

// change volume
function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

// change slider position
function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch() {
  if (autoplay == 1) {
    autoplay = 0;
    auto_play.style.background = "#5db996";
  } else {
    autoplay = 1;
    auto_play.style.background = "#FF8A65";
  }
}

function range_slider() {
  let position = 0;

  // update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  // function will run when the song is over
  if (track.ended) {
    if (autoplay == 1) {
      index_no += 1;
      load_track(index_no);
      playsong();
    }
  }
}
