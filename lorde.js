let lindaBelmarLorde = [
    {
        "knew" : [
            "about bundling up against the wicked cold",
            "about Paradise Plums--hard, oval candies, cherry-red on one side, pineapple-yellow on the other",
            "which West Indian markets along Lenox Avenue carried [Paradise Plums] in tilt-back glass jars on the countertops",
            "how desirable Paradise Plums were to sweet-starved little children...in maintaining discipline on long shopping journeys",
            "exactly how many of the imported goodies could be sucked and rolled around in the mouth before the wicked gum arabic with its acidic british teeth cut through the tongue's pink coat and raised little red pimples",
            "about mixing oils for bruises and rashes",
            "about disposing of all toenail clippings and hair from the comb",
            "about burning candles before All Saint's Day to keep the soucoyants away, lest they suck the blood of her babies",
            "about blessing the food and yourself before eating",
            "about saying prayers before going to sleep",
            ""
        ]
    },
    {
        "missed" : [
            "the bashing of the waves against the sea wall at the foot of Noel's Hill",
        ]
    },
    {
        "home" : [
            "amid the heavy smell of limes",
            "plants that healed",
            "plants that drove you crazy",
            "the trees and fruits and flowers that grew outside the door of the house where she grew up and lived until she married",
          
        ]
    }
];

let deLois = {
        "lived" : "up the block on 142nd Street",
        "never" : "had her hair done",
        "all" : "the neighborhood women sucked their teeth as she walked by",
        "twinkled" : "[her crispy hair] in the summer sun",
        "moved" : "[her big proud stomach] on down the block while I watched,",
        "caring" : "[not] caring wiether or not she was a poem",
        "tied": "[I] my shoes",
        "peep" : "[I] under her blouse as she passed by",
        "loved" : "[her] because she moved like she felt like she was somebody special, like somebody I'd like to know someday",

};


let lindaKnew = [];

for (let index = 0; index < lindaBelmarLorde.length; index++) {
    lindaKnew.push(lindaBelmarLorde.knew[index]);
    console.log(lindaKnew);
};

let lindaMissed = [];

for (let index = 0; index < lindaBelmarLorde.length; index++) {
    lindaKnew.push(lindaBelmarLorde.missed[index]);
    console.log(lindaMissed);
};

let carriacou = [];

for (let index = 0; index < lindaBelmarLorde.length; index++) {
    lindaKnew.push(lindaBelmarLorde.home[index]);
    console.log(carriacou);
};

let deLoisImg = [];

for (let index = 0; index < deLois.length; index++) {
    deLoisImg.push(deLois[index])
    console.log(deLoisImg);
};