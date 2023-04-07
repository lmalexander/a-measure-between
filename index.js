console.log("index.js is connected")

// make tile grid
let testGrid = [
    1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32,
    33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48,
    49, 50, 51, 52, 53, 54, 55, 56,
    57, 58, 59, 60, 61, 62, 63, 64
];

function tileGrid() {

    let tileGridRow = document.getElementById("tile-grid-row");

    // create card grid with IDs #1-64
    for (let i = 0; i < testGrid.length; i++) {
        
        // create col
        let tileCol = document.createElement("div");
        tileCol.className = "col";
    
        // create card + assign classes & ID
        let tile = document.createElement("div");
        tile.className = "card tile text-center";
        tile.setAttribute("id", testGrid[i]);
        // console.log(testGrid[i]);
    
        // create card-body div
        let tileBody = document.createElement("div");
        tileBody.className = "card-body";
    
        // create tile-word p
        let pTileWord = document.createElement("p");
        pTileWord.className = "tile-word";
        pTileWord.setAttribute("id" , "tw-" + testGrid[i])
    
        // create tile-syllables p
        let pTileSyllable = document.createElement("p");
        pTileSyllable.className = "tile-syllable";
        pTileSyllable.setAttribute("id" , "ts-" + testGrid[i])

    
        // append card elements to card
        tileBody.appendChild(pTileWord);
        tileBody.appendChild(pTileSyllable);
        tile.appendChild(tileBody);
    
        // append card to col
        tileCol.appendChild(tile);
    
        // append col to tile-grid-row
        tileGridRow.append(tileCol);
        
    }

};
tileGrid();


// add color
function colorTile () {    
    document.getElementById("1").setAttribute("class" , "yellow-line");
    document.getElementById("9").setAttribute("class" , "green-line");
    document.getElementById("17").setAttribute("class" , "blue-line");
    document.getElementById("25").setAttribute("class" , "indigo-line");
    document.getElementById("33").setAttribute("class" , "violet-line");
    document.getElementById("41").setAttribute("class" , "red-line");
    document.getElementById("49").setAttribute("class" , "orange-line");
    document.getElementById("57").setAttribute("class" , "black-line");

};


// add words
let testData = [];
let wordKey = "";
let wordPOS = "";
let wordSyl = 0;

function ambTiles() {

    for (let i = 0; i < ambData.length; i++) {
        let wordKey = ambData[i].word;
        let wordPOS = ambData[i].wordPOS;
        let wordSyl = ambData[i].wordSyl;
        
        console.log(wordKey);
        console.log(wordPOS);
        console.log(wordSyl);
     
        testData.push({
            "wordKEY" : wordKey,
            "wordPOS" : wordPOS,
            "wordSYL" : wordSyl,
        })  
    };
}
ambTiles();

console.log(testData);
console.log(testData[6]);


function wordTiles() {
    let activeWord = testData[6].wordKEY;
    document.getElementById("tw-6").innerText = activeWord;
}
wordTiles();



// ****** function activeTile(): 

// get active tile ID (#1-64, in order -- loop through testGrid array?)

// add color-line class & part of speech class according to ID (rather than finding from array data)
// if ID is 1-8, add class yellow-line etc.

// add word & syllable

/* 
let activeTile = ""; 

function nextTile() {
} */;