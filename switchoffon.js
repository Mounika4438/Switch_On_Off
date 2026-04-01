let bulb = document.getElementById("bulb");
let cat = document.getElementById("cat");
let statusText = document.getElementById("status");
let onBtn = document.getElementById("on");
let offBtn = document.getElementById("off");

onBtn.onclick = function(){
    bulb.src = "bulbon.png";
    cat.src = "cat.png";
    statusText.textContent = "Switched On";
    onBtn.style.backgroundColor = "green";
    offBtn.style.backgroundColor = "grey";
}

offBtn.onclick = function(){
    bulb.src = "Unlitbulb.png";
    cat.src = "cateyes.png";
    statusText.textContent = "Switched Off";
    onBtn.style.backgroundColor = "grey";
    offBtn.style.backgroundColor = "red";
}

 
 
