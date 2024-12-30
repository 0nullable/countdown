const targetTimestamp = 1735839000; // January 2, 2025, 6:30 PM Berlin Time (in seconds UTC)

function startCountdown() {
    const updateCountdown = () => {
        const now = Math.floor(Date.now() / 1000); // Current time in seconds (UTC)
        const remaining = targetTimestamp - now;

        console.log("Current Timestamp (seconds):", now);
        console.log("Target Timestamp (seconds):", targetTimestamp);
        console.log("Remaining Time (seconds):", remaining);

        if (remaining <= 0) {
            document.querySelector('.countdown').innerHTML = "It's time!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(remaining / 86400); // 1 day = 86400 seconds
        const hours = Math.floor((remaining % 86400) / 3600); // Remaining hours
        const minutes = Math.floor((remaining % 3600) / 60); // Remaining minutes
        const seconds = remaining % 60; // Remaining seconds

        console.log(`Remaining Time: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    };

    // Update every second
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call immediately to avoid initial delay
}

startCountdown();
