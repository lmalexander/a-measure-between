console.log("index.js is connected")

// create tileID array
let tileGridIDs = [1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32,
    33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48,
    49, 50, 51, 52, 53, 54, 55, 56,
    57, 58, 59, 60, 61, 62, 63, 64];

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

// variables
// let i = 1;
let activeWordID = 0;
// let randID = 0;

// ----- *** ----- *** ----- *** ----- *** ----- *** ----- *** ----- *** -----

// I: create tile grid cards
async function createTileID() {

    randID = Math.floor(Math.random() * 64) + 1;

    if (!tileGridIDs.includes(randID)) { 
        tileGridIDs.push(randID);
    //function createTileGrid() {

    let tileGridRow = document.getElementById("tile-grid-row");
        
        // create col
        let tileCol = document.createElement("div");
        tileCol.className = "col";
    
        // create card + assign classes & ID
        let tile = document.createElement("div");
        tile.className = "card tile text-center";
        tile.setAttribute("id", randID);
        console.log(randID);
    
        // create card-body div
        let tileBody = document.createElement("div");
        tileBody.className = "card-body";
    
        // create tile-word p
        let pTileWord = document.createElement("p");
        pTileWord.className = "tile-word";
        pTileWord.setAttribute("id" , "tw-" + randID)
    
        // create tile-syllables p
        let pTileSyllable = document.createElement("p");
        pTileSyllable.className = "tile-syllable";
        pTileSyllable.setAttribute("id" , "ts-" + randID)
    
        // append card elements to card
        tileBody.appendChild(pTileWord);
        tileBody.appendChild(pTileSyllable);
        tile.appendChild(tileBody);
    
        // append card to col
        tileCol.appendChild(tile);
    
        // append col to tile-grid-row
        tileGridRow.append(tileCol);
//};
// createTileGrid();


       // console.log(randID);
       // console.log(tileGridIDs);
      //  return createTileGrid(randID);
    } else if (tileGridIDs.length < 64) {
        return createTileID();
    } else if (tileGridIDs.length = 64) {
        clearInterval(idInterval);
       return console.log("all 64 tile IDs created");

    }




};
let idInterval = setInterval(createTileID, 1)



// II: populate tile grid with words, beats, & colors

 createTileID().then(

    function popGrid() {

    console.log(tileGridIDs);

    tileGridIDs.forEach( i => {

        setTimeout(() => {
            console.log(i);

            // every 2 seconds, return word, ID, & color to tiles based on ID:
            let activeWordID = Math.floor(Math.random() * 5) + 1;

            console.log(activeWordID);
            
        // if ID is in tile color array, find card w/matching ID & assign color-line class, else scan next array
        // ---- colors: Y G B I V R O B
            if (yellowTiles.includes(i)) {
                document.getElementById([i]).setAttribute("class" , "yellow-line")
            } else if (greenTiles.includes(i)) {
                document.getElementById([i]).setAttribute("class" , "green-line")
            } else if (blueTiles.includes(i)) {
                document.getElementById([i]).setAttribute("class" , "blue-line")
            } else if (indigoTiles.includes(i)) {
                document.getElementById([i]).setAttribute("class" , "indigo-line")
            } else if (violetTiles.includes(i)) {
                document.getElementById([i]).setAttribute("class" , "violet-line")
            } else if (redTiles.includes(i)) {
                document.getElementById([i]).setAttribute("class" , "red-line")
            } else if (orangeTiles.includes(i)) {
                document.getElementById([i]).setAttribute("class" , "orange-line")
            } else if (blackTiles.includes(i)) {
                document.getElementById([i]).setAttribute("class" , "black-line")
            }; 

        // if ID is in tilePOS array, select random word + syllable count from list & return to card w/matching ID, else scan next array
            if (youTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = "you";
                document.getElementById(["ts-" + i]).innerText = 1;
            } else if (advTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = ambDataAdv[activeWordID].word;
                document.getElementById(["ts-" + i]).innerText = ambDataAdv[activeWordID].wordSyl;
            } else if (verbTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = ambDataVerb[activeWordID].word;
                document.getElementById(["ts-" + i]).innerText = ambDataVerb[activeWordID].wordSyl;
            } else if (adjTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = ambDataAdj[activeWordID].word;
                document.getElementById(["ts-" + i]).innerText = ambDataAdj[activeWordID].wordSyl;
            } else if (nounTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = ambDataNoun[activeWordID].word;
                document.getElementById(["ts-" + i]).innerText = ambDataNoun[activeWordID].wordSyl;
            } else if (intjTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = ambDataIntj[activeWordID].word;
                document.getElementById(["ts-" + i]).innerText = ambDataIntj[activeWordID].wordSyl;
            } else if (punctTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = ambDataPunct[activeWordID].word;
                document.getElementById(["ts-" + i]).innerText = ambDataPunct[activeWordID].wordSyl;
            } else if (spaceTiles.includes(i)) {
                document.getElementById(["tw-" + i]).innerText = "break";
                document.getElementById(["ts-" + i]).innerText = 1;
            }
        }, 500);
    });
    },
     
    function (error) { console.log ("async error")}
    
    );


