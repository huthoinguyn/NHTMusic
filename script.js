const $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document);
let playing = false;
let topSong = [
  {
    nameSong: "Anh sai rồi",
    nameArtist: "Sơn Tùng",
    nameFile: "sontung/asairoi.mp3",
    time: "4:22",
    img: "sontung/asairoi.jpg",
    songId: 1,
  },
  {
    nameSong: "Nàng thơ",
    nameArtist: "Amee",
    nameFile: "amee/nangtho.mp3",
    time: "4:22",
    img: "amee/nangtho.webp",
    songId: 2,
  },
  {
    nameSong: "Đế vương",
    nameArtist: "Đình Dũng",
    nameFile: "dinhdung/devuong.mp3",
    time: "4:22",
    img: "dinhdung/devuong.jpg",
    songId: 3,
  },
  {
    nameSong: "Khuôn mặt đáng thương",
    nameArtist: "Sơn Tùng",
    nameFile: "sontung/khuonmatdangthuong.mp3",
    time: "4:10",
    img: "sontung/khuonmatdangthuong.webp",
    songId: 4,
  },
  {
    nameSong: "Shay nắng",
    nameArtist: "Amee",
    nameFile: "amee/shaynang.mp3",
    time: "3:28",
    img: "amee/shaynang.jpg",
    songId: 5,
  },
  {
    nameSong: "Ngày đầu tiên",
    nameArtist: "Đức phúc",
    nameFile: "ducphuc/ngaydautien.mp3",
    time: "3:28",
    img: "ducphuc/ngaydautien.jpg",
    songId: 6,
  },
  {
    nameSong: "Năm ấy",
    nameArtist: "Đức phúc",
    nameFile: "ducphuc/namay.mp3",
    time: "4:20",
    img: "ducphuc/namay.jpg",
    songId: 6,
  },
];
let listSongOf = [
  {
    nameSong: "Khuôn mặt đáng thương",
    nameArtist: "Sơn Tùng mtp",
    nameFile: "sontung/khuonmatdangthuong.mp3",
    img: "sontung/khuonmatdangthuong.webp",
    artist: "sontung",
  },
  {
    nameSong: "Anh sai rồi",
    nameArtist: "Sơn Tùng MTP",
    nameFile: "sontung/asairoi.mp3",
    img: "sontung/asairoi.jpg",
    artist: "sontung",
  },
  {
    nameSong: "Em của ngày hôm qua",
    nameArtist: "Sơn Tùng MTP",
    nameFile: "sontung/emcuangayhomqua.mp3",
    img: "sontung/emcuangayhomqua.webp",
    artist: "sontung",
  },
  {
    nameSong: "Lạc trôi",
    nameArtist: "Sơn Tùng MTP",
    nameFile: "sontung/lactroi.mp3",
    img: "sontung/lactroi.jpg",
    artist: "sontung",
  },
  {
    nameSong: "Nắng ấm xa dần",
    nameArtist: "Sơn Tùng MTP",
    nameFile: "sontung/nangamxadan.mp3",
    img: "sontung/nangamxadan.jfif",
    artist: "sontung",
  },
  {
    nameSong: "Hãy trao cho anh",
    nameArtist: "Sơn Tùng MTP",
    nameFile: "sontung/haytraochoanh.mp3",
    img: "sontung/haytraochoanh.jpg",
    artist: "sontung",
  },
  {
    nameSong: "Nàng thơ",
    nameArtist: "Amee",
    nameFile: "amee/nangtho.mp3",
    img: "amee/nangtho.webp",
    artist: "amee",
  },
  {
    nameSong: "Nói hoặc không nói",
    nameArtist: "Amee",
    nameFile: "amee/noihoackhongnoi.mp3",
    img: "amee/noihoackhongnoi.jpg",
    artist: "amee",
  },
  {
    nameSong: "Shay nắng",
    nameArtist: "Amee",
    nameFile: "amee/shaynang.mp3",
    img: "amee/shaynang.jpg",
    artist: "amee",
  },
  {
    nameSong: "Thay mọi cô gái yêu anh",
    nameArtist: "Amee",
    nameFile: "amee/thaymoicogaiiuanh.mp3",
    img: "amee/thaymoicogaiiuanh.jpg",
    artist: "amee",
  },
  {
    nameSong: "Sao ta ngược lối",
    nameArtist: "Đình dũng",
    nameFile: "dinhdung/saotanguocloi.mp3",
    img: "dinhdung/saotanguocloi.jpg",
    artist: "dinhdung",
  },
  {
    nameSong: "Câu hẹn câu thề",
    nameArtist: "Đình dũng",
    nameFile: "dinhdung/cauhencauthe.mp3",
    img: "dinhdung/cauhencauthe.jpg",
    artist: "dinhdung",
  },
  {
    nameSong: "Đừng hẹn kiếp sau",
    nameArtist: "Đình dũng",
    nameFile: "dinhdung/dunghenkiepsau.mp3",
    img: "dinhdung/dunghenkiepsau.jfif",
    artist: "dinhdung",
  },
  {
    nameSong: "Đế vương",
    nameArtist: "Đình Dũng",
    nameFile: "dinhdung/devuong.mp3",
    img: "dinhdung/devuong.jpg",
    artist: "dinhdung",
  },
  {
    nameSong: "Khác biệt to lớn",
    nameArtist: "Trịnh Thăng Bình",
    nameFile: "ttbinh/khacbiettolon.mp3",
    img: "ttbinh/khacbiettolon.jpg",
    artist: "ttbinh",
  },
  {
    nameSong: "Vỡ tan",
    nameArtist: "Trịnh Thăng Bình",
    nameFile: "ttbinh/votan.mp3",
    img: "ttbinh/votan.jpg",
    artist: "ttbinh",
  },
  {
    nameSong: "Người ấy",
    nameArtist: "Trịnh Thăng Bình",
    nameFile: "ttbinh/nguoiay.mp3",
    img: "ttbinh/nguoiay.jpg",
    artist: "ttbinh",
  },
  {
    nameSong: "Em ngủ chưa",
    nameArtist: "Trịnh Thăng Bình",
    nameFile: "ttbinh/emnguchua.mp3",
    img: "ttbinh/emnguchua.jpg",
    artist: "ttbinh",
  },
  {
    nameSong: "Trái đất đẹp nhất khi có em",
    nameArtist: "Đức phúc",
    nameFile: "ducphuc/traidatdepnhatkhicoem.mp3",
    img: "ducphuc/traidatdepnhatkhicoem.jfif",
    artist: "ducphuc",
  },
  {
    nameSong: "Năm ấy",
    nameArtist: "Đức phúc",
    nameFile: "ducphuc/namay.mp3",
    img: "ducphuc/namay.jpg",
    artist: "ducphuc",
  },
  {
    nameSong: "Ngày đầu tiên",
    nameArtist: "Đức phúc",
    nameFile: "ducphuc/ngaydautien.mp3",
    img: "ducphuc/ngaydautien.jpg",
    artist: "ducphuc",
  },
  {
    nameSong: "Gửi ngàn lời yêu",
    nameArtist: "Đức phúc",
    nameFile: "ducphuc/guinganloiyeu.mp3",
    img: "ducphuc/guinganloiyeu.jpg",
    artist: "ducphuc",
  },
];
let listArtist = [
  {
    name: "Sơn Tùng MTP",
    artist: "sontung",
    img: "sontung/lactroi.jpg",
  },
  {
    name: "Đức Phúc",
    artist: "ducphuc",
    img: "ducphuc/ngaydautien.jpg",
  },
  {
    name: "Trịnh Thăng Bình",
    artist: "ttbinh",
    img: "ttbinh/votan.jpg",
  },
  {
    name: "Amee",
    artist: "amee",
    img: "amee/ava.webp",
  },
  {
    name: "Đình Dũng",
    artist: "dinhdung",
    img: "dinhdung/ava.jpg",
  },
];
let newListSong = [];
const audio = $("audio.songFile");
let indexSong = 0;
const app = {
  handleEvents: function () {
    const _this = this;
    this.currentSong(topSong, indexSong);
    // $(".action .pause").onclick = (e) => {
    //   // _this.isPlaying();
    //   // $(".action .pause i").classList.toggle("fa-circle-pause");
    //   // if (!playing) {
    //   //   if ($(".topsong .image").classList.contains("disable")) {
    //   //     $(".topsong .image").classList.remove("disable");
    //   //   }
    //   //   $(".topsong .image").classList.add("active");
    //   //   audio.play();
    //   //   playing = true;
    //   // } else {
    //   //   if ($(".topsong .image").classList.contains("active")) {
    //   //     $(".topsong .image").classList.remove("active");
    //   //   }
    //   //   $(".topsong .image").classList.add("disable");
    //   //   setTimeout(() => {
    //   //     $(".topsong .image").classList.remove("disable");
    //   //   }, 500);
    //   //   audio.pause();
    //   //   playing = false;
    //   // }
    // };
    $(".action .next").onclick = (e) => {
      indexSong++;
      if (indexSong > topSong.length - 1) {
        indexSong = 0;
      }
      [...$$(".topsong-item")][indexSong].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      _this.currentSong(topSong, indexSong);
      playing = true;
      _this.play(playing);
      _this.isPlaying(indexSong);
    };
    $(".action .prev").onclick = (e) => {
      indexSong--;
      if (indexSong < 0) {
        indexSong = topSong.length - 1;
      }
      [...$$(".topsong-item")][indexSong].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      _this.currentSong(topSong, indexSong);
      playing = true;
      _this.play(playing);
      _this.isPlaying(indexSong);
    };
    $(".action .random").onclick = () => {
      $(".action .random").classList.toggle("active");
    };
    $(".action .replay").onclick = () => {
      $(".action .replay").classList.toggle("active");
    };

    // topsong
    [...$$(".topsong-item")].map((i, ind) => {
      ind += 1;
      i.classList.remove("isPlaying");
      i.querySelector(".order").innerHTML = ind;
    });
    [...$$(".topsong-item")][0].classList.add("isPlaying");
    [...$$(".topsong-item")][0].querySelector(".order").innerHTML =
      '<img src="./icon/wave.gif" />';
    // Handle topsong
    $$(".topsong-item").forEach((item, i) => {
      item.onclick = () => {
        indexSong = i;
        [...$$(".topsong-item")].map((i, ind) => {
          ind += 1;
          i.classList.remove("isPlaying");
          i.querySelector(".order").innerHTML = ind;
        });
        item.classList.add("isPlaying");
        item.querySelector(".order").innerHTML =
          '<img src="./icon/wave.gif" />';
        _this.currentSong(topSong, indexSong);
        playing = true;
        _this.play(playing);
        // audio.play();
      };
    });
    // Listsongof
    $$(".listsongof-item").forEach((item, i) => {
      item.onclick = () => {
        indexSong = i;
        [...$$(".topsong-item")].map((i, ind) => {
          ind += 1;
          i.classList.remove("isPlaying");
          i.querySelector(".order").innerHTML = ind;
        });
        _this.currentSong(newListSong, indexSong);
        playing = true;
        _this.play(playing);
      };
    });
    audio.onended = () => {
      indexSong++;
      if (indexSong > topSong.length - 1) {
        indexSong = 0;
      }
      this.currentSong(indexSong);
      audio.play();
    };

    // Singer
    // [...$$(".singer-item")][0].classList.add("isPlaying");
    // [...$$(".singer-item")][0].querySelector(".playing").innerHTML =
    //   '<img src="./icon/wave.gif" />';
    $$(".singer-item").forEach((item, artIndex) => {
      item.onclick = () => {
        // indexSong = i;
        [...$$(".singer-item")].map((i) => {
          i.classList.remove("isPlaying");
          i.querySelector(".playing").innerHTML = "";
        });
        item.classList.add("isPlaying");
        item.querySelector(".playing").innerHTML =
          '<img src="./icon/wave.gif" />';
        newListSong = [];
        _this.listMusicOf(listArtist[artIndex].artist);
        // _this.currentSong(newListSong, indexSong);
      };
    });
    // Seekbar
    $(".seekbar").onseeking = () => {
      audio.currentTime = this.value;
    };

    // Volume
    let vol = $(".volume input");
    vol.oninput = () => {
      audio.volume = vol.value / 100;
    };
    $(".volume-icon").onclick = (e) => {
      e.target.classList.toggle("fa-volume-xmark");
      if (audio.volume > 0) {
        audio.volume = 0;
      } else {
        audio.volume = vol.value / 100;
      }
    };
  },
  play: function (bool) {
    $(".action .pause").onclick = (e) => {
      if (!bool) {
        this.play(!bool);
        bool = true;
      } else {
        this.play(!bool);
        bool = false;
      }
    };
    if (bool) {
      $(".action .pause i").classList.add("fa-circle-pause");
      if ($(".topsong .image").classList.contains("disable")) {
        $(".topsong .image").classList.remove("disable");
      }
      $(".topsong .image").classList.add("active");
      audio.play();
    } else {
      $(".action .pause i").classList.remove("fa-circle-pause");
      if ($(".topsong .image").classList.contains("active")) {
        $(".topsong .image").classList.remove("active");
      }
      $(".topsong .image").classList.add("disable");
      setTimeout(() => {
        $(".topsong .image").classList.remove("disable");
      }, 500);
      audio.pause();
    }
  },
  isPlaying: function (indSong) {
    [...$$(".topsong-item")].map((i, ind) => {
      ind += 1;
      i.classList.remove("isPlaying");
      i.querySelector(".order").innerHTML = ind;
    });
    $(".action .pause i").classList.add("fa-circle-pause");
    [...$$(".topsong-item")][indSong].classList.add("isPlaying");
    [...$$(".topsong-item")][indSong].querySelector(".order").innerHTML =
      '<img src="./icon/wave.gif" />';
    this.currentSong(indSong);
    this.play(playing);
  },
  render: function () {
    topSong.map((song, i) => {
      // i = i + 1;
      const aud = new Audio();
      let timeSong = 0;
      aud.onloadedmetadata = () => {
        timeSong = aud.duration;
      };
      aud.src = "musics/" + song.nameFile;
      const template = `
          <div class="topsong-item">
                      <div class="order">
                      </div>
                      <div class="info">
                          <h3>${song.nameSong}</h3>
                          <h4>${song.nameArtist}</h4>
                      </div>
                      <div class="timer">
                      ${song.time}
                      </div>
                  </div>
          `;
      $(".topsong-list").insertAdjacentHTML("beforeend", template);
    });
    listArtist.map((art) => {
      const singerTemplate = `
      <div class="singer-item">
      <div class="singer-thumbnail">
      <img src="./img/${art.img}" alt="">
      </div>
      <div class="singer-info">
      <div class="name">${art.name}</div>
      <div class="song">50 songs</div>
      </div>
      <div class="playing"></div>
      </div>
      `;

      $(".singer-list").insertAdjacentHTML("beforeend", singerTemplate);
    });
  },
  listMusicOf: function (artist) {
    $(".listsongof-list").innerHTML = "";
    listSongOf.map((song) => {
      if (song.artist == artist) {
        newListSong.push(song);
      }
    });
    newListSong.map((song, i) => {
      const template = `
                    <div class="listsongof-item">
                            <div class="image">
                                <img src="./img/${song.img}"
                                    alt="">
                            </div>
                            <div class="name">${song.nameSong}</div>
                        </div>
                    `;
      $(".listsongof-list").insertAdjacentHTML("beforeend", template);
    });
    this.handleEvents();
  },
  currentSong: function (songArr, indexNumb) {
    $(".topsong-wrapper .image img").src = `./img/${songArr[indexNumb].img}`;
    $(".playerBar-item .thumbnail img").src = `./img/${songArr[indexNumb].img}`;
    $(".playerBar-item .info .songname").innerText =
      songArr[indexNumb].nameSong;
    $(".playerBar-item .info .author").innerText =
      songArr[indexNumb].nameArtist;
    audio.src = `musics/${songArr[indexNumb].nameFile}`;
    // audio.duration = `musics/${songArr[indexNumb].nameFile}`;
    audio.onloadedmetadata = function () {
      let duration = audio.duration;
      let min = Math.floor(duration / 60);
      let sec = Math.floor(duration % 60);
      if (min < 10) min = "0" + min;
      if (sec < 10) sec = "0" + sec;
      $(".rangeBar .durrTime").innerText = `${min} : ${sec}`;
      audio.ontimeupdate = () => {
        let currentTime = audio.currentTime;
        let min = Math.floor(currentTime / 60);
        let sec = Math.floor(currentTime % 60);
        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;
        $(".rangeBar .currTime").innerText = `${min} : ${sec}`;
        $(".seekbar").value = (currentTime / duration) * 100;
      };
    };
  },
  start: function () {
    this.play(playing);
    this.render();
    this.listMusicOf("sontung");
    this.handleEvents();
  },
};
app.start();
