//	HYPE.documents["a-measure-between_ctsu"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="a-measure-between_ctsu.hyperesources",f="a-measure-between_ctsu",g="ameasurebetweenctsu_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/ameasurebetweenctsu_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=null==navigator.userAgentData&&navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_754F||null!=window.HYPE_dtl_754F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-754.full.min.js":"HYPE-754.thin.min.js";c=!0==d?"F":"T";
d=d?"":"";if(false==!1&&(a=k("HYPE_754"+c,"HYPE_dtl_754"+c,a,d),false==!0&&(a=a||k("HYPE_w_754","HYPE_wdtl_754","HYPE-754.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_754","HYPE-754.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=
document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"LordeQuotesFunction",source:"function(hypeDocument, element, event) {\t\n\tlet eroticQuote = [\"The\", \"erotic\", \"is\", \"a\", \"measure\", \"between\", \"the\", \"beginnings\", \"of\", \"our\", \"sense\", \"of\", \"self\", \"and\", \"the\", \"chaos\", \"of\", \"our\", \"strongest\", \"feelings.\", \"It\", \"is\", \"an\", \"internal\", \"sense\", \"of\", \"satisfaction\", \"to\", \"which,\", \"once\", \"we\", \"have\", \"experienced\", \"it,\", \"we\", \"know\", \"we\", \"can\", \"aspire.\"]\n\t\n\tlet divQuote = hypeDocument.getElementById(\"lorde-quotes\")\n\t\n\tfunction display(x) {\n\t\tdivQuote.innerHTML = x\n\t};\n\t\n\t\n\t\n\tdocument.addEventListener(\"keydown\", function(Event) {\n    if (Event.key == \"u\") {\n       \n       \teroticQuote.forEach((word, i) => {\n\t\tsetTimeout(() => {\n\t\t\tdisplay(word)\n\t\t}, 1000 * i);\n\t\n\t} );\n       \n       \n       \n       \n        console.log(\"u returned lorde quotes\");\n    }\n});\n\t\n\t\t\n\t}",identifier:"15"},{name:"LyricsTextReturn",source:"function(hypeDocument, element, event) {\t\n\t\tlet lyricsOne = [];\n\tlet lyricsTwo = [];\n\tlet lyricsThree = [];\n\tlet lyricsFour = [];\n\tlet lyricsFive = [];\n\tlet lyricsSix = [];\n\tlet lyricsSeven = [];\n\tlet lyricsEight = [];\n\t\n\tlet GSheetData = \"https://docs.google.com/spreadsheets/d/e/2PACX-1vSN9Oh8XtkT89FvoamlBiLAnE22jM6XosfVdXzTrZaXCVtHKoFsvHnVxlpAvah1Yw/pub?gid=949267930&single=true&output=csv\";\n\t\n\tPapa.parse(GSheetData, {\n\t\tdownload: true,\n\t\theader: true,\n\t\tcomplete: showData\n\t});\n\t\n\tfunction showData(result) {\n\t\tlet rawData = result.data;\n\t\t\n\t\tfor (let index = 0; index < rawData.length; index++) {\n\t\t\t\n\t\t\tif (rawData[index].bit == 1) {\n\t\t\t\tlyricsOne.push(rawData[index].lyric);\n\t\t\t} else if (rawData[index].bit == 2) {\n\t\t\t\tlyricsTwo.push(rawData[index].lyric);\n\t\t\t} else if (rawData[index].bit == 3) {\n\t\t\t\tlyricsThree.push(rawData[index].lyric);\n\t\t\t} else if (rawData[index].bit == 4) {\n\t\t\t\tlyricsFour.push(rawData[index].lyric);\n\t\t\t} else if (rawData[index].bit == 5) {\n\t\t\t\tlyricsFive.push(rawData[index].lyric);\n\t\t\t} else if (rawData[index].bit == 6) {\n\t\t\t\tlyricsSix.push(rawData[index].lyric);\n\t\t\t} else if (rawData[index].bit == 7) {\n\t\t\t\tlyricsSeven.push(rawData[index].lyric);\n\t\t\t} else if (rawData[index].bit == 8) {\n\t\t\t\tlyricsEight.push(rawData[index].lyric);\n\t\t\t}\n\t\t\t\n\t\t\t \t\t\t\n\t\t}; // for loop end\n\t\t\n\t\t// text one \n\t\t\n\t\t// - function\n\t\t\n\t\tfunction textOne() {\n\t\t\t\n\t\t\tlet textOneDiv = hypeDocument.getElementById(\"text-1\");\n\t\t\t\n\t\t\tlet textOneIndex = Math.floor(Math.random() * 112) + 1;\n\t\t\t\n\t\t\tlet textOneRet = lyricsOne[textOneIndex];\n\t \n\t\t\ttextOneDiv.innerHTML = textOneRet;\n\t\t\t\n\t\t\tconsole.log(textOneRet);\n\t\t}\n\t\t\n\t\t// - event listener\n\t\t\n\t\tdocument.addEventListener(\"keydown\", function(Event) {\n\t    \tif (Event.key == \"q\") {\n\t        textOne();\n\t        console.log(\"q returned lyric one\");\n\t    }\n});\n\n\t\t\n\n\t\t\n\t\t\n\t\t// text two\n\t\t\n\t\t// - function\n\t\t\n\t\tfunction textTwo() {\n\t\t\t\n\t\t\tlet textTwoDiv = hypeDocument.getElementById(\"text-2\");\n\t\t\t\n\t\t\tlet textTwoIndex = Math.floor(Math.random() * 112) + 1;\n\t\t\t\n\t\t\tlet textTwoRet = lyricsTwo[textTwoIndex];\n\t \n\t\t\ttextTwoDiv.innerHTML = textTwoRet;\n\t\t\t\n\t\t\tconsole.log(textTwoRet);\n\t\t}\n\t\t\n\t\t// - event listener\n\t\t\n\t\tdocument.addEventListener(\"keydown\", function(Event) {\n\t    \tif (Event.key == \"w\") {\n\t        textTwo();\n\t        console.log(\"w returned lyric two\");\n\t    }\n});\n\t\t\n\t\t\n\t\t// text three\n\t\t\n\t\t// - function\n\t\t\n\t\tfunction textThree() {\n\t\t\t\n\t\t\tlet textThreeDiv = hypeDocument.getElementById(\"text-3\");\n\t\t\t\n\t\t\tlet textThreeIndex = Math.floor(Math.random() * 112) + 1;\n\t\t\t\n\t\t\tlet textThreeRet = lyricsThree[textThreeIndex];\n\t \n\t\t\ttextThreeDiv.innerHTML = textThreeRet;\n\t\t\t\n\t\t\tconsole.log(textThreeRet);\n\t\t}\n\t\t\n\t\t// - event listener\n\t\t\n\t\tdocument.addEventListener(\"keydown\", function(Event) {\n\t    \tif (Event.key == \"e\") {\n\t        textThree();\n\t        console.log(\"e returned lyric three\");\n\t    }\n});\n\t\t\n\t\t\n\t\t// text four\n\t\t\n\t\t// - function\n\t\t\n\t\tfunction textFour() {\n\t\t\t\n\t\t\tlet textFourDiv = hypeDocument.getElementById(\"text-4\");\n\t\t\t\n\t\t\tlet textFourIndex = Math.floor(Math.random() * 112) + 1;\n\t\t\t\n\t\t\tlet textFourRet = lyricsFour[textFourIndex];\n\t \n\t\t\ttextFourDiv.innerHTML = textFourRet;\n\t\t\t\n\t\t\tconsole.log(textFourRet);\n\t\t}\n\t\t\n\t\t// - event listener\n\t\t\n\t\tdocument.addEventListener(\"keydown\", function(Event) {\n\t    \tif (Event.key == \"r\") {\n\t        textFour();\n\t        console.log(\"r returned lyric four\");\n\t    }\n});\n\t\t\n\t\t\n\t\t// text five\n\t\t\n\t\t// - function\n\t\t\n\t\tfunction textFive() {\n\t\t\t\n\t\t\tlet textFiveDiv = hypeDocument.getElementById(\"text-5\");\n\t\t\t\n\t\t\tlet textFiveIndex = Math.floor(Math.random() * 112) + 1;\n\t\t\t\n\t\t\tlet textFiveRet = lyricsFive[textFiveIndex];\n\t \n\t\t\ttextFiveDiv.innerHTML = textFiveRet;\n\t\t\t\n\t\t\tconsole.log(textFiveRet);\n\t\t}\n\t\t\n\t\t// - event listener\n\t\t\n\t\tdocument.addEventListener(\"keydown\", function(Event) {\n\t    \tif (Event.key == \"t\") {\n\t        textFive();\n\t        console.log(\"t returned lyric five\");\n\t    }\n});\n\t\t\n\t\t\n\t\t// text six\n\t\t\n\t\t// - function\n\t\t\n\t\tfunction textSix() {\n\t\t\t\n\t\t\tlet textSixDiv = hypeDocument.getElementById(\"text-6\");\n\t\t\t\n\t\t\tlet textSixIndex = Math.floor(Math.random() * 112) + 1;\n\t\t\t\n\t\t\tlet textSixRet = lyricsSix[textSixIndex];\n\t \n\t\t\ttextSixDiv.innerHTML = textSixRet;\n\t\t\t\n\t\t\tconsole.log(textSixRet);\n\t\t}\n\t\t\n\t\t// - event listener\n\t\t\n\t\tdocument.addEventListener(\"keydown\", function(Event) {\n\t    \tif (Event.key == \"y\") {\n\t        textSix();\n\t        console.log(\"y returned lyric six\");\n\t    }\n});\n\t\t\n\t\t\t\n\t\t\n\t}; // showData end\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n\t\n}",identifier:"22"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_754"+c](f,g,{"3":{p:2,n:"float-instrumental_trumpet.mp3",g:"25",t:"audio/mpeg"},"1":{n:"tajamuka-script.regular.ttf"},"-2":{n:"blank.gif"},"-1":{n:"PIE.htc"},"2":{n:"TheNeueBlackVF.ttf"},"0":{n:"papaparse.js"}},
l,["<style> \n\n@font-face {\n\tfont-family: \"tajamuka\";\n\tsrc: url(\"tajamuka-script.regular.ttf\")\n}\n\n</style>","<style>\n\t@font-face {\n\t\tfont-family: \"the-neue-black\";\n\t\tsrc: url(\"TheNeueBlackVF.ttf\")\n\t}\n\n</style>"],e,[{n:"main",o:"1",X:[0]}],[{o:"3",A:{a:[{p:4,h:"15"},{p:4,h:"22"},{p:12,o:"25",q:false}]},p:"600px",a:100,Y:600,Z:400,b:100,cA:false,c:"#000",L:[{a:[{p:0}],B:"Custom"}],bY:1,d:600,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["31","32","34","26","33","30","28","27","29"],n:"Untitled Layout","_":0,v:{"26":{aU:8,G:"#D783FF",c:96,bS:45,aV:8,r:"inline",d:27,s:"tajamuka",t:26,Z:"break-word",w:"a measure",j:"absolute",x:"visible",k:"div",y:"preserve",z:14,aS:8,aT:8,a:16,F:"justify",b:110},"34":{aU:8,G:"#D783FF",c:209,bS:45,aV:8,r:"inline",d:86,s:"tajamuka",t:26,Z:"break-word",i:"text-4",w:"<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:8,aS:8,aT:8,a:359,F:"right",b:80},"29":{aU:8,G:"#D783FF",c:91,bS:45,aV:8,r:"inline",d:28,s:"tajamuka",t:26,Z:"break-word",w:"between<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:13,aS:8,aT:8,a:150,F:"justify",b:347},"32":{aU:8,G:"#FF9300",c:296,bS:45,aV:8,r:"inline",d:43,s:"the-neue-black",t:36,g:"#000",Z:"break-word",i:"lorde-quotes",w:"<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:272,F:"center",b:16},"27":{aU:8,G:"#D783FF",c:209,bS:45,aV:8,r:"inline",d:86,s:"tajamuka",t:26,Z:"break-word",i:"text-6",w:"<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:359,F:"right",b:284},"30":{aU:8,G:"#D783FF",c:209,bS:45,aV:8,r:"inline",d:86,s:"tajamuka",t:26,Z:"break-word",i:"text-5",w:"<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,aT:8,a:359,F:"right",b:188},"33":{aU:8,G:"#D783FF",c:209,bS:45,aV:8,r:"inline",d:86,s:"tajamuka",t:26,Z:"break-word",i:"text-3",w:"<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:9,aS:8,aT:8,a:16,F:"left",b:158},"28":{aU:8,G:"#D783FF",c:209,bS:45,aV:8,r:"inline",d:86,s:"tajamuka",t:26,Z:"break-word",i:"text-2",w:"<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:10,aS:8,aT:8,a:16,F:"left",b:255},"31":{aU:8,G:"#D783FF",c:209,bS:45,aV:8,r:"inline",d:86,s:"tajamuka",t:26,u:"normal",Z:"break-word",v:"normal",i:"text-1",w:"<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:12,aS:8,aT:8,a:16,F:"left",b:16}}}],{},h,{},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
