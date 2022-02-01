var bg = document.querySelector(".bg");
var time = 5;
var loaddiv = document.createElement("div");
var interval = setInterval(loading, 1000);

function blur () {
    this.bg.style.animation = `${time}s ease-in blurbackground` ;

    loaddiv.classList.add("loading");
    document.body.appendChild(loaddiv);

    interval()
}

function loading () {
    
    loaddiv.innerHTML = `time to load is ${time}`
    time -= 1 ;
    if (time < 0) {
        loaddiv.remove();
        clearInterval(interval);
        console.log("stop")
    }
}

window.onload = blur;