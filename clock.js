let is24Hour = true;

function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = "";

    if (!is24Hour) {
        period = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12;
    }

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    document.getElementById("clock").innerText =
        hours + ":" + minutes + ":" + seconds + period;
}

function toggleFormat() {
    is24Hour = !is24Hour;
}

setInterval(updateClock, 1000);
updateClock();
