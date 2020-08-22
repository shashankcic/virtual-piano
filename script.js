document.getElementById("keyA").addEventListener("click", function(e) {
    let audA = new Audio("audio/A.mp3");
    audA.play();
    document.getElementById("keyA").style.transform = "scale(1.1)";
});

document.getElementById("keyS").addEventListener("click", function(e) {
    let audS = new Audio("audio/S.mp3");
    audS.play();
    document.getElementById("keyS").style.transform = "scale(1.1)";
});

document.getElementById("keyD").addEventListener("click", function(e) {
    let audD = new Audio("audio/D.mp3");
    audD.play();
    document.getElementById("keyD").style.transform = "scale(1.1)";
});

document.getElementById("keyF").addEventListener("click", function(e) {
    let audF = new Audio("audio/F.mp3");
    audF.play();
    document.getElementById("keyF").style.transform = "scale(1.1)";
});

document.getElementById("keyG").addEventListener("click", function(e) {
    let audG = new Audio("audio/G.mp3");
    audG.play();
    document.getElementById("keyG").style.transform = "scale(1.1)";
});

document.getElementById("keyH").addEventListener("click", function(e) {
    let audH = new Audio("audio/H.mp3");
    audH.play();
    document.getElementById("keyH").style.transform = "scale(1.1)";
});

document.getElementById("keyJ").addEventListener("click", function(e) {
    let audJ = new Audio("audio/J.mp3");
    audJ.play();
    document.getElementById("keyJ").style.transform = "scale(1.1)";
});

document.getElementById("keyW").addEventListener("click", function(e) {
    let audW = new Audio("audio/W.mp3");
    audW.play();
    document.getElementById("keyW").style.transform = "scale(1.1)";
});

document.getElementById("keyE").addEventListener("click", function(e) {
    let audE = new Audio("audio/E.mp3");
    audE.play();
    document.getElementById("keyE").style.transform = "scale(1.1)";
});

document.getElementById("keyT").addEventListener("click", function(e) {
    let audT = new Audio("audio/T.mp3");
    audT.play();
    document.getElementById("keyT").style.transform = "scale(1.1)";
});

document.getElementById("keyY").addEventListener("click", function(e) {
    let audY = new Audio("audio/Y.mp3");
    audY.play();
    document.getElementById("keyY").style.transform = "scale(1.1)";
});

document.getElementById("keyU").addEventListener("click", function(e) {
    let audU = new Audio("audio/U.mp3");
    audU.play();
    document.getElementById("keyU").style.transform = "scale(1.1)";
});

document.addEventListener("keypress", function(e) {
    if(e.code == "KeyA") {
        let audA = new Audio("audio/A.mp3");
        audA.play();
        document.getElementById("keyA").style.transform = "scale(1.1)";
    }
    else if(e.code == "KeyS") {
        let audS = new Audio("audio/S.mp3");
        audS.play();
        document.getElementById("keyS").style.transform = "scale(1.1)";
    }
    else if(e.code == "KeyD") {
        let audD = new Audio("audio/D.mp3");
        audD.play();
        document.getElementById("keyD").style.transform = "scale(1.1)";
    }
    else if(e.code == "KeyF") {
        let audF = new Audio("audio/F.mp3");
        audF.play();
        document.getElementById("keyF").style.transform = "scale(1.1)";
    }
    else if(e.code == "KeyG") {
        let audG = new Audio("audio/G.mp3");
        audG.play();
        document.getElementById("keyG").style.transform = "scale(1.1)";
    }
    else if(e.code == "KeyH") {
        let audH = new Audio("audio/H.mp3");
        audH.play();
        document.getElementById("keyH").style.transform = "scale(1.1)";
    }
    else if(e.code == "KeyJ") {
        let audJ = new Audio("audio/J.mp3");
        audJ.play();
        document.getElementById("keyJ").style.transform = "scale(1.1)";
    }
    else if(e.code == "KeyW") {
        let audW = new Audio("audio/W.mp3");
        audW.play();
        document.getElementById("keyW").style.transform = "scale(1.1)";
    }
    else if(e.code == "KeyE") {
        let audE = new Audio("audio/E.mp3");
        audE.play();
        document.getElementById("keyE").style.transform = "scale(1.1)";
    }
    else if(e.code == "KeyT") {
        let audT = new Audio("audio/T.mp3");
        audT.play();
        document.getElementById("keyT").style.transform = "scale(1.1)";
    }
    else if(e.code == "KeyY") {
        let audY = new Audio("audio/Y.mp3");
        audY.play();
        document.getElementById("keyY").style.transform = "scale(1.1)";
    }
    else if(e.code == "KeyU") {
        let audU = new Audio("audio/U.mp3");
        audU.play();
        document.getElementById("keyU").style.transform = "scale(1.1)";
    }
    else {
        console.log("Some other key was pressed.")
    }
});

document.addEventListener("keyup", function() {
    document.getElementById("keyA").style.transform = "scale(1.0)";
    document.getElementById("keyS").style.transform = "scale(1.0)";
    document.getElementById("keyD").style.transform = "scale(1.0)";
    document.getElementById("keyF").style.transform = "scale(1.0)";
    document.getElementById("keyG").style.transform = "scale(1.0)";
    document.getElementById("keyH").style.transform = "scale(1.0)";
    document.getElementById("keyJ").style.transform = "scale(1.0)";
    document.getElementById("keyW").style.transform = "scale(1.0)";
    document.getElementById("keyE").style.transform = "scale(1.0)";
    document.getElementById("keyT").style.transform = "scale(1.0)";
    document.getElementById("keyY").style.transform = "scale(1.0)";
    document.getElementById("keyU").style.transform = "scale(1.0)";
});

document.addEventListener("mouseout", function() {
    document.getElementById("keyA").style.transform = "scale(1.0)";
    document.getElementById("keyS").style.transform = "scale(1.0)";
    document.getElementById("keyD").style.transform = "scale(1.0)";
    document.getElementById("keyF").style.transform = "scale(1.0)";
    document.getElementById("keyG").style.transform = "scale(1.0)";
    document.getElementById("keyH").style.transform = "scale(1.0)";
    document.getElementById("keyJ").style.transform = "scale(1.0)";
    document.getElementById("keyW").style.transform = "scale(1.0)";
    document.getElementById("keyE").style.transform = "scale(1.0)";
    document.getElementById("keyT").style.transform = "scale(1.0)";
    document.getElementById("keyY").style.transform = "scale(1.0)";
    document.getElementById("keyU").style.transform = "scale(1.0)";
});

function scalingup(name) {
    document.getElementById(name).style.transform = "scale(1.05)";
};

function scalingdown(name) {
    document.getElementById(name).style.transform = "scale(1.0)";
};

let scaleup = setInterval(scalingup,1500,"heading");
let scaledown = setInterval(scalingdown,1800,"heading");

document.addEventListener("keydown", function(){
    if(scaleup) clearInterval(scaleup);
    if (scaledown) clearInterval(scaledown);
    scalingdown("heading");
});

document.addEventListener("mousedown", function(){
    if(scaleup) clearInterval(scaleup);
    if (scaledown) clearInterval(scaledown);
    scalingdown("heading");
});
