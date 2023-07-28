console.log("ctsu.js is connected")

let subjBtnText = document.getElementById("subject-btn-text");

function subjBtn() {
    let subjID = Math.floor(Math.random() * 20) + 1;

    subjBtnText.innerText = ambDataNoun[subjID].word;

}
subjBtn();