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

// function cngbulb(){
//     document.getElementById("offbulb").src="Unlitbulb.png";
//     document.getElementById("cateye").src = "cateyes.png ";
//     document.getElementById("p").textContent="Switched off";
//     document.getElementById("on").style.backgroundColor="grey";
//     document.getElementById("off").style.backgroundColor="red";
// }
// function original(){
//     document.getElementById("offbulb").src="bulbon.png";
//     document.getElementById("cateye").src = "cat.png ";
//     document.getElementById("p").textContent="Switched on";
//     document.getElementById("on").style.backgroundColor="green";
//     document.getElementById("off").style.backgroundColor="grey";

// }