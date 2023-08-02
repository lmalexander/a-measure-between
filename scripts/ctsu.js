console.log("ctsu.js is connected")


// papa parse data
let ambDataGSheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWh26h65bH4-gzqIehi16G05IIVmsLKK0xyg9SE4BjqodEtAkfoUKD-vNAg_3tcDsvKN_NGXUvhVhV/pub?gid=0&single=true&output=csv";

let dataVerbsArray = [];
let dataNounsArray = [];
let dataAdjArray = [];

// > papaparse CSV to JSON pull
Papa.parse(ambDataGSheetURL, {
    download: true,
    header: true,
    complete: showData,
});


// > data return function 
function showData(result) {
    let rawData = result.data;
    // console.log(rawData)

    for (let index = 0; index < rawData.length; index++) {
        
        if (rawData[index].partOfSpeech === "noun") {
             dataNounsArray.push(rawData[index].word);
        } else if (rawData[index].partOfSpeech === "verb") {
             dataVerbsArray.push(rawData[index].word)
        } else if (rawData[index].partOfSpeech === "adjective") {
             dataAdjArray.push(rawData[index].word)
        }
    }
};

let ambLordeGSheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWh26h65bH4-gzqIehi16G05IIVmsLKK0xyg9SE4BjqodEtAkfoUKD-vNAg_3tcDsvKN_NGXUvhVhV/pub?gid=1897655938&single=true&output=csv";
let lordeFilepathArray = [];

Papa.parse(ambLordeGSheetURL, {
    download: true,
    header: true,
    complete: showLorde,
});

function showLorde(result) {
    let rawLordeData = result.data;

    for (let index = 0; index < rawLordeData.length; index++) {
        lordeFilepathArray.push(rawLordeData[index]);
        
    }
}


let verbText = document.getElementById("verb-text");
let adjText = document.getElementById("adj-text");
let nounText = document.getElementById("noun-text");
let lordeAudio = document.getElementById("lorde-audio");
let breakModalBtn = document.getElementById("break-modal-btn")


function verbTextReturn() {
    let verbID = Math.floor(Math.random() * 47) + 1;
    verbText.innerText = dataVerbsArray[verbID];
};

function adjTextReturn() {
    let adjID = Math.floor(Math.random() * 12) + 1;
    adjText.innerText = dataAdjArray[adjID];
};

function nounTextReturn() {
    let nounID = Math.floor(Math.random() * 47) + 1;
    nounText.innerText = dataNounsArray[nounID];
};

function lordeAudioReturn() {
    let lordeID = Math.floor(Math.random() * 5) + 1;
    lordeAudio.setAttribute("src" , lordeFilepathArray[lordeID].filepath);
}

function breakModalEssay() {

}


document.addEventListener("keydown", function(Event) {
    if (Event.key == "w") {
        verbTextReturn();
        console.log("w returned a verb");
    }
});

document.addEventListener("keydown", function(Event) {
    if (Event.key == "a") {
        nounTextReturn();
        console.log("a returned a verb");
    }
});

document.addEventListener("keydown", function(Event) {
    if (Event.key == "s") {
        adjTextReturn();
        console.log("s returned an adjective");
    }
});

document.addEventListener("keydown", function(Event) {
    if (Event.key == "d") {
        lordeAudioReturn();
        console.log("d worked");
    }
});