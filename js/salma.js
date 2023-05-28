document.addEventListener("DOMContentLoaded", () => {
    let countdownElement = document.getElementById("countdown");

    function startCountdown() {
        let targetDate = new Date("2023-06-04T23:59:00").getTime();

        let interval = setInterval(() => {
            let now = new Date().getTime();
            let distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "Nedtællingen er færdig!";
                return;
            }

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            let countdownString = `${days} dage, ${hours} timer, ${minutes} minutter, ${seconds} sekunder`;
            countdownElement.innerHTML = countdownString;
        }, 1000);
    }

    startCountdown();
});
