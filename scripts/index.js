console.log("index.js")

// ----- *** ----- *** ----- *** ----- *** ----- *** ----- *** ----- *** -----

// create tileID array
let tileGridIDs = [
    1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32
];

// tile part of speech ID arrays
let aTiles = [1, 9, 17, 25];
let verbTiles = [2, 10, 18, 26];
let betweenTiles = [3, 11, 19, 27];
let youTiles = [4, 12, 20, 28];
let andTiles = [5, 13, 21, 29];
let yourTiles = [6, 14, 22, 30];
let adjTiles = [7, 15, 23, 31];
let nounTiles = [8, 16, 24, 32];

// tile color ID arrays
let yellowTiles = [1, 2, 3, 4, 5, 6, 7, 8];
let greenTiles = [9, 10, 11, 12, 13, 14, 15, 16];
let blueTiles = [17, 18, 19, 20, 21, 22, 23, 24];

let redTiles = [25, 26, 27, 28, 29, 30, 31, 32];


// variables
let i = 1;
let activeWordID = 0;

// ----- *** ----- *** ----- *** ----- *** ----- *** ----- *** ----- *** -----

// I: create tile grid
function createGrid() {

    let tileGridRow = document.getElementById("tile-grid-row");
        
    for (let index = 0; index < tileGridIDs.length; index++) {
        // create col
        let tileCol = document.createElement("div");
        tileCol.className = "col";
    
        // create card button + assign classes & ID
        let tile = document.createElement("div");
        tile.className = "card tile text-center btn";
        tile.setAttribute("id", tileGridIDs[index]);
        tile.setAttribute("type", "button");
        tile.setAttribute("data-bs-toggle" , "modal");
        tile.setAttribute("data-bs-target" , "#modal-" + [index]);
    
        // create card-body div
        let tileBody = document.createElement("div");
        tileBody.className = "card-body";
        tileBody.setAttribute("id" , "cb-" + tileGridIDs[index]);
    
        // create tile-word p
        let pTileWord = document.createElement("p");
        pTileWord.className = "tile-word";
        pTileWord.setAttribute("id" , "tw-" + tileGridIDs[index])

    
        // append card elements to card
        tileBody.appendChild(pTileWord);
        tile.appendChild(tileBody);
    
        // append card to col
        tileCol.appendChild(tile);
    
        // append col to tile-grid-row
        tileGridRow.append(tileCol);
    }    
};
createGrid();


// ----- *** ----- *** ----- *** ----- *** ----- *** ----- *** ----- *** -----

// papa parse data
let ambGSheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWh26h65bH4-gzqIehi16G05IIVmsLKK0xyg9SE4BjqodEtAkfoUKD-vNAg_3tcDsvKN_NGXUvhVhV/pub?gid=0&single=true&output=csv";

let dataVerbsArray = [];
let dataNounsArray = [];
let dataAdjArray = [];

// > papaparse CSV to JSON pull
Papa.parse(ambGSheetURL, {
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


function popGrid() {

    console.log(dataNounsArray);
    console.log(dataVerbsArray);
    console.log(dataAdjArray);


    tileGridIDs.forEach( i => {

        setTimeout(() => {

        // every 2 seconds, return word, ID, & color to tiles based on ID:
            let activeNounID = Math.floor(Math.random() * 48) + 1;
            let activeVerbID = Math.floor(Math.random() * 48) + 1;
            let activeAdjID = Math.floor(Math.random() * 13) + 1;
   
        // if ID is in tile color array, find card w/matching ID & assign color-line class, else scan next array
            if (yellowTiles.includes(i)) {
                document.getElementById([i]).setAttribute("class" , "card tile text-center yellow-line")
            } else if (greenTiles.includes(i)) {
                document.getElementById([i]).setAttribute("class" , "card tile text-center green-line")
            } else if (blueTiles.includes(i)) {
                document.getElementById([i]).setAttribute("class" , "card tile text-center blue-line")
            } else if (redTiles.includes(i)) {
                document.getElementById([i]).setAttribute("class" , "card tile text-center red-line")
            }; 

        // if ID is in tilePOS array, select random word + syllable count from list & return to card w/matching ID, else scan next array
            if (aTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = "a";
            } else if (verbTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = dataVerbsArray[activeVerbID];
            } else if (betweenTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = "between";
            } else if (youTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = "you";
            } else if (andTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = "and";
            } else if (yourTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = "your";
            } else if (adjTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = dataAdjArray[activeAdjID];
            } else if (nounTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = dataNounsArray[activeNounID];

        }}, i * 1000);
    });
};


setTimeout(popGrid, 20000);


/* 
else if (breakTiles.includes(i)) {
    let breakBtn = document.createElement("button");
    breakBtn.innerHTML = "break"
    breakBtn.setAttribute("type" , "button");
    breakBtn.className = "btn btn-outline-dark btn-lg break-btn";
    breakBtn.setAttribute("data-bs-toggle" , "modal");
    breakBtn.setAttribute("data-bs-target" , "#modal-" + i);
    document.getElementById(["btn-break-div-" + i]).appendChild(breakBtn); */