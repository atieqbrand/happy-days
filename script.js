function celebrate() {
    document.getElementById("message").innerHTML =
        "🎊 Happy Birthday Zunaisha! 🎊<br>May all your wishes come true! 💕✨";

    // Confetti
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");

        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = Math.random() * 20 + 15 + "px";
        confetti.style.animation = "fall 3s linear forwards";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Falling animation
let style = document.createElement("style");

style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(110vh) rotate(360deg);
    }
}
`;

document.head.appendChild(style);