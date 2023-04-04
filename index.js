console.log("i.js is connected")

let testGridOld = [
    {
        id: 1,
        line: "yellow-line",
        gridPOS: "preposition",

    },
    {
        id: 2,
        line: "indigo-line",
        gridPOS: "adjective"
    },

];

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

let testWords = [
    {
        word: "black",
        wordPOS: "adjective",
        wordSyllable: "*",
    },
    {
        word: "pynk",
        wordPOS: "adjective",
        wordSyllable: "*"
    }
]

// ***** function tileGrid
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
        console.log(testGrid[i]);
    
        // create card-body div
        let tileBody = document.createElement("div");
        tileBody.className = "card-body";
    
        // create tile-word p
        let pTileWord = document.createElement("p");
        pTileWord.className = "tile-word";
    
        // create tile-syllables p
        let pTileSyllable = document.createElement("p");
        pTileSyllable.className = "tile-syllable";
    
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







let activeTile = ""; 

function nextTile() {
};


// ****** function activeTile(): 

// get active tile ID (#1-64, in order -- loop through testGrid array?)

// add color-line class & part of speech class according to ID (rather than finding from array data)
// if ID is 1-8, add class yellow-line etc.

// add word & syllable