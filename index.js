console.log("index.js is connected")

// I: create tile grid cards

// tile grid ID array
let tileGridIDs = [
    1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32,
    33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48,
    49, 50, 51, 52, 53, 54, 55, 56,
    57, 58, 59, 60, 61, 62, 63, 64
];

function createTileGrid() {

    let tileGridRow = document.getElementById("tile-grid-row");

    // create card grid with IDs #1-64
    for (let i = 0; i < tileGridIDs.length; i++) {
        
        // create col
        let tileCol = document.createElement("div");
        tileCol.className = "col";
    
        // create card + assign classes & ID
        let tile = document.createElement("div");
        tile.className = "card tile text-center";
        tile.setAttribute("id", tileGridIDs[i]);
        // console.log(tileGridIDs[i]);
    
        // create card-body div
        let tileBody = document.createElement("div");
        tileBody.className = "card-body";
    
        // create tile-word p
        let pTileWord = document.createElement("p");
        pTileWord.className = "tile-word";
        pTileWord.setAttribute("id" , "tw-" + tileGridIDs[i])
    
        // create tile-syllables p
        let pTileSyllable = document.createElement("p");
        pTileSyllable.className = "tile-syllable";
        pTileSyllable.setAttribute("id" , "ts-" + tileGridIDs[i])
    
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
createTileGrid();

// ----- *** ----- *** ----- *** ----- *** ----- *** ----- *** ----- *** -----

// II: populate tile grid with words, beats, & colors

// tile part of speech ID arrays
let youTiles = [1, 9, 17, 25, 33, 41, 49, 57];
let advTiles = [2, 10, 18, 26, 34, 42, 50, 58];
let verbTiles = [3, 11, 19, 27, 35, 43, 51, 59];
let adjTiles = [4, 12, 20, 28, 36, 44, 52, 60];
let nounTiles = [5, 13, 21, 29, 37, 45, 53, 61];
let intjTiles = [6, 14, 22, 30, 38, 46, 54, 62];
let punctTiles = [7, 15, 23, 31, 39, 47, 55, 63];
let spaceTiles = [8, 16, 24, 32, 40, 48, 56, 64];

// tile color ID arrays
let yellowTiles = [1, 2, 3, 4, 5, 6, 7, 8];
let greenTiles = [9, 10, 11, 12, 13, 14, 15, 16];
let blueTiles = [17, 18, 19, 20, 21, 22, 23, 24];
let indigoTiles = [25, 26, 27, 28, 29, 30, 31, 32];
let violetTiles = [33, 34, 35, 36, 37, 38, 39, 40];
let redTiles = [41, 42, 43, 44, 45, 46, 47, 48];
let orangeTiles = [49, 50, 51, 52, 53, 54, 55, 56];
let blackTiles = [57, 58, 59, 60, 61, 62, 63, 64];

// word variables
let testData = [];
let wordKey = "";
let wordPOS = "";
let wordSyl = 0;
let activeTileID = 1;


// every 2 seconds, return word, ID, & color to tiles based on ID:

/* 

function populateGrid() {
// select ID from ID list
    for (let index = 0; index < tileGridIDs.length; index++) {
        activeTileID = index;
       popColorWordSyl(activeTileID);
    } // for loop end
}; // populateGrid() end
//populateGrid();

setInterval(populateGrid, 1000)
// setInterval(popColorWordSyl, 1000)

 */

function popColorWordSyl() {
   
   // setInterval(function() {



   // }, 500 ) 
}; // popColorWordSyl() end



tileGridIDs.forEach( i => {
    setTimeout(() => {

        activeTileID = i;

        console.log(activeTileID);
         
    // if ID is in tile color array, find card w/matching ID & assign color-line class, else scan next array
    // ---- colors: Y G B I V R O B
        if (yellowTiles.includes(activeTileID)) {
            document.getElementById([activeTileID]).setAttribute("class" , "yellow-line")
        } else if (greenTiles.includes(activeTileID)) {
            document.getElementById([activeTileID]).setAttribute("class" , "green-line")
        } else if (blueTiles.includes(activeTileID)) {
            document.getElementById([activeTileID]).setAttribute("class" , "blue-line")
        } else if (indigoTiles.includes(activeTileID)) {
            document.getElementById([activeTileID]).setAttribute("class" , "indigo-line")
        } else if (violetTiles.includes(activeTileID)) {
            document.getElementById([activeTileID]).setAttribute("class" , "violet-line")
        } else if (redTiles.includes(activeTileID)) {
            document.getElementById([activeTileID]).setAttribute("class" , "red-line")
        } else if (orangeTiles.includes(activeTileID)) {
            document.getElementById([activeTileID]).setAttribute("class" , "orange-line")
        } else if (blackTiles.includes(activeTileID)) {
            document.getElementById([activeTileID]).setAttribute("class" , "black-line")
        }; 

    // if ID is in tilePOS array, select random word + syllable count from list & return to card w/matching ID, else scan next array
        if (youTiles.includes(activeTileID)) {
            document.getElementById(["tw-" + activeTileID]).innerText = "you";
            document.getElementById(["ts-" + activeTileID]).innerText = 1;
        } else if (advTiles.includes(activeTileID)) {
            document.getElementById(["tw-" + activeTileID]).innerText = ambDataAdv[5].word;
            document.getElementById(["ts-" + activeTileID]).innerText = ambDataAdv[5].wordSyl;
        } else if (verbTiles.includes(activeTileID)) {
            document.getElementById(["tw-" + activeTileID]).innerText = ambDataVerb[5].word;
            document.getElementById(["ts-" + activeTileID]).innerText = ambDataVerb[5].wordSyl;
        } else if (adjTiles.includes(activeTileID)) {
            document.getElementById(["tw-" + activeTileID]).innerText = ambDataAdj[5].word;
            document.getElementById(["ts-" + activeTileID]).innerText = ambDataAdj[5].wordSyl;
        } else if (nounTiles.includes(activeTileID)) {
            document.getElementById(["tw-" + activeTileID]).innerText = ambDataNoun[5].word;
            document.getElementById(["ts-" + activeTileID]).innerText = ambDataNoun[5].wordSyl;
        } else if (intjTiles.includes(activeTileID)) {
            document.getElementById(["tw-" + activeTileID]).innerText = ambDataIntj[5].word;
            document.getElementById(["ts-" + activeTileID]).innerText = ambDataIntj[5].wordSyl;
        } else if (punctTiles.includes(activeTileID)) {
            document.getElementById(["tw-" + activeTileID]).innerText = ambDataPunct[5].word;
            document.getElementById(["ts-" + activeTileID]).innerText = ambDataPunct[5].wordSyl;
        } else if (spaceTiles.includes(activeTileID)) {
            document.getElementById(["tw-" + activeTileID]).innerText = "space";
            document.getElementById(["ts-" + activeTileID]).innerText = 1;
        }





     //   popColorWordSyl(activeTileID);
    }, i * 2000);
});
























/* 

// testData function
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

 */



// ****** function activeTile(): 

// get active tile ID (#1-64, in order -- loop through tileGridIDs array?)

// add color-line class & part of speech class according to ID (rather than finding from array data)
// if ID is 1-8, add class yellow-line etc.

// add word & syllable