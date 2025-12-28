// COUNTDOWN
const targetDate = new Date("January 18, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

 document.getElementById("countdown").innerHTML = `
  <span>${d}<small>Days</small></span>
  <span>${h}<small>Hrs</small></span>
  <span>${m}<small>Min</small></span>
  <span>${s}<small>Sec</small></span>
`;
}, 1000);

// PHOTO MODAL
function openModal(src, event) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalImg").src = src;
  heartBurst(event.clientX, event.clientY);
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

function heartBurst(x, y) {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.fontSize = "20px";
    heart.style.animation = `burst 1s ease-out forwards`;
    heart.style.transform = `translate(${Math.random()*100-50}px, ${Math.random()*-120}px)`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}

// FALLING HEARTS
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 4) + "s";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 300);

document.querySelectorAll(".photos img").forEach(img => {
  img.style.setProperty("--r", Math.random());
});
