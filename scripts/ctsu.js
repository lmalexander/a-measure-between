console.log("ctsu.js is connected")

let subjBtnText = document.getElementById("subject-btn-text");
let advBtnText = document.getElementById("adverb-btn-text");
let verbBtnText = document.getElementById("verb-btn-text");
let intjBtnText = document.getElementById("intj-btn-text");

document.addEventListener("keydown", function(Event) {
    if (Event.key == "w") {
        subjBtn();
        console.log("w worked");
    }
});

document.addEventListener("keydown", function(Event) {
    if (Event.key == "a") {
        advBtn();
        console.log("a worked");
    }
});

document.addEventListener("keydown", function(Event) {
    if (Event.key == "s") {
        verbBtn();
        console.log("s worked");
    }
});

document.addEventListener("keydown", function(Event) {
    if (Event.key == "d") {
        intjBtn();
        console.log("d worked");
    }
});


function subjBtn() {
    let subjID = Math.floor(Math.random() * 20) + 1;
    subjBtnText.innerText = ambDataNoun[subjID].word;
};

function advBtn() {
    let advID = Math.floor(Math.random() * 19) + 1;
    advBtnText.innerText = ambDataAdv[advID].word;
};

function verbBtn() {
    let verbID = Math.floor(Math.random() * 19) + 1;
    verbBtnText.innerText = ambDataVerb[verbID].word;
};

function intjBtn() {
    let intjID = Math.floor(Math.random() * 6) + 1;
    intjBtnText.innerText = ambDataIntj[intjID].word;
};

