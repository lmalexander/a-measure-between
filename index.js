console.log("i.js is connected")

let testGrid = [
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
        tile.setAttribute("id", testGrid[i].id);
        console.log(testGrid[i].id);
    
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
    document.getElementById("1").setAttribute("class" , "indigo-line");
};







let activeTile = ""; 

function nextTile() {
};


// ****** function activeTile(): 

// get active tile ID (#1-64, in order -- loop through testGrid array?)

// add color-line class & part of speech class according to ID (rather than finding from array data)
// if ID is 1-8, add class yellow-line etc.

// add word & syllable