console.log("ctsu.js is connected")

let subjBtnText = document.getElementById("subject-btn-text");
let advBtnText = document.getElementById("adverb-btn-text");
let verbBtnText = document.getElementById("verb-btn-text");
let intjBtnText = document.getElementById("intj-btn-text");


function subjBtn() {
    let subjID = Math.floor(Math.random() * 20) + 1;
    subjBtnText.innerText = ambDataNoun[subjID].word;
}
subjBtn();

function advBtn() {
    let advID = Math.floor(Math.random() * 19) + 1;
    advBtnText.innerText = ambDataAdv[advID].word;
}
advBtn();

function verbBtn() {
    let verbID = Math.floor(Math.random() * 19) + 1;
    verbBtnText.innerText = ambDataVerb[verbID].word;
}
verbBtn();

function intjBtn() {
    let intjID = Math.floor(Math.random() * 6) + 1;
    intjBtnText.innerText = ambDataIntj[intjID].word;
}
intjBtn();
