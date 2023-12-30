const   second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        fireworkContainer = document.querySelector('.fireworks-container')

// SET DATE NEW YEAR
let new_year = "Jan 1, 2024 00:00:00",

// SET DATE TESTING ONLY
//let new_year = "Dec 30, 2023 12:45:00",

    countDown = new Date(new_year).getTime(),
    interval = setInterval(function() {    
  
        let now = new Date().getTime(),
        distance = countDown - now;
        
        document.getElementById("digit_days").innerText = pad(Math.floor(distance / (day))),
        document.getElementById("digit_hours").innerText = pad(Math.floor((distance % (day)) / (hour))),
        document.getElementById("digit_minutes").innerText = pad(Math.floor((distance % (hour)) / (minute))),
        document.getElementById("digit_seconds").innerText = pad(Math.floor((distance % (minute)) / second)),
        document.getElementById("new_seconds").innerText = new_pad(Math.floor((distance % (minute)) / second));
        
		if (distance <= day){
            document.getElementById('days').style.display = "none";
        }

        if (distance <= hour){
            document.getElementById('hours').style.display = "none";
        }

        if (distance <= minute) {
            document.getElementById("full").style.display = "none";
            document.getElementById("half").style.display = "block";
        }

        if (distance <= second) {
            document.getElementById("new-year-text").style.display = "block";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("year_text").style.display = "block";
            document.getElementById("half").style.display = "none";      
            fireworks.start();      
            clearInterval(interval);
            }

    }, 0)

function pad(n) {
return (n < 10 ? '0' : '') + n;
}
            
function new_pad(x) {
return (x < 10 ? '' : '') + x;
}

const fireworks = new Fireworks(fireworkContainer, {
    speed: 20,
    acceleration: 1,
    friction: 1,
    gravity: 4,
    particles: 400,
    explosion: 10
})