const songs = [
  { title: "Canción 1", src: "music/song1.mp3" },
  { title: "Canción 2", src: "music/song2.mp3" },
  { title: "Canción 3", src: "music/song3.mp3" }
];

let currentIndex = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const playlist = document.getElementById("playlist");

function loadSong(index) {
  currentIndex = index;
  audio.src = songs[index].src;
  title.textContent = songs[index].title;
  audio.play();
}

// construir playlist
songs.forEach((song, i) => {
  const div = document.createElement("div");
  div.textContent = song.title;
  div.onclick = () => loadSong(i);
  playlist.appendChild(div);
});

// controles
document.getElementById("play").onclick = () => {
  if (audio.paused) audio.play();
  else audio.pause();
};
document.getElementById("next").onclick = () => {
  loadSong((currentIndex + 1) % songs.length);
};
document.getElementById("prev").onclick = () => {
  loadSong((currentIndex - 1 + songs.length) % songs.length);
};

// cargar la primera canción al inicio
loadSong(0);
