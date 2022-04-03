// SECONDS COUNTER CODE BELOW:

let timeContainer = document.getElementById('time-container');
const arrivalDate = new Date(2013, 8, 11);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
    let currentDate = Date();

//time variables converted to epoch time;
    let arrivalTime = arrivalDate.getTime();
    let currentTime = Date.parse(currentDate);

//time difference in seconds below (epoch/1000 = seconds);
    let timeDifference = (currentTime - arrivalTime)/1000;

    timeContainer.innerText = intlNumberFormatter.format(timeDifference);
}, 1000);

// PROJECTS ONCLICK FEATURE BELOW:

document.getElementById('responsive-website').onclick = function changeContent() {
    if (document.getElementById('responsive-website-container').style.display === "inline") {
        document.getElementById('responsive-website-container').style.display = "none";  
    } else {
        document.getElementById('responsive-website-container').style.display = "inline";
    }
 }