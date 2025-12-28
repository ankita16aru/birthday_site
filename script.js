// COUNTDOWN
const targetDate = new Date("January 18, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

// PHOTO MODAL
function openModal(src) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalImg").src = src;
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// LETTER
function openLetter() {
  document.getElementById("letterText").style.display = "block";
}

// MUSIC
const music = document.getElementById("bgMusic");
let playing = false;

function toggleMusic() {
  if (!playing) {
    music.play();
    playing = true;
  } else {
    music.pause();
    playing = false;
  }
}

// FALLING HEARTS
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "🤍";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 4) + "s";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 300);
