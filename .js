let stopButtonElement = document.getElementById("stopButton");
let readyButtonElement = document.getElementById("readyButton");
let goButtonElement = document.getElementById("goButton");

let stopLightElement = document.getElementById("stopLight");
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");

function stopredIndex(){
    stopButtonElement.style.backgroundColor ="#cf1124";
    readyButtonElement.style.backgroundColor ="#4b5069";
    goButtonElement.style.backgroundColor ="#4b5069";
    stopLightElement.style.backgroundColor ="#cf1124";
    readyLightElement.style.backgroundColor= "#4b5069";
    goLightElement.style.backgroundColor="#4b5069";

}

function readyyellowIndex() {
    stopButtonElement.style.backgroundColor ="#4b5069";
    readyButtonElement.style.backgroundColor ="#f7c948";
    goButtonElement.style.backgroundColor ="#4b5069";
    stopLightElement.style.backgroundColor ="#4b5069";
    readyLightElement.style.backgroundColor= "#f7c948";
    goLightElement.style.backgroundColor="#4b5069";

}

function gogreenIndex(){
    stopButtonElement.style.backgroundColor ="#4b5069";
    readyButtonElement.style.backgroundColor ="#4b5069";
    goButtonElement.style.backgroundColor ="#199473";
    stopLightElement.style.backgroundColor ="#4b5069";
    readyLightElement.style.backgroundColor= "#4b5069";
    goLightElement.style.backgroundColor="#199473";

}