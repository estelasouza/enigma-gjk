var interval = null;

function countdown(){
    var now = new Date()
    var eventDate = new Date(2020, 6, 20,21,30)
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTime;

    if (remTime <= 0){
        remTime = 0;
        clearInterval(interval);
        document.getElementById('hidden').style.display = "none"       
        document.getElementById('div-hidden').style.display = "inline"       


    }
    
    var d = remTime / (1000 * 60 * 60 * 24)
    var h = (d - Math.floor(d)) * 24
    var m = (h - Math.floor(h)) * 60
    var s = (m - Math.floor(m)) * 60     
    
    d = Math.floor(d);
    h = Math.floor(h)
    m = Math.floor(m)
    s = Math.floor(s)

    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;
    d = (d<10) ? "0" + d : d;

    document.getElementById("days").textContent = d +'|'
    document.getElementById("hours").textContent = h+':'
    document.getElementById("minutes").textContent = m+':'
    document.getElementById("seconds").textContent = s

}

document.addEventListener('DOMContentLoaded', () => {
    interval = setInterval(countdown, 1000);
});
