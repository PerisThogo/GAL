document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.querySelector(".envelope");
    const flap = document.querySelector(".flap");
    const letter = document.querySelector(".letter");
    const clickMe = document.querySelector(".click-me");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const gotchaContainer = document.querySelector(".gotcha-container");

    // Toggle envelope open/close
    envelope.addEventListener("click", function () {
        if (envelope.classList.contains("open")) {
            envelope.classList.remove("open");
            setTimeout(() => {
                letter.style.opacity = "0";
                letter.style.transform = "translateX(-50%) translateY(50px)";
                clickMe.style.opacity = "1";
            }, 500);
        } else {
            envelope.classList.add("open");
            setTimeout(() => {
                letter.style.opacity = "1";
                letter.style.transform = "translateX(-50%) translateY(-50px)";
                clickMe.style.opacity = "0";
            }, 500);
        }
    });

    // Make "Click Me" bounce to grab attention
    setInterval(() => {
        clickMe.classList.toggle("bounce");
    }, 1500);

    // Make the "No" button move when hovered or clicked
    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);

    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    // When "Yes" is clicked, show "Gotcha" message with animation
    yesBtn.addEventListener("click", function () {
        gotchaContainer.style.display = "block";
        setTimeout(() => {
            gotchaContainer.style.opacity = "1";
        }, 100);

        // Hide "Gotcha" after 3 seconds and reset
        setTimeout(() => {
            gotchaContainer.style.opacity = "0";
            setTimeout(() => {
                gotchaContainer.style.display = "none";
            }, 500);
        }, 3000);
    });
});
