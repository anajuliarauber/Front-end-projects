// Set the date we're counting down to
let countDownDate = new Date('November 11, 2022 09:05:00').getTime();

// Update the count down every 1 second
let updatedCountDown = setInterval(interval, 1000);

    function interval(){

        // Get today's date and time
        let todaysDate = new Date().getTime();
        
        // Find the distance between now and the count down date
        let distance = countDownDate - todaysDate ;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in HTML
        document.getElementById('timerDays').innerHTML = days + ":";
        document.getElementById('timerHours').innerHTML = hours + ":";
        document.getElementById('timerMinutes').innerHTML = minutes + ":";
        document.getElementById('timerSeconds').innerHTML = seconds ;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(updatedCountDown);
            document.getElementById("timer").innerHTML = "Contagem regressiva finalizada";
    }

}