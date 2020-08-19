document.addEventListener("keypress", function(e) {
    if(e.code == "KeyA") {
        let audA = new Audio("audio/A.mp3");
        audA.play();
        // console.log("The 'A' key is pressed.");
    }
    else if(e.code == "KeyS") {
        let audS = new Audio("audio/S.mp3");
        audS.play();
        // console.log("The 'S' key is pressed.");
    }
    else if(e.code == "KeyD") {
        let audD = new Audio("audio/D.mp3");
        audD.play();
        // console.log("The 'D' key is pressed.");
    }
    else if(e.code == "KeyF") {
        let audF = new Audio("audio/F.mp3");
        audF.play();
        // console.log("The 'F' key is pressed.");
    }
    else if(e.code == "KeyG") {
        let audG = new Audio("audio/G.mp3");
        audG.play();
        // console.log("The 'G' key is pressed.");
    }
    else if(e.code == "KeyH") {
        let audH = new Audio("audio/H.mp3");
        audH.play();
        // console.log("The 'H' key is pressed.");
    }
    else if(e.code == "KeyJ") {
        let audJ = new Audio("audio/J.mp3");
        audJ.play();
        // console.log("The 'J' key is pressed.");
    }
    else if(e.code == "KeyW") {
        let audW = new Audio("audio/W.mp3");
        audW.play();
        // console.log("The 'J' key is pressed.");
    }
    else if(e.code == "KeyE") {
        let audE = new Audio("audio/E.mp3");
        audE.play();
        // console.log("The 'J' key is pressed.");
    }
    else if(e.code == "KeyT") {
        let audT = new Audio("audio/T.mp3");
        audT.play();
        // console.log("The 'J' key is pressed.");
    }
    else if(e.code == "KeyY") {
        let audY = new Audio("audio/Y.mp3");
        audY.play();
        // console.log("The 'J' key is pressed.");
    }
    else if(e.code == "KeyU") {
        let audU = new Audio("audio/U.mp3");
        audU.play();
        // console.log("The 'J' key is pressed.");
    }
    else {
        console.log("Some other key was pressed.")
    }
});