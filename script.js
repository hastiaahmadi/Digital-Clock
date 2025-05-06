function updateClock() {
    const now = new Date(); 
    const hours = now.getHours(); 
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    //Show clock
    const timeString = `${hours.toString().padStart(2, '0')}:
    ${minutes.toString().padStart(2, '0')}:
    ${seconds.toString().padStart(2, '0')}`;
    
    document.getElementById("clock").textContent = timeString;

    //Changing background color
    if (hours >= 6 && hours < 18) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "blue";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}

//Update hours every hours
setInterval(updateClock, 1000);
updateClock();
