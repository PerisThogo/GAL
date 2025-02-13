document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.querySelector(".envelope");
    const letter = document.querySelector(".letter");
    const clickMe = document.querySelector(".click-me");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const gotchaContainer = document.querySelector(".gotcha-container");

    let heartsStarted = false;

    // Ensure Click Me is clickable
    clickMe.style.zIndex = "10000";
    clickMe.style.pointerEvents = "auto";

    // Click Me button triggers letter opening
    clickMe.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents envelope click from triggering
        openLetter();
    });

    // Clicking the envelope opens or closes the letter
    envelope.addEventListener("click", function (event) {
        if (!envelope.classList.contains("open")) {
            openLetter();
        } else {
            closeLetter();
        }
        event.stopPropagation();
    });

    // Clicking outside closes the letter
    document.addEventListener("click", function (event) {
        if (!envelope.contains(event.target) && event.target !== clickMe) {
            closeLetter();
        }
    });

    function openLetter() {
        envelope.classList.add("open");
        letter.style.opacity = "1";
        letter.style.transform = "translateX(-50%) translateY(-50px)";
        clickMe.style.opacity = "0";
        clickMe.style.pointerEvents = "none"; // Disable Click Me when open

        if (!heartsStarted) {
            startFallingHearts();
            heartsStarted = true;
        }
    }

    function closeLetter() {
        envelope.classList.remove("open");
        letter.style.opacity = "0";
        letter.style.transform = "translateX(-50%) translateY(50px)";
        clickMe.style.opacity = "1";
        clickMe.style.pointerEvents = "auto"; // Re-enable Click Me when closed
    }

    // Move "No" button when hovered or clicked
    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);

    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // When "Yes" is clicked, show "Gotcha" message
    yesBtn.addEventListener("click", function () {
        gotchaContainer.style.display = "flex";
        setTimeout(() => {
            gotchaContainer.style.opacity = "1";
        }, 100);

        // Hide "Gotcha" after 3 seconds
        setTimeout(() => {
            gotchaContainer.style.opacity = "0";
            setTimeout(() => {
                gotchaContainer.style.display = "none";
            }, 500);
        }, 3000);
    });

    // Falling Hearts Animation
    function startFallingHearts() {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("falling-heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 500);
    }
});
