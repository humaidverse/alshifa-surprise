// Floating Hearts
const hearts = document.getElementById("hearts");

function createHeart() {
    console.log("Heart created");
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "50%";
heart.style.color = "red";
heart.style.zIndex = "9999";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);

// Start Journey Button
const startBtn = document.getElementById("startBtn");

startBtn.onclick = function () {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
};

// Envelope
const envelope = document.getElementById("envelope");
const message = document.getElementById("message");

if (envelope && message) {
    envelope.onclick = function () {
    envelope.classList.add("open");

    setTimeout(() => {
        envelope.innerHTML = "❤️";
        message.style.display = "block";
    }, 500);
};
}

// Final Surprise
if (surpriseBtn) {
    surpriseBtn.onclick = function () {
        confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
});

alert("❤️ You are the best sister in the world! ❤️\n\nThank you for always being there for me. 🥰");
    };
}
// Lightbox Gallery
const galleryImages = document.querySelectorAll(".card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

galleryImages.forEach(img => {
    img.onclick = function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    };
});

lightbox.onclick = function () {
    lightbox.style.display = "none";
};
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = function () {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "⏸️ Pause Music";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }
};
function closeWelcome(){
    document.getElementById("welcome").style.display = "none";
}
function checkPassword(){

    const password = document.getElementById("password").value;

    if(password === "Alshifa2002"){
        document.getElementById("lockScreen").style.display="none";
    }else{
        alert("Wrong Password ❤️");
    }

}