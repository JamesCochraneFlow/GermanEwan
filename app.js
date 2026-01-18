function bottom(){
    var x = document.getElementById("texts");
    x.scrollIntoView({behavior: "smooth",block: "end"});
}

// first article


var a1 = [
["schlimm","bad","https://www.collinsdictionary.com/dictionary/german-english/schlimm","adj"],
["erneut","(once) again","https://www.collinsdictionary.com/dictionary/german-english/erneut","adv"],
["der Nachwuchs","young people","https://www.collinsdictionary.com/dictionary/german-english/nachwuchs","noun"],
["bestellen","to order","https://www.collinsdictionary.com/dictionary/german-english/bestellen","verb"],
["recht haben","to be right","https://www.collinsdictionary.com/dictionary/german-english/recht-haben","verb"],
["an allen Ecken und Enden","in every nook and cranny","https://www.dict.cc/?s=Ecken+und+Enden","adv"],
["widerlegen","to prove wrong","https://www.collinsdictionary.com/dictionary/german-english/widerlegen","verb"],
["zuletzt","in the end","https://www.collinsdictionary.com/dictionary/german-english/zuletzt","adv"],
["umgehen","to go (a)round","https://www.collinsdictionary.com/dictionary/german-english/umgehen","verb"],
["die Sage","myth","https://en.wiktionary.org/wiki/Sage#German","noun"],
["\u00fc"+"berholen","to overtake","https://www.collinsdictionary.com/dictionary/german-english/uberholen","verb"],
["besiegen","to defeat","https://www.collinsdictionary.com/dictionary/german-english/besiegen","verb"],
["der Gegner","opponent","https://www.collinsdictionary.com/dictionary/german-english/gegner","noun"],
["vergangen","past/last","https://www.collinsdictionary.com/dictionary/german-english/vergangen","adj"],
["durchgehend","throughout","https://www.collinsdictionary.com/dictionary/german-english/durchgehend","adv"],
["\u00fc"+"berzeugen","to convince","https://www.collinsdictionary.com/dictionary/german-english/uberzeugen","verb"],
["zwar","indeed","https://en.wiktionary.org/wiki/zwar#German","adv"],
["tats"+"\u00e4"+"chlich","actual(ly)/real(ly)","https://en.wiktionary.org/wiki/tats%C3%A4chlich","adj"],
["das Turnier","tournament","https://www.collinsdictionary.com/dictionary/german-english/turnier","noun"],
["die Reihe","row","https://www.collinsdictionary.com/dictionary/german-english/reihe","noun"],
["jdn auf etw aufmerksam machen","to draw sb's attention to sth","https://www.collinsdictionary.com/dictionary/german-english/aufmerksam","other"],
["wohl","possibly/probably","https://en.wiktionary.org/wiki/wohl","adv"],
["hinterlassen","to leave","https://www.collinsdictionary.com/dictionary/german-english/hinterlassen","verb"],
["zugestehen","to concede","https://www.collinsdictionary.com/dictionary/german-english/zugestehen","verb"],
["erinnern an","to be reminiscent of","https://www.collinsdictionary.com/dictionary/german-english/erinnern-an","other"],
["am Leben","alive","https://www.dict.cc/?s=am+Leben","adj"],
["die Vorrunde","qualifying round","https://www.collinsdictionary.com/dictionary/german-english/vorrunde","noun"],
["die Parade","parry (sport)","https://www.collinsdictionary.com/dictionary/german-english/parade","noun"],
["allerdings","though","https://www.collinsdictionary.com/dictionary/german-english/allerdings","adv"],
["w"+"\u00fc"+"st","chaotic","https://www.collinsdictionary.com/dictionary/german-english/wust_2","adj"],
["wom"+"\u00f6"+"glich","possibly","https://www.collinsdictionary.com/dictionary/german-english/womoglich","adv"],
["einholen","to catch up to","https://en.wiktionary.org/wiki/einholen","verb"],
["der Sturm","forward line (sport)","https://www.collinsdictionary.com/dictionary/german-english/sturm","noun"],
["der Verein","club (sport)","https://www.collinsdictionary.com/dictionary/german-english/verein","noun"],
["anf"+"\u00fc"+"hren","to lead","https://www.collinsdictionary.com/dictionary/german-english/anfuhren","verb"],
["der Treffer","goal (=Tor)","https://www.collinsdictionary.com/dictionary/german-english/treffer","noun"],
["der Abstand","margin","https://www.collinsdictionary.com/dictionary/german-english/abstand","noun"],
["der Torj"+"\u00e4"+"ger","(goal)scorer","https://www.collinsdictionary.com/dictionary/german-english/torjager","noun"],
["insbesondere","particularly","https://www.collinsdictionary.com/dictionary/german-english/insbesondere","adv"],
["mit etw davonkommen","to get away with sth","https://www.dict.cc/?s=mit+davonkommen","verb"],
["abtauchen","to go to ground","https://en.wiktionary.org/wiki/abtauchen","verb"],
["im Gegensatz zu","in contrast to","https://www.collinsdictionary.com/dictionary/german-english/gegensatz","other"],
["echt","real (proper)","https://www.collinsdictionary.com/dictionary/german-english/echt","adj"],
["der Strafraum","penalty box","https://www.collinsdictionary.com/dictionary/german-english/strafraum","noun"],
["erzielen","to score (sport)","https://www.collinsdictionary.com/dictionary/german-english/erzielen","verb"],
["der Joker","wild card","https://www.collinsdictionary.com/dictionary/german-english/joker","noun"],
["der Vollstrecker","finisher (football)","https://www.dict.cc/?s=Vollstrecker","noun"],
["sich verletzen","to injure oneself","https://www.collinsdictionary.com/dictionary/german-english/verletzen","verb"],
["die Abwehr","defence","https://www.collinsdictionary.com/dictionary/german-english/abwehr","noun"],
["absolvieren","to complete","https://www.collinsdictionary.com/dictionary/german-english/absolvieren","verb"],
["Zweik"+"\u00e4"+"mpfe","duels","https://www.dict.cc/?s=Zweik%C3%A4mpfe","noun"],
["unterfordert","unchallenged","https://www.dict.cc/?s=unterfordert","adj"],
["dennoch","nevertheless","https://www.collinsdictionary.com/dictionary/german-english/dennoch","adv"],
["die Nachl"+"\u00e4"+"ssigkeit","carelessness","https://www.collinsdictionary.com/dictionary/german-english/nachlassigkeit","noun"],
["die Not","necessity","https://en.wiktionary.org/wiki/Not#German","noun"],
["etw in Kauf nehmen","to accept sth","https://www.collinsdictionary.com/dictionary/german-english/kauf","other"],
["der Fl"+"\u00fc"+"chtigkeitsfehler","careless mistake","https://www.collinsdictionary.com/dictionary/german-english/fluchtigkeitsfehler","noun"],
["austreiben","to drive out","https://www.collinsdictionary.com/dictionary/german-english/austreiben","verb"]
];

for (i in a1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctiona(event, this)');
    //change letter
    b.setAttribute('id', "a" + i);
    b.setAttribute("class",a1[i][3]);
    b.appendChild(document.createTextNode(a1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper');
    wrapper.appendChild(b);
};

var a1setting = 2;
//change function name
function lang1(){
    if (a1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = a1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= a1[index][0];
    }
}
a1setting = a1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctiona(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = a1[index][0];
    var english = a1[index][1];
    var link = a1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper");
x.style.height = "auto";
}
//change function name
function o1() {
    //change wrapper name
    var x = document.getElementById("wrapper");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

//second article

var b1 = [
["begrenzen auf","to restict to","https://www.collinsdictionary.com/dictionary/german-english/begrenzen","verb"],
["die Aufforstung","reforestation","https://www.dict.cc/?s=Aufforstung","noun"],
["erreichbar","attainable","https://www.collinsdictionary.com/dictionary/german-english/erreichbar","adj"],
["der Vorschlag","suggestion","https://www.collinsdictionary.com/dictionary/german-english/vorschlag","noun"],
["jdm/etw zufolge","according to sb/sth","https://www.dict.cc/?s=zufolge","other"],
["bek" + "\u00e4" + "mpfen","to fight","https://www.collinsdictionary.com/dictionary/german-english/bekampfen","verb"],
["bislang","so far/until now (=bisher)","https://en.wiktionary.org/wiki/bislang","adv"],
["sch"+ "\u00e4" + "dlich","harmful","https://www.collinsdictionary.com/dictionary/german-english/schadlich","adj"],
["aufnehmen","to absorb","https://www.collinsdictionary.com/dictionary/german-english/aufnehmen","verb"],
["demnach","therefore","https://www.collinsdictionary.com/dictionary/german-english/demnach","adv"],
["jd/etw k" + "\u00f6" + "nnte etw vertragen","sb/sth could do with sth","https://en.wiktionary.org/wiki/vertragen#German","verb"],
["die Agrarfl" + "\u00e4" + "che","agricultural area","https://www.dict.cc/?s=Agrarfl%C3%A4che","noun"],
["beeintr" + "\u00e4" + "chtigen","to damage","https://www.collinsdictionary.com/dictionary/german-english/beeintrachtigen","verb"],
["nach Angaben","according to","https://www.collinsdictionary.com/dictionary/german-english/angabe","other"],
["erstmals","for the first time","https://www.collinsdictionary.com/dictionary/german-english/erstmals","adv"],
["vorgegeben","predefined/stated","https://www.dict.cc/?s=vorgegeben","adj"],
["zweifellos","undoubtedly","https://www.collinsdictionary.com/dictionary/german-english/zweifellos","adv"],
["etwa","for instance","https://www.collinsdictionary.com/dictionary/german-english/etwa","adv"],
["sowie","as well as","https://www.collinsdictionary.com/dictionary/german-english/sowie","other"],
["derzeit","at present","https://www.collinsdictionary.com/dictionary/german-english/derzeit","adv"],
["bedeckt","covered","https://www.collinsdictionary.com/dictionary/german-english/bedeckt","adj"],
["zus" + "\u00e4" + "tzlich","additional","https://www.collinsdictionary.com/dictionary/german-english/zusatzlich","adj"],
["entsprechen","to correspond to","https://www.collinsdictionary.com/dictionary/german-english/entsprechen","verb"],
["das Gebiet","area","https://www.collinsdictionary.com/dictionary/german-english/gebiet","noun"],
["Abkehr von","turning away from","https://www.collinsdictionary.com/dictionary/german-english/abkehr","other"],
["rasch","quick(ly)","https://www.collinsdictionary.com/dictionary/german-english/rasch","adj"],
["die Wirtschaft","economy","https://www.collinsdictionary.com/dictionary/german-english/wirtschaft","noun"],
["notwendig","necessary","https://www.collinsdictionary.com/dictionary/german-english/notwendig","adj"],
["reifen","to ripen","https://en.wiktionary.org/wiki/reifen","verb"],
["der Speicher","storehouse","https://www.collinsdictionary.com/dictionary/german-english/speicher","noun"],
["aussch"+ "\u00f6"+"pfen","to exploit","https://www.dict.cc/?s=aussch%C3%B6pfen","verb"],
["der Leiter","leader","https://www.collinsdictionary.com/dictionary/german-english/leiter","noun"],
["geeignet","suitable","https://www.collinsdictionary.com/dictionary/german-english/geeignet","adj"],
["die Ma"+ "\u00df"+"nahme" ,"measure","https://www.collinsdictionary.com/dictionary/german-english/massnahme","noun"],
["sektor"+"\u00fc"+"bergreifend","cross-sector","https://www.dict.cc/?s=sektor%C3%BCbergreifend","adj"],
["davon ausgehen, dass...","to assume that...","https://www.dict.cc/?s=ausgehen+davon","other"],
["das stimmt","that's right","https://www.collinsdictionary.com/dictionary/german-english/stimmen","other"],
["die Dichte","denseness","https://www.collinsdictionary.com/dictionary/german-english/dichte","noun"],
["gleichzeitig","at the same time","https://www.collinsdictionary.com/dictionary/german-english/gleichzeitig","adv"],
["verlieren","to lose","https://www.collinsdictionary.com/dictionary/german-english/verlieren","verb"],
["landwirtschaftlich","agricultural","https://www.collinsdictionary.com/dictionary/german-english/landwirtschaftlich","adj"],
["aussparen","to omit","https://www.collinsdictionary.com/dictionary/german-english/aussparen","verb"],
["bewusst","deliberately","https://www.collinsdictionary.com/dictionary/german-english/bewusst","adv"],
["ehemals","formerly","https://www.collinsdictionary.com/dictionary/german-english/ehemals","adv"],
["zerst"+"\u00f6"+"ren","to destroy","https://www.collinsdictionary.com/dictionary/german-english/ehemals","verb"],
["folgen","to follow","https://www.collinsdictionary.com/dictionary/german-english/folgen","verb"]
]

for (i in b1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionb(event, this)');
    //change letter
    b.setAttribute('id', "b" + i);
    b.setAttribute("class",b1[i][3]);
    b.appendChild(document.createTextNode(b1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper2');
    wrapper.appendChild(b);
};

var b1setting = 2;
//change function name
function lang2(){
    if (b1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper2').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = b1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper2').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= b1[index][0];
    }
}
b1setting = b1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper2");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionb(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = b1[index][0];
    var english = b1[index][1];
    var link = b1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper2");
x.style.height = "auto";
}
//change function name
function o2() {
    //change wrapper name
    var x = document.getElementById("wrapper2");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

//third article

var c1 = [
["hochklassig","high-class","https://en.wiktionary.org/wiki/hochklassig#German","adj"],
["nervenaufreibend","nerve-racking","https://www.collinsdictionary.com/dictionary/german-english/nervenaufreibend","adj"],
["unterliegen","to be beaten (by)","https://en.wiktionary.org/wiki/unterliegen#German","verb"],
["ins Finale einziehen","to make it to the final","https://www.dict.cc/?s=einziehen","other"],
["spannend","exciting","https://www.collinsdictionary.com/dictionary/german-english/spannend","adj"],
["verteidigen","to defend","https://www.collinsdictionary.com/dictionary/german-english/verteidigen","verb"],
["ausverkauft","sold out","https://www.collinsdictionary.com/dictionary/german-english/ausverkauft","adj"],
["k"+"\u00e4"+"mpfen um","to fight for","https://www.collinsdictionary.com/dictionary/german-english/kampfen","verb"],
["der Abschluss","end/final","https://en.wiktionary.org/wiki/Abschluss#German","noun"],
["der Oberschenkel","thigh","https://www.collinsdictionary.com/dictionary/german-english/oberschenkel","noun"],
["die Verletzung","injury","https://www.collinsdictionary.com/dictionary/german-english/verletzung","noun"],
["sich eine Verletzung zuziehen","to sustain an injury","https://www.collinsdictionary.com/dictionary/german-english/zuziehen","other"],
["r"+"\u00fc"+"cken","to move","https://en.wiktionary.org/wiki/r%C3%BCcken","verb"],
["wie erwartet","as expected","https://www.dict.cc/?s=wie+erwartet","adv"],
["loslegen","to get going/started","https://www.collinsdictionary.com/dictionary/german-english/loslegen","verb"],
["schr"+"\u00e4"+"g","diagonal","https://www.collinsdictionary.com/dictionary/german-english/schrag","adj"],
["pr"+"\u00fc"+"fen","to test","https://www.collinsdictionary.com/dictionary/german-english/prufen","verb"],
["sich bezahlt machen","to be worth it","https://www.collinsdictionary.com/dictionary/german-english/bezahlt","adj"],
["wuchtig","massive/bulky","https://en.wiktionary.org/wiki/wuchtig#German","adj"],
["pr"+"\u00e4"+"zis","precise","https://www.collinsdictionary.com/dictionary/german-english/prazis","adj"],
["bisherig","previous","https://www.collinsdictionary.com/dictionary/german-english/bisherig","adj"],
["die Partie","game (sport)","https://www.collinsdictionary.com/dictionary/german-english/partie","noun"],
["zur"+"\u00fc"+"ckschlagen","to retaliate","https://en.wiktionary.org/wiki/zur%C3%BCckschlagen","verb"],
["sorgen f"+"\u00fc"+"r","to take care of","https://www.collinsdictionary.com/dictionary/german-english/sorgen-fur","other"],
["zum Auftakt","at the start/beginning of","https://www.dict.cc/?s=Auftakt","other"],
["der Ausgleich","equalizer (sport)","https://www.dict.cc/?s=Ausgleich","noun"],
["der Wechsel","substitution (football)","https://www.collinsdictionary.com/dictionary/german-english/wechsel","noun"],
["zunehmen","to increase","https://www.collinsdictionary.com/dictionary/german-english/zunehmen","verb"],
["vermeintlich","supposed/alleged","https://en.wiktionary.org/wiki/vermeintlich","adj"],
["der Beweis","evidence","https://www.collinsdictionary.com/dictionary/german-english/beweis","noun"],
["anerkannt","recognized/accepted","https://en.wiktionary.org/wiki/anerkannt","adj"],
["der Foulelfmeter","penalty resulting from a foul","https://www.dict.cc/?s=Foulelfmeter","noun"],
["festhalten","to hold on to","https://www.collinsdictionary.com/dictionary/german-english/festhalten","verb"],
["knapp","tight/narrow","https://www.collinsdictionary.com/dictionary/german-english/knapp","adj"],
["die Unterzahl","minority (=Minderzahl)","https://en.wiktionary.org/wiki/Minderzahl#German","noun"]
]

for (i in c1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionc(event, this)');
    //change letter
    b.setAttribute('id', "c" + i);
    b.setAttribute("class",c1[i][3]);
    b.appendChild(document.createTextNode(c1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper3');
    wrapper.appendChild(b);
};

var c1setting = 2;
//change function name
function lang3(){
    if (c1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper3').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = c1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper3').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= c1[index][0];
    }
}
c1setting = c1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper3");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionc(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = c1[index][0];
    var english = c1[index][1];
    var link = c1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper3");
x.style.height = "auto";
}
//change function name
function o3() {
    //change wrapper name
    var x = document.getElementById("wrapper3");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

//fourth article

var d1 = [
["der Bergbau", "mining", "https://www.collinsdictionary.com/dictionary/german-english/bergbau", "noun"],
["der Konzern", "company", "https://www.collinsdictionary.com/dictionary/german-english/konzern", "noun"],
["aufkommen f"+"\u00fc"+"r", "to be responsible for", "https://www.collinsdictionary.com/dictionary/german-english/aufkommen-fur", "other"],
["Sch"+"\u00e4"+"den", "damages", "https://www.dict.cc/?s=Sch%C3%A4den", "noun"],
["der Dammbruch", "dam break", "https://www.dict.cc/?s=Dammbruch", "noun"],
["verheeren", "to devastate", "https://www.collinsdictionary.com/dictionary/german-english/verheeren", "verb"],
["verurteilen", "to condemn ", "https://www.collinsdictionary.com/dictionary/german-english/verurteilen", "verb"],
["das Gericht", "court", "https://www.collinsdictionary.com/dictionary/german-english/gericht", "noun"],
["das Unternehmen", "business", "https://www.collinsdictionary.com/dictionary/german-english/unternehmen", "noun"],
["vorerst", "for the time being", "https://www.collinsdictionary.com/dictionary/german-english/vorerst", "adv"],
["die Richter", "judge", "https://www.collinsdictionary.com/dictionary/german-english/richter", "noun"],
["beziffern", "to quantify", "https://www.collinsdictionary.com/dictionary/german-english/beziffern", "verb"],
["festlegen", "to determine", "https://en.wiktionary.org/wiki/festlegen", "verb"],
["die Summe", "total", "https://www.collinsdictionary.com/dictionary/german-english/summe", "noun"],
["bis auf Weiteres", "for the time being", "https://www.dict.cc/?s=bis+auf+weiteres", "adv"],
["einfrieren", "to freeze", "https://www.collinsdictionary.com/dictionary/german-english/einfrieren", "verb"],
["k"+"\u00fc"+"nftig", "future", "https://www.collinsdictionary.com/dictionary/german-english/kunftig", "adj"],
["die Entsch"+"\u00e4"+"digung", "compensation", "https://www.collinsdictionary.com/dictionary/german-english/entschadigung", "noun"],
["die Zahlung", "payment", "https://www.collinsdictionary.com/dictionary/german-english/zahlung_1", "noun"],
["der R"+"\u00fc"+"ckhalt", "support", "https://www.dict.cc/?s=R%C3%BCckhalt", "noun"],
["das Becken", "basin", "https://www.collinsdictionary.com/dictionary/german-english/becken", "noun"],
["bersten", "to burst", "https://www.collinsdictionary.com/dictionary/german-english/bersten", "verb"],
["die Umgebung", "surroundings", "https://www.collinsdictionary.com/dictionary/german-english/umgebung", "noun"],
["das Bergwerk", "mine", "https://www.collinsdictionary.com/dictionary/german-english/bergwerk", "noun"],
["begraben", "to bury", "https://www.collinsdictionary.com/dictionary/german-english/begraben", "verb"],
["der Kl"+"\u00e4"+"rschlamm", "sludge", "https://www.collinsdictionary.com/dictionary/german-english/klarschlamm", "noun"],
["der Schlamm", "mud", "https://www.collinsdictionary.com/dictionary/german-english/schlamm", "noun"],
["sich ergie"+"\u00df"+"en", "to empty", "https://www.dict.cc/?s=ergie%C3%9Fen", "verb"],
["kommen ums Leben", "to die", "https://www.dict.cc/?s=kommen+ums+Leben", "other"],
["das Ungl"+"\u00fc"+"ck", "disaster", "https://www.collinsdictionary.com/dictionary/german-english/ungluck", "noun"],
["das Todesopfer", "casualty", "https://www.collinsdictionary.com/dictionary/german-english/todesopfer", "noun"],
["das Verfahren", "proceedings", "https://www.collinsdictionary.com/dictionary/german-english/verfahren", "noun"],
["die Begleichung", "settlement (resolution)", "https://www.dict.cc/?s=Begleichung", "noun"],
["entstehen", "to emerge", "https://www.collinsdictionary.com/dictionary/german-english/entstehen", "verb"],
["in die Kritik geraten", "to come under fire", "https://www.dict.cc/?s=Kritik+geraten", "other"],
["der Auftrag", "task", "https://www.collinsdictionary.com/dictionary/german-english/auftrag", "noun"],
["die Wartung", "maintenance", "https://www.collinsdictionary.com/dictionary/german-english/wartung", "noun"]
]

for (i in d1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctiond(event, this)');
    //change letter
    b.setAttribute('id', "d" + i);
    b.setAttribute("class",d1[i][3]);
    b.appendChild(document.createTextNode(d1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper4');
    wrapper.appendChild(b);
};

var d1setting = 2;
//change function name
function lang4(){
    if (d1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper4').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = d1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper4').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= d1[index][0];
    }
}
d1setting = d1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper4");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctiond(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = d1[index][0];
    var english = d1[index][1];
    var link = d1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper4");
x.style.height = "auto";
}
//change function name
function o4() {
    //change wrapper name
    var x = document.getElementById("wrapper4");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var e1 = [
["der Kassenarzt", "GP", "https://www.collinsdictionary.com/dictionary/german-english/kassenarzt", "noun"],
["ausreichend", "sufficient", "https://www.collinsdictionary.com/dictionary/german-english/ausreichend", "adj"],
["der Beleg", "piece of evidence", "https://www.collinsdictionary.com/dictionary/german-english/beleg", "noun"],
["die Wirksamkeit", "effectiveness", "https://www.collinsdictionary.com/dictionary/german-english/wirksamkeit", "noun"],
["bef"+"\u00fc"+"rworten", "to approve", "https://www.collinsdictionary.com/dictionary/german-english/befurworten", "verb"],
["die Erstattung", "refund", "https://www.collinsdictionary.com/dictionary/german-english/erstattung", "noun"],
["das Mittel", "medicine", "https://www.collinsdictionary.com/dictionary/german-english/mittel", "noun"],
["die Vereinigung", "unification", "https://www.collinsdictionary.com/dictionary/german-english/vereinigung", "noun"],
["die Krankenkasse", "medical insurance company", "https://www.collinsdictionary.com/dictionary/german-english/krankenkasse", "noun"],
["die Leistung", "service", "https://www.collinsdictionary.com/dictionary/german-english/leistung", "noun"],
["der Vorsitzende", "chairperson", "https://www.collinsdictionary.com/dictionary/german-english/vorsitzende", "noun"],
["die Solidargemeinschaft", "supportive society", "https://www.collinsdictionary.com/dictionary/german-english/solidargemeinschaft", "noun"],
["die Allgemeinheit", "general public", "https://www.collinsdictionary.com/dictionary/german-english/allgemeinheit", "noun"],
["die Behandlung", "treatment", "https://www.collinsdictionary.com/dictionary/german-english/behandlung", "noun"],
["es wird immer noch gestritten, ob...", "the argument about whether... is still going on", "https://www.collinsdictionary.com/dictionary/german-english/streiten", "other"],
["der Bestandteil", "component", "https://www.collinsdictionary.com/dictionary/german-english/bestandteil", "noun"],
["hierzulande", "in these parts", "https://www.collinsdictionary.com/dictionary/german-english/hierzulande", "adv"],
["gesetzlich", "legal", "https://www.collinsdictionary.com/dictionary/german-english/gesetzlich", "adj"],
["versichern", "to insure", "https://www.collinsdictionary.com/dictionary/german-english/versichern", "verb"],
["die Nachfrage", "inquiry", "https://www.collinsdictionary.com/dictionary/german-english/nachfrage", "noun"],
["ebenso wie", "as well as", "https://www.dict.cc/?s=ebenso+wie", "other"],
["die Betrachtung", "contemplation", "https://www.collinsdictionary.com/dictionary/german-english/betrachtung", "noun"],
["gesamt", "whole/entire", "https://www.collinsdictionary.com/dictionary/german-english/gesamt", "adj"],
["arzneilich", "medicinal", "https://www.dict.cc/?s=arzneilich", "adj"],
["die Sicht", "view", "https://www.collinsdictionary.com/dictionary/german-english/sicht", "noun"],
["der Ansatz", "approach", "https://en.wiktionary.org/wiki/Ansatz", "noun"],
["das Arzneimittel", "drug", "https://www.collinsdictionary.com/dictionary/german-english/arzneimittel", "noun"],
["betreffend", "relevant", "https://www.collinsdictionary.com/dictionary/german-english/betreffend", "adj"],
["nicht einmal", "not even", "https://www.dict.cc/?s=nicht+einmal", "adv"],
["verd"+"\u00fc"+"nnen", "to dilute", "https://www.collinsdictionary.com/dictionary/german-english/verdunnen", "verb"],
["voraussichtlich", "presumably", "https://www.collinsdictionary.com/dictionary/german-english/voraussichtlich", "adv"],
["streichen", "to cancel", "https://www.collinsdictionary.com/dictionary/german-english/streichen", "verb"],
["die Arznei", "medicine (fig)", "https://www.collinsdictionary.com/dictionary/german-english/arznei", "noun"],
["die Einsch"+"\u00e4"+"tzung", "assessment", "https://www.collinsdictionary.com/dictionary/german-english/einschatzung", "noun"],
["oberste", "supreme", "https://www.collinsdictionary.com/dictionary/german-english/oberste", "adj"],
["gerechtfertigt", "justified", "https://www.collinsdictionary.com/dictionary/german-english/gerechtfertigt", "adj"],
["die Stellungnahme", "statement", "https://www.collinsdictionary.com/dictionary/german-english/stellungnahme", "noun"],
["mitteilen", "to inform", "https://www.collinsdictionary.com/dictionary/german-english/mitteilen", "verb"],
["der Vorsto"+"\u00df", "venture", "https://www.collinsdictionary.com/dictionary/german-english/vorstoss", "noun"],
["freiwillig", "voluntary", "https://www.collinsdictionary.com/dictionary/german-english/freiwillig", "adj"],
["sinnvoll", "meaningful", "https://www.collinsdictionary.com/dictionary/german-english/sinnvoll", "adj"],
["der Ausschuss", "committee", "https://www.collinsdictionary.com/dictionary/german-english/ausschuss", "noun"],
["gemeinsam", "common", "https://www.collinsdictionary.com/dictionary/german-english/gemeinsam", "adj"],
["die Pflicht", "obligation", "https://www.dict.cc/?s=Pflicht", "noun"],
["beruhen auf", "to be based on", "https://www.collinsdictionary.com/dictionary/german-english/beruhen", "verb"],
["belegen", "to verify", "https://www.collinsdictionary.com/dictionary/german-english/belegen", "verb"],
["der Vertreter", "supporter", "https://www.collinsdictionary.com/dictionary/german-english/vertreter", "noun"],
["gelingen", "to succeed", "https://www.collinsdictionary.com/dictionary/german-english/gelingen", "verb"]
]

for (i in e1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctione(event, this)');
    //change letter
    b.setAttribute('id', "e" + i);
    b.setAttribute("class",e1[i][3]);
    b.appendChild(document.createTextNode(e1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper5');
    wrapper.appendChild(b);
};

var e1setting = 2;
//change function name
function lang5(){
    if (e1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper5').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = e1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper5').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= e1[index][0];
    }
}
e1setting = e1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper5");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctione(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = e1[index][0];
    var english = e1[index][1];
    var link = e1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper5");
x.style.height = "auto";
}
//change function name
function o5() {
    //change wrapper name
    var x = document.getElementById("wrapper5");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var f1 = [
["die Waffe", "weapon", "https://www.collinsdictionary.com/dictionary/german-english/waffe", "noun"],
["best"+"\u00e4"+"tigen", "to confirm", "https://www.collinsdictionary.com/dictionary/german-english/bestatigen", "verb"],
["die Erlaubnis", "permission", "https://www.collinsdictionary.com/dictionary/german-english/erlaubnis", "noun"],
["rechtlich", "legal", "https://www.collinsdictionary.com/dictionary/german-english/rechtlich", "adj"],
["entziehen", "to withdraw", "https://www.collinsdictionary.com/dictionary/german-english/entziehen", "verb"],
["den Anschein erwecken", "to give the impression", "https://www.dict.cc/?s=Anschein", "other"],
["nahestehen", "to be close to", "https://www.collinsdictionary.com/dictionary/german-english/nahestehen", "verb"],
["zu Recht", "justifiabily", "https://www.dict.cc/?s=zu+Recht", "adv"],
["die Verwaltung", "administration", "https://www.collinsdictionary.com/dictionary/german-english/verwaltung", "noun"],
["die Anwalt", "advocate", "https://www.collinsdictionary.com/dictionary/german-english/anwalt", "noun"],
["ank"+"\u00fc"+"ndigen", "to announce", "https://www.collinsdictionary.com/dictionary/german-english/ankundigen", "verb"],
["Instanz", "authority/court", "https://www.collinsdictionary.com/dictionary/german-english/instanz", "noun"],
["das Ergebnis", "result", "https://www.collinsdictionary.com/dictionary/german-english/ergebnis", "noun"],
["die Kl"+"\u00e4"+"ger", "prosecuting party", "https://www.collinsdictionary.com/dictionary/german-english/klager", "noun"],
["divers", "diverse/various", "https://www.collinsdictionary.com/dictionary/german-english/divers", "adj"],
["die Bewegung", "movement", "https://www.collinsdictionary.com/dictionary/german-english/bewegung", "noun"],
["ratsam", "advisable", "https://www.collinsdictionary.com/dictionary/german-english/ratsam", "adj"],
["Berufung einlegen", "to appeal", "https://www.collinsdictionary.com/dictionary/german-english/berufung", "verb"],
["der Betroffene", "person affected", "https://www.collinsdictionary.com/dictionary/german-english/betroffene", "noun"],
["die Zuverl"+"\u00e4"+"ssigkeit", "reliability", "https://www.collinsdictionary.com/dictionary/german-english/zuverlassigkeit", "noun"],
["die Verhandlung", "hearing (law)", "https://www.collinsdictionary.com/dictionary/german-english/verhandlung", "noun"],
["angeblich", "alleged", "https://www.collinsdictionary.com/dictionary/german-english/angeblich", "adj"],
["wundern", "to suprise", "https://www.collinsdictionary.com/dictionary/german-english/wundern", "verb"],
["die Steuer", "tax", "https://www.collinsdictionary.com/dictionary/german-english/steuer", "noun"],
["weigern", "to refuse", "https://www.collinsdictionary.com/dictionary/german-english/weigern", "verb"],
["die Abgabe", "giving off", "https://www.collinsdictionary.com/dictionary/german-english/abgabe", "noun"],
["das Bu"+"\u00df"+"geld", "fine", "https://www.collinsdictionary.com/dictionary/german-english/bussgeld", "noun"],
["jdn./etw. etw. zurechnen", "to class sth./sb with sth.", "https://www.dict.cc/?s=zurechnen", "verb"]
]

for (i in f1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionf(event, this)');
    //change letter
    b.setAttribute('id', "f" + i);
    b.setAttribute("class",f1[i][3]);
    b.appendChild(document.createTextNode(f1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper6');
    wrapper.appendChild(b);
};

var f1setting = 2;
//change function name
function lang6(){
    if (f1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper6').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = f1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper6').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= f1[index][0];
    }
}
f1setting = f1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper6");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionf(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = f1[index][0];
    var english = f1[index][1];
    var link = f1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper6");
x.style.height = "auto";
}
//change function name
function o6() {
    //change wrapper name
    var x = document.getElementById("wrapper6");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}
                                
var g1 = [
["erheben", "to raise", "https://www.collinsdictionary.com/dictionary/german-english/erheben", "verb"],
["der Anspruch", "claim", "https://www.collinsdictionary.com/dictionary/german-english/anspruch", "noun"],
["der Adel", "nobility", "https://www.collinsdictionary.com/dictionary/german-english/adel", "noun"],
["zudem", "moreover", "https://www.collinsdictionary.com/dictionary/german-english/zudem", "adv"],
["fordern", "to demand", "https://www.collinsdictionary.com/dictionary/german-english/fordern_1", "verb"],
["dauerhaft", "permament", "https://www.collinsdictionary.com/dictionary/german-english/dauerhaft", "adj"],
["das Kanzleramt", "chancellory", "https://www.collinsdictionary.com/dictionary/german-english/kanzleramt", "noun"],
["ablehnen", "to decline/refuse", "https://www.collinsdictionary.com/dictionary/german-english/ablehnen", "verb"],
["aus etw hervorgehen", "to come out of sth", "https://www.collinsdictionary.com/dictionary/german-english/hervorgehen", "verb"],
["geheim", "secret", "https://www.collinsdictionary.com/dictionary/german-english/geheim", "adj"],
["der Vergleich", "settlement (law)", "https://www.collinsdictionary.com/dictionary/german-english/vergleich", "noun"],
["laufend", "ongoing", "https://www.dict.cc/?s=laufend", "adj"],
["die Unterlage", "document", "https://www.collinsdictionary.com/dictionary/german-english/unterlage", "noun"],
["das Oberhaupt", "leader", "https://www.collinsdictionary.com/dictionary/german-english/oberhaupt", "noun"],
["verlangen", "to demand", "https://www.collinsdictionary.com/dictionary/german-english/verlangen", "verb"],
["unentgeltlich", "free of charge", "https://www.collinsdictionary.com/dictionary/german-english/unentgeltlich", "adj"],
["der Gegenstand", "object/item", "https://www.collinsdictionary.com/dictionary/german-english/gegenstand", "noun"],
["weit auseinanderliegen", "to be far apart", "https://www.dict.cc/?s=auseinanderliegen", "verb"],
["damalig", "at that time", "https://www.collinsdictionary.com/dictionary/german-english/damalig", "adj"],
["das Verm"+"\u00f6"+"gen", "assets", "https://www.collinsdictionary.com/dictionary/german-english/vermogen", "noun"],
["nun", "now", "https://www.collinsdictionary.com/dictionary/german-english/nun", "adv"],
["der Vertrag", "contract", "https://www.collinsdictionary.com/dictionary/german-english/vertrag", "noun"],
["sich befinden", "to be located", "https://www.dict.cc/?s=sich+befinden", "verb"],
["die Stiftung", "foundation", "https://www.collinsdictionary.com/dictionary/german-english/stiftung", "noun"],
["das Gem"+"\u00e4"+"lde", "painting", "https://www.collinsdictionary.com/dictionary/german-english/gemalde", "noun"],
["erheblich", "considerable", "https://www.collinsdictionary.com/dictionary/german-english/erheblich", "adj"],
["der Enkel", "grandson", "https://www.collinsdictionary.com/dictionary/german-english/enkel", "noun"],
["Ur-", "great-", "https://www.dict.cc/?s=Ur", "other"],
["der Kaiser", "emperor", "https://www.collinsdictionary.com/dictionary/german-english/kaiser", "noun"],
["erweitern", "to extend", "https://www.collinsdictionary.com/dictionary/german-english/erweitern", "verb"],
["k"+"\u00fc"+"ndigen", "to cancel", "https://www.collinsdictionary.com/dictionary/german-english/kundigen", "verb"],
["der Stab", "staff", "https://www.collinsdictionary.com/dictionary/german-english/stab", "noun"],
["der Vertreter", "representative", "https://www.collinsdictionary.com/dictionary/german-english/vertreter", "noun"],
["versprechen", "to promise", "https://www.collinsdictionary.com/dictionary/german-english/versprechen", "verb"],
["strittig", "contentious", "https://www.collinsdictionary.com/dictionary/german-english/strittig", "adj"],
["das Eigentum", "property", "https://www.collinsdictionary.com/dictionary/german-english/eigentum", "noun"],
["das Verh"+"\u00e4"+"ltnis", "relations", "https://www.dict.cc/?s=Verh%C3%A4ltnis", "noun"],
["zwischenzeitlich", "for the time being", "https://www.dict.cc/?s=zwischenzeitlich", "adv"],
["die Anfrage", "inquiry", "https://www.collinsdictionary.com/dictionary/german-english/anfrage", "noun"],
["sondern", "but", "https://www.collinsdictionary.com/dictionary/german-english/sondern", "other"],
["ansetzen", "to fix", "https://www.collinsdictionary.com/dictionary/german-english/ansetzen", "verb"],
["lediglich", "merely", "https://www.collinsdictionary.com/dictionary/german-english/lediglich", "adv"],
["die Immobilie", "property", "https://www.collinsdictionary.com/dictionary/german-english/immobilie", "noun"],
["die R"+"\u00fc"+"ckgabe", "return", "https://www.collinsdictionary.com/dictionary/german-english/ruckgabe", "noun"],
["ausgeschlossen", "out of the question", "https://www.collinsdictionary.com/dictionary/german-english/ausgeschlossen", "adj"],
["eindeutig", "clearly", "https://www.collinsdictionary.com/dictionary/german-english/eindeutig", "adv"],
["abweisen", "to dismiss (law)", "https://www.collinsdictionary.com/dictionary/german-english/abweisen", "verb"],
["die Klage", "complaint", "https://www.collinsdictionary.com/dictionary/german-english/klage", "noun"] 
]
                                    
for (i in g1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctiong(event, this)');
    //change letter
    b.setAttribute('id', "g" + i);
    b.setAttribute("class",g1[i][3]);
    b.appendChild(document.createTextNode(g1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper7');
    wrapper.appendChild(b);
};

var g1setting = 2;
//change function name
function lang7(){
    if (g1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper7').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = g1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper7').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= g1[index][0];
    }
}
g1setting = g1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper7");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctiong(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = g1[index][0];
    var english = g1[index][1];
    var link = g1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper7");
x.style.height = "auto";
}
//change function name
function o7() {
    //change wrapper name
    var x = document.getElementById("wrapper7");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var h1 = [
["zugunsten", "in favour of", "https://www.collinsdictionary.com/dictionary/german-english/zugunsten", "other"],
["die Ausstattung", "equipment", "https://www.collinsdictionary.com/dictionary/german-english/ausstattung", "noun"],
["deutlich", "clearly", "https://www.collinsdictionary.com/dictionary/german-english/deutlich", "adv"],
["versorgen", "to look after", "https://www.collinsdictionary.com/dictionary/german-english/versorgen", "verb"],
["die Klinik", "clinic/hospital", "https://www.collinsdictionary.com/dictionary/german-english/klinik", "noun"],
["aktuell", "current", "https://www.collinsdictionary.com/dictionary/german-english/aktuell", "adj"],
["sinken", "to descend", "https://www.collinsdictionary.com/dictionary/german-english/sinken", "verb"],
["die Untersuchung", "investigation", "https://www.collinsdictionary.com/dictionary/german-english/untersuchung", "noun"],
["verbleiben", "to remain", "https://www.collinsdictionary.com/dictionary/german-english/verbleiben", "verb"],
["Personal", "personnel", "https://www.collinsdictionary.com/dictionary/german-english/personal", "noun"],
["die Fachabteilung", "specialist department", "https://www.dict.cc/?s=Fachabteilung", "noun"],
["die B"+"\u00fc"+"ndelung", "grouping", "https://www.dict.cc/?s=B%C3%BCndelung", "noun"],
["die Pflege", "care", "https://www.collinsdictionary.com/dictionary/german-english/pflege", "noun"],
["das Ger"+"\u00e4"+"t", "piece of equipment", "https://www.collinsdictionary.com/dictionary/german-english/gerat", "noun"],
["verf"+"\u00fc"+"gen "+"\u00fc"+"ber", "to have available", "https://www.collinsdictionary.com/dictionary/german-english/verfugen", "verb"],
["behandeln", "to treat", "https://www.collinsdictionary.com/dictionary/german-english/behandeln", "verb"],
["lebensbedrohlich", "life-threatening", "https://www.dict.cc/?s=lebensbedrohlich", "adj"],
["der Herzinfarkt", "heart attack", "https://www.collinsdictionary.com/dictionary/german-english/herzinfarkt", "noun"],
["der Schlagenfall", "stroke (med)", "https://www.dict.cc/?s=Schlaganfall", "noun"],
["angemessen", "appropriate", "https://www.collinsdictionary.com/dictionary/german-english/angemessen", "adj"],
["besetzen", "to occupy", "https://www.collinsdictionary.com/dictionary/german-english/besetzen", "verb"],
["bereitstehen", "to be ready", "https://www.collinsdictionary.com/dictionary/german-english/bereitstehen", "verb"],
["planbar", "predictable", "https://www.dict.cc/?s=planbar", "adj"],
["die Mangel", "shortage", "https://www.collinsdictionary.com/dictionary/german-english/mangel_2", "noun"],
["Pflegekr"+"\u00e4"+"fte", "nursing staff", "https://www.dict.cc/?s=Pflegekr%C3%A4fte", "noun"],
["mindern", "to diminish", "https://www.collinsdictionary.com/dictionary/german-english/mindern", "verb"],
["aufrechterhalten", "to maintain", "https://www.collinsdictionary.com/dictionary/german-english/aufrechterhalten", "verb"]
]

for (i in h1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionh(event, this)');
    //change letter
    b.setAttribute('id', "h" + i);
    b.setAttribute("class",h1[i][3]);
    b.appendChild(document.createTextNode(h1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper8');
    wrapper.appendChild(b);
};

var h1setting = 2;
//change function name
function lang8(){
    if (h1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper8').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = h1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper8').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= h1[index][0];
    }
}
h1setting = h1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper8");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionh(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = h1[index][0];
    var english = h1[index][1];
    var link = h1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper8");
x.style.height = "auto";
}
//change function name
function o8() {
    //change wrapper name
    var x = document.getElementById("wrapper8");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var i1 = [
["der Aussto"+"\u00df", "output/production", "https://www.collinsdictionary.com/dictionary/german-english/ausstoss", "noun"],
["der Beirat", "advisory panel", "https://www.dict.cc/?s=Beirat", "noun"],
["ein Gutachten", "report", "https://www.collinsdictionary.com/dictionary/german-english/gutachten", "noun"],
["die Bepresiung", "pricing", "https://www.dict.cc/?s=Bepreisung", "noun"],
["vorlegen", "to present", "https://www.collinsdictionary.com/dictionary/german-english/vorlegen", "verb"],
["verbrauchen", "to consume", "https://www.collinsdictionary.com/dictionary/german-english/verbrauchen", "verb"],
["sich aussprechen", "to speak out", "https://www.dict.cc/?s=aussprechen", "verb"],
["hinwirken", "to work towards sth", "https://www.collinsdictionary.com/dictionary/german-english/hinwirken", "verb"],
["gering", "low", "https://www.collinsdictionary.com/dictionary/german-english/gering", "adj"],
["die Vorstellung", "idea/imagination", "https://www.collinsdictionary.com/dictionary/german-english/vorstellung", "noun"],
["vorschlagen", "to suggest", "https://www.collinsdictionary.com/dictionary/german-english/vorschlagen", "verb"],
["der Anreiz", "incentive", "https://www.collinsdictionary.com/dictionary/german-english/anreiz", "noun"],
["genau", "exact", "https://www.collinsdictionary.com/dictionary/german-english/genau", "adj"],
["kosteng"+"\u00fc"+"nstig", "economical", "https://www.collinsdictionary.com/dictionary/german-english/kostengunstig", "adj"],
["genau dort", "right there", "https://www.dict.cc/?s=genau+dort", "adv"],
["als Ausgleich f"+"\u00fc"+"r etw", "in order to compensate for sth", "https://www.collinsdictionary.com/dictionary/german-english/ausgleich", "other"],
["wie auch", "as well as", "https://www.dict.cc/?s=wie+auch", "other"],
["nach Ansicht", "in the opinion of", "https://www.collinsdictionary.com/dictionary/german-english/ansicht", "other"],
["die Umlage", "levy", "https://www.dict.cc/?s=Umlage", "noun"],
["der Ausbau", "expansion", "https://www.dict.cc/?s=Ausbau", "noun"],
["abschaffen", "to abolish", "https://www.collinsdictionary.com/dictionary/german-english/abschaffen", "verb"],
["einf"+"\u00fc"+"hren", "to introduce", "https://www.collinsdictionary.com/dictionary/german-english/einfuhren", "verb"],
["der Bereich", "area", "https://www.collinsdictionary.com/dictionary/german-english/bereich", "noun"],
["die Ausgabe", "expenditure", "https://www.collinsdictionary.com/dictionary/german-english/ausgabe", "noun"],
["das St"+"\u00fc"+"ck", "piece", "https://www.collinsdictionary.com/dictionary/german-english/stuck_2", "noun"],
["immer weiter", "on and on", "https://www.dict.cc/?s=immer+weiter", "adv"],
["die Heizung", "heating", "https://www.collinsdictionary.com/dictionary/german-english/heizung", "noun"],
["pl"+"\u00e4"+"dieren", "to plead", "https://www.collinsdictionary.com/dictionary/german-english/pladieren", "verb"],
["auf diese Weise", "in this way", "https://www.collinsdictionary.com/dictionary/german-english/weise_2", "adv"],
["glaubhaft", "credible", "https://www.collinsdictionary.com/dictionary/german-english/glaubhaft", "adj"],
["vermitteln", "to find jobs for", "https://www.collinsdictionary.com/dictionary/german-english/vermitteln", "verb"],
["zur Begr"+"\u00fc"+"ndung", "in explanation", "https://www.collinsdictionary.com/dictionary/german-english/begrundung", "other"],
["die Einnahme", "income", "https://www.collinsdictionary.com/dictionary/german-english/einnahme", "noun"],
["der Haushalt", "budget", "https://www.collinsdictionary.com/dictionary/german-english/haushalt_1", "noun"],
["der Vorschlag", "profit", "https://www.collinsdictionary.com/dictionary/german-english/vorschlag", "noun"],
["verwenden", "to use", "https://www.collinsdictionary.com/dictionary/german-english/verwenden", "verb"],
["zweckgebunden", "for a specific purpose", "https://www.collinsdictionary.com/dictionary/german-english/zweckgebunden", "other"],
["der Karte nach", "according to the map", "https://www.collinsdictionary.com/dictionary/english-german/according-to", "other"],
["die Wirkung", "effect", "https://www.collinsdictionary.com/dictionary/german-english/wirkung", "noun"],
["der Abbau", "breaking down", "https://www.collinsdictionary.com/dictionary/german-english/abbau", "noun"],
["der Betreiber", "operating authority", "https://www.collinsdictionary.com/dictionary/german-english/betreiber", "noun"],
["sich lohnen", "to be worth it", "https://www.collinsdictionary.com/dictionary/german-english/lohnen_1", "verb"],
["verordnen", "to prescribe", "https://www.collinsdictionary.com/dictionary/german-english/verordnen", "verb"],
["Ausstieg", "climbing out", "https://www.collinsdictionary.com/dictionary/german-english/ausstieg", "noun"],
["die Verstromung", "conversion into electricity", "https://www.dict.cc/?s=verstromung", "noun"],
["verzichten", "to do without", "https://www.collinsdictionary.com/dictionary/german-english/verzichten", "verb"],
["einsetzen", "to appoint", "https://www.collinsdictionary.com/dictionary/german-english/einsetzen", "verb"],
["schrittweise", "gradual", "https://www.collinsdictionary.com/dictionary/german-english/schrittweise", "adj"],
["der Wettbewerb", "competition", "https://www.collinsdictionary.com/dictionary/german-english/wettbewerb", "noun"],
["der Mittelstand", "middle classes", "https://www.collinsdictionary.com/dictionary/german-english/mittelstand", "noun"],
["im Blick halten", "to keep in view", "https://www.dict.cc/?s=behalten", "verb"],
["stets", "always", "https://www.collinsdictionary.com/dictionary/german-english/stets", "adv"],
["mitdenken", "to follow (an argument)", "https://www.dict.cc/?s=mitdenken", "verb"],
["die Runde", "company", "https://www.collinsdictionary.com/dictionary/german-english/runde", "noun"],
["die Sitzung", "meeting", "https://www.collinsdictionary.com/dictionary/german-english/sitzung", "noun"],
["beschlie"+"\u00df"+"en", "to pass (law)", "https://www.collinsdictionary.com/dictionary/german-english/beschliessen", "verb"],
["sich etw vornehmen", "to intend to do sth", "https://www.dict.cc/?s=vornehmen", "verb"]
]

for (i in i1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctioni(event, this)');
    //change letter
    b.setAttribute('id', "i" + i);
    b.setAttribute("class",i1[i][3]);
    b.appendChild(document.createTextNode(i1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper9');
    wrapper.appendChild(b);
};

var i1setting = 2;
//change function name
function lang9(){
    if (i1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper9').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = i1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper9').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= i1[index][0];
    }
}
i1setting = i1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper9");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctioni(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = i1[index][0];
    var english = i1[index][1];
    var link = i1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper9");
x.style.height = "auto";
}
//change function name
function o9() {
    //change wrapper name
    var x = document.getElementById("wrapper9");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var j1 = [
["mutma"+"\u00df"+"lich", "suspected", "https://www.collinsdictionary.com/dictionary/german-english/mutmasslich", "adj"],
["der Anschlag", "attack", "https://www.collinsdictionary.com/dictionary/german-english/anschlag", "noun"],
["mehrere", "several", "https://www.collinsdictionary.com/dictionary/german-english/mehrere", "other"],
["schwer", "serious", "https://www.collinsdictionary.com/dictionary/german-english/schwer", "adj"],        
["die Fl"+"\u00fc"+"ssigkeit", "liquid", "https://www.collinsdictionary.com/dictionary/german-english/flussigkeit", "noun"],
["zuvor", "beforehand", "https://www.collinsdictionary.com/dictionary/german-english/zuvor", "adv"],   
["haben sollen", "to be said to have done sth", "https://www.dict.cc/?s=haben+sollen", "other"],
["verteilen", "to distribute", "https://www.collinsdictionary.com/dictionary/german-english/verteilen", "verb"],
["der Mitarbeiter", "employee", "https://www.collinsdictionary.com/dictionary/german-english/mitarbeiter", "noun"],
["der Einsatz", "action", "https://www.collinsdictionary.com/dictionary/german-english/einsatz", "noun"],        
["die Kraft", "strength/power", "https://www.collinsdictionary.com/dictionary/german-english/kraft", "noun"],
["brennbar", "flammable", "https://www.collinsdictionary.com/dictionary/german-english/brennbar", "adj"], 
["das Fahrzeug", "vehicle", "https://www.collinsdictionary.com/dictionary/german-english/fahrzeug", "noun"],
["l"+"\u00f6"+"schen", "to put out", "https://www.collinsdictionary.com/dictionary/german-english/loschen", "verb"],
["weitgehend", "to a great extent", "https://www.collinsdictionary.com/dictionary/german-english/weitgehend", "adv"],
["ebenfalls", "likewise", "https://www.collinsdictionary.com/dictionary/german-english/ebenfalls", "adv"],        
["der Verd"+"\u00e4"+"chtige", "suspect", "https://www.collinsdictionary.com/dictionary/german-english/verdachtige", "noun"],
["die Tat", "crime", "https://www.collinsdictionary.com/dictionary/german-english/tat", "noun"], 
["gestehen", "to confess", "https://www.collinsdictionary.com/dictionary/german-english/gestehen", "verb"],
["die Brandstiftung", "arson", "https://www.collinsdictionary.com/dictionary/german-english/brandstiftung", "noun"],
["gegen jdn ermitteln", "to investigate sb", "https://www.collinsdictionary.com/dictionary/german-english/ermitteln", "other"],
["wegen", "regarding", "https://www.dict.cc/?s=wegen", "other"],        
["die Ursache", "cause", "https://www.collinsdictionary.com/dictionary/german-english/ursache", "noun"],
["der Zeichentrick", "animatic", "https://www.dict.cc/?s=Zeichentrick", "noun"]
]

for (i in j1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionj(event, this)');
    //change letter
    b.setAttribute('id', "j" + i);
    b.setAttribute("class",j1[i][3]);
    b.appendChild(document.createTextNode(j1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper10');
    wrapper.appendChild(b);
};

var j1setting = 2;
//change function name
function lang10(){
    if (j1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper10').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = j1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper10').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= j1[index][0];
    }
}
j1setting = j1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper10");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionj(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = j1[index][0];
    var english = j1[index][1];
    var link = j1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper10");
x.style.height = "auto";
}
//change function name
function o10() {
    //change wrapper name
    var x = document.getElementById("wrapper10");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}


var k1 = [
["der Zwang", "compulsion/obligation", "https://en.wiktionary.org/wiki/Zwang", "noun"],
["das Abgas", "exhaust fumes", "https://www.collinsdictionary.com/dictionary/german-english/abgas", "noun"],
["umsetzen", "to implement", "https://en.wiktionary.org/wiki/umsetzen", "verb"],
["festsetzen", "to fix (a price)", "https://www.collinsdictionary.com/dictionary/german-english/festsetzen", "verb"],
["die Reinhaltung", "keeping clean", "https://www.collinsdictionary.com/dictionary/german-english/reinhaltung", "noun"],
["das Vers"+"\u00e4"+"umnis", "failing", "https://www.collinsdictionary.com/dictionary/german-english/versaumnis", "noun"],
["die Einhaltung", "compliance", "https://en.wiktionary.org/wiki/Einhaltung", "noun"],
["gerichtlich", "judicial", "https://www.collinsdictionary.com/dictionary/german-english/gerichtlich", "adj"],
["die Vorgabe", "guideline", "https://en.wiktionary.org/wiki/Vorgabe", "noun"],
["vorsehen", "to provide for", "https://www.collinsdictionary.com/dictionary/german-english/vorsehen", "verb"],
["die Frist", "deadline", "https://www.collinsdictionary.com/dictionary/german-english/frist", "noun"],
["gesetzt", "set", "https://www.dict.cc/?s=gesetzt", "adj"],
["verstreichen", "to expire", "https://www.collinsdictionary.com/dictionary/german-english/verstreichen", "verb"],
["beantragen", "to request", "https://en.wiktionary.org/wiki/beantragen", "verb"],
["die Bem"+"\u00fc"+"hung", "effort", "https://www.collinsdictionary.com/dictionary/german-english/bemuhung", "noun"],
["kurz davor stehen, etw zu tun", "to be on the verge of doing sth", "https://www.dict.cc/?s=davor+stehen%2C+etw.+zu+tun", "other"],
["verantwortlich", "responsible", "https://www.collinsdictionary.com/dictionary/german-english/verantwortlich", "adj"],
["die Haft", "detention", "https://www.collinsdictionary.com/dictionary/german-english/haft_2", "noun"],
["\u00fc"+"berhaupt", "at all", "https://www.collinsdictionary.com/dictionary/german-english/uberhaupt", "adv"],
["das Armutszeugnis", "poor show", "https://en.wiktionary.org/wiki/Armutszeugnis", "noun"],
["das Zeugnis", "evidence", "https://www.collinsdictionary.com/dictionary/german-english/zeugnis", "noun"],
["die Armut", "poverty", "https://www.collinsdictionary.com/dictionary/german-english/armut_2", "noun"],
["der Vorrang", "priority", "https://en.wiktionary.org/wiki/Vorrang", "noun"],
["die Belastung", "pollution", "https://www.collinsdictionary.com/dictionary/german-english/belastung", "noun"],
["\u00fc"+"berschreiten", "to exceed", "https://www.collinsdictionary.com/dictionary/german-english/uberschreiten", "verb"],
["der Grenzwert", "limit", "https://www.collinsdictionary.com/dictionary/german-english/grenzwert", "noun"],
["geltend", "current", "https://www.collinsdictionary.com/dictionary/german-english/geltend", "adj"],
["das Stickoxid", "nitric oxide", "https://www.collinsdictionary.com/dictionary/german-english/stickoxid", "noun"],
["der Beschluss", "decision", "https://www.collinsdictionary.com/dictionary/german-english/beschluss", "noun"],
["Beschwerde einlegen", "to lodge a complaint", "https://www.collinsdictionary.com/dictionary/german-english/beschwerde", "other"],
["die Androhung", "threat", "https://www.collinsdictionary.com/dictionary/german-english/androhung", "noun"],
["der Hof", "court", "https://www.collinsdictionary.com/dictionary/german-english/hof", "noun"],
["der Grundsatz", "principle", "https://www.collinsdictionary.com/dictionary/german-english/grundsatz", "noun"],
["die Rechtsstaatlichkeit", "constitutionality", "https://www.dict.cc/?s=Rechtsstaatlichkeit", "noun"],
["widersprechend", "contradictory", "https://www.collinsdictionary.com/dictionary/german-english/widersprechend", "adj"],
["handeln", "to deal with sth", "https://www.collinsdictionary.com/dictionary/german-english/handeln", "verb"],
["der Abschnitt", "section", "https://www.collinsdictionary.com/dictionary/german-english/abschnitt", "noun"],
["aufnehmen", "to accommodate (a ban)", "https://en.wiktionary.org/wiki/aufnehmen", "verb"],
["sich einigen", "to reach an agreement", "https://www.collinsdictionary.com/dictionary/german-english/einigen", "verb"],
["von etw an", "from sth onwards", "https://www.collinsdictionary.com/dictionary/german-english/an", "other"],
["sofern", "provided", "https://www.collinsdictionary.com/dictionary/german-english/sofern", "other"],
["sofern...nicht", "if...not", "https://www.collinsdictionary.com/dictionary/german-english/sofern", "other"],
["das Stickstoffdioxid", "nitrogen dioxide", "https://www.dict.cc/?s=Stickstoffdioxid", "noun"],
["einhalten", "to keep to", "https://www.collinsdictionary.com/dictionary/german-english/einhalten", "verb"],
["bis dahin", "before then", "https://www.dict.cc/?s=bis+dahin", "other"],
["ausgew"+"\u00e4"+"hlt", "select", "https://www.collinsdictionary.com/dictionary/german-english/ausgewahlt", "adj"],
["zu einer Gruppe/Menge z"+"\u00e4"+"hlen", "to be one of a group/set", "https://www.collinsdictionary.com/dictionary/german-english/zahlen_2", "other"],
["die Strecke", "route", "https://www.collinsdictionary.com/dictionary/german-english/strecke", "noun"],
["klagen", "to complain", "https://www.collinsdictionary.com/dictionary/german-english/klagen", "verb"],
["insgesamt", "altogether", "https://www.collinsdictionary.com/dictionary/german-english/insgesamt", "adv"],
["die "+"\u00dc"+"bersicht", "survey", "https://www.collinsdictionary.com/dictionary/german-english/ubersicht", "noun"],
["rechtskr"+"\u00e4"+"ftig", "legally valid", "https://www.collinsdictionary.com/dictionary/german-english/rechtskraftig", "adj"],
["der Rechtsstreit", "lawsuit", "https://www.collinsdictionary.com/dictionary/german-english/rechtsstreit", "noun"],
["einf"+"\u00fc"+"hren", "to introduce", "https://www.collinsdictionary.com/dictionary/german-english/einfuhren", "verb"],
["einzeln", "individual", "https://www.collinsdictionary.com/dictionary/german-english/einzeln", "adj"],
["grunds"+"\u00e4"+"tzlich", "in principle", "https://www.collinsdictionary.com/dictionary/german-english/grundsatzlich", "adj"],
["verh"+"\u00e4"+"ltnisma"+"\u00df"+"ig", "reasonable", "https://www.collinsdictionary.com/dictionary/german-english/verhaltnismassig", "adj"]
]
        
for (i in k1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionk(event, this)');
    //change letter
    b.setAttribute('id', "k" + i);
    b.setAttribute("class",k1[i][3]);
    b.appendChild(document.createTextNode(k1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper11');
    wrapper.appendChild(b);
};

var k1setting = 2;
//change function name
function lang11(){
    if (k1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper11').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = k1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper11').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= k1[index][0];
    }
}
k1setting = k1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper11");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionk(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = k1[index][0];
    var english = k1[index][1];
    var link = k1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper11");
x.style.height = "auto";
}
//change function name
function o11() {
    //change wrapper name
    var x = document.getElementById("wrapper11");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var l1 = [
["zur"+"\u00fc"+"cktreten", "to step back", "https://www.collinsdictionary.com/dictionary/german-english/zurucktreten", "verb"],
["abtreten", "to step down/resign", "https://www.collinsdictionary.com/dictionary/german-english/abtreten", "verb"],
["der R"+"\u00fc"+"cktritt", "resignation", "https://www.collinsdictionary.com/dictionary/german-english/rucktritt", "noun"],
["entlassen", "to dismiss", "https://www.collinsdictionary.com/dictionary/german-english/entlassen", "verb"],
["das Vereinigtes K"+"\u00f6"+"nigreich", "United Kingdom", "https://www.collinsdictionary.com/dictionary/german-english/vereinigt", "noun"],
["der Austritt", "leaving", "https://www.collinsdictionary.com/dictionary/german-english/austritt", "noun"],
["sich "+"\u00e4"+"u"+"\u00df"+"ern", "to speak", "https://www.collinsdictionary.com/dictionary/german-english/aussern", "verb"],
["\u00e4"+"hnlich", "similar", "https://www.collinsdictionary.com/dictionary/german-english/ahnlich", "adj"],
["ungeregelt", "irregular/unregulated", "https://www.collinsdictionary.com/dictionary/german-english/ungeregelt", "adj"],
["die Dem"+"\u00fc"+"tigung", "humiliation", "https://www.collinsdictionary.com/dictionary/german-english/demutigung", "noun"],
["\u00fc"+"berreichen", "to hand sth over", "https://www.collinsdictionary.com/dictionary/german-english/uberreichen", "verb"],
["das Gesuch", "application", "https://www.collinsdictionary.com/dictionary/german-english/gesuch", "noun"],
["der Sieg", "victory", "https://www.collinsdictionary.com/dictionary/german-english/sieg", "noun"],
["mit etw rechnen", "to expect", "https://www.collinsdictionary.com/dictionary/german-english/rechnen", "verb"],
["geh"+"\u00f6"+"ren", "to belong", "https://www.collinsdictionary.com/dictionary/german-english/gehoren", "verb"],
["der Abgeordnete", "MP", "https://www.collinsdictionary.com/dictionary/german-english/abgeordnete", "noun"],
["die Fraktion", "parliamentary party", "https://www.collinsdictionary.com/dictionary/german-english/fraktion", "noun"],
["erw"+"\u00e4"+"gen", "to consider", "https://www.collinsdictionary.com/dictionary/german-english/erwagen", "verb"],
["\u00fc"+"berlegen", "to consider", "https://www.collinsdictionary.com/dictionary/german-english/uberlegen", "verb"],
["sich anschlie"+"\u00df"+"en", "to side with", "https://www.collinsdictionary.com/dictionary/german-english/anschliessen", "verb"],
["die Stimme", "vote", "https://www.collinsdictionary.com/dictionary/german-english/stimme", "noun"],
["verk"+"\u00fc"+"nden", "to announce", "https://www.collinsdictionary.com/dictionary/german-english/verkunden", "verb"],
["der Au"+"\u00df"+"enminister", "foreign secretary", "https://www.collinsdictionary.com/dictionary/german-english/aussenminister", "noun"],
["das Mitglied", "member", "https://www.collinsdictionary.com/dictionary/german-english/mitglied", "noun"],
["die Wahl", "vote", "https://www.collinsdictionary.com/dictionary/german-english/wahl", "noun"],
["komme, was wolle", "no matter what", "https://www.dict.cc/?s=komme+was+wolle", "other"]
]
    
for (i in l1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionl(event, this)');
    //change letter
    b.setAttribute('id', "l" + i);
    b.setAttribute("class",l1[i][3]);
    b.appendChild(document.createTextNode(l1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper12');
    wrapper.appendChild(b);
};

var l1setting = 2;
//change function name
function lang12(){
    if (l1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper12').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = l1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper12').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= l1[index][0];
    }
}
l1setting = l1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper12");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionl(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = l1[index][0];
    var english = l1[index][1];
    var link = l1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper12");
x.style.height = "auto";
}
//change function name
function o12() {
    //change wrapper name
    var x = document.getElementById("wrapper12");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var m1 = [
["der Bestand", "continued existence", "https://www.collinsdictionary.com/dictionary/german-english/bestand", "noun"], 
["der Rasen", "grass", "https://www.collinsdictionary.com/dictionary/german-english/rasen", "noun"],
["pr"+"\u00fc"+"fen", "to consider", "https://www.collinsdictionary.com/dictionary/german-english/prufen", "verb"],
["mehrj"+"\u00e4"+"hrig", "of several years", "https://www.collinsdictionary.com/dictionary/german-english/mehrjahrig", "adj"],
["sich mit etw besch"+"\u00e4"+"ftigen", "to occupy oneself with sth", "https://www.collinsdictionary.com/dictionary/german-english/beschaftigen", "verb"],
["die Auswirkung", "consequence", "https://www.collinsdictionary.com/dictionary/german-english/auswirkung", "noun"],
["seit geraumer Zeit", "for some time", "https://www.collinsdictionary.com/dictionary/german-english/geraum", "other"],
["in Betrieb befindlich", "operating", "https://www.dict.cc/?s=in+Betrieb+befindlich", "adj"],
["das Nachf"+"\u00fc"+"llen", "refilling", "https://www.dict.cc/?s=Nachf%C3%BCllen", "noun"],
["wiederum", "in turn", "https://www.collinsdictionary.com/dictionary/german-english/wiederum", "adv"],
["langfristig", "long-term", "https://www.collinsdictionary.com/dictionary/german-english/langfristig", "adj"],
["der Umbau", "modification", "https://www.collinsdictionary.com/dictionary/german-english/umbau", "noun"],
["erforderlich", "necessary", "https://www.collinsdictionary.com/dictionary/german-english/erforderlich", "adj"],
["m"+"\u00f6"+"glichst lange", "as long as possible", "https://www.collinsdictionary.com/dictionary/german-english/moglichst", "adv"],
["der "+"\u00dc"+"bergang", "transition", "https://www.collinsdictionary.com/dictionary/german-english/ubergang", "noun"],
["im Sinne", "in the interests of", "https://www.dict.cc/?s=im+Sinne", "adv"],
["unerl"+"\u00e4"+"sslich", "essential", "https://www.collinsdictionary.com/dictionary/german-english/unerlasslich", "adj"],
["der Betrieb", "company/business", "https://www.collinsdictionary.com/dictionary/german-english/betrieb", "noun"],
["gef"+"\u00e4"+"hrden", "to endanger", "https://www.collinsdictionary.com/dictionary/german-english/gefahrden", "verb"],
["Sportst"+"\u00e4"+"tten", "sports facilities", "https://www.dict.cc/?s=Sportst%C3%A4tten", "noun"],
["zust"+"\u00e4"+"ndig", "repsonsible", "https://www.collinsdictionary.com/dictionary/german-english/zustandig", "adj"],
["nachhaltig", "lasting", "https://www.collinsdictionary.com/dictionary/german-english/nachhaltig", "adj"],
["umweltvertr"+"\u00e4"+"glich", "(=umweltfreundlich)", "https://www.collinsdictionary.com/dictionary/german-english/umweltvertraglich", "adj"],
["davon ausgehen", "to assume", "https://www.dict.cc/?s=ausgehen+davon", "verb"],
["bed"+"\u00fc"+"rfen", "to need", "https://www.collinsdictionary.com/dictionary/german-english/bedurfen", "verb"],
["zun"+"\u00e4"+"chst", "for the time being", "https://www.collinsdictionary.com/dictionary/german-english/zunachst", "adv"],
["die Einordnung", "classification", "https://www.dict.cc/?s=Einordnung", "noun"],
["die Bildung", "formation", "https://www.collinsdictionary.com/dictionary/german-english/bildung", "noun"],
["die Mitteilung", "announcement", "https://www.collinsdictionary.com/dictionary/german-english/mitteilung", "noun"],
["einstreuen", "to sprinkle in", "https://www.collinsdictionary.com/dictionary/german-english/einstreuen", "verb"],
["ausstehen", "to be still to come", "https://www.collinsdictionary.com/dictionary/german-english/ausstehen", "verb"],
["der Verband", "association", "https://www.collinsdictionary.com/dictionary/german-english/verband", "noun"],
["die Anh"+"\u00f6"+"rung", "hearing", "https://www.collinsdictionary.com/dictionary/german-english/anhorung", "noun"],
["einflie"+"\u00df"+"en in", "to have some influence on", "https://www.collinsdictionary.com/dictionary/german-english/einfliessen", "verb"],
["der Abriss", "outline", "https://www.collinsdictionary.com/dictionary/german-english/abriss", "noun"],
["bestehen", "to exist", "https://www.collinsdictionary.com/dictionary/german-english/bestehen", "verb"],
["das steht hier nicht zur Debatte", "that's not the issue", "https://www.collinsdictionary.com/dictionary/german-english/debatte", "other"],
["der Ersatz", "replacement", "https://www.collinsdictionary.com/dictionary/german-english/ersatz", "noun"],
["die Anlage", "facility", "https://www.collinsdictionary.com/dictionary/german-english/anlage", "noun"],
["belegen", "to occupy", "https://www.collinsdictionary.com/dictionary/german-english/belegen", "verb"],
["k"+"\u00fc"+"nstlich", "artificial", "https://www.collinsdictionary.com/dictionary/german-english/kunstlich", "adj"],
["gelten als", "to be regarded as", "https://www.collinsdictionary.com/dictionary/german-english/gelten", "verb"],
["best"+"\u00e4"+"ndig", "durable", "https://en.wiktionary.org/wiki/bestandig", "adj"]   
]
        
for (i in m1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionm(event, this)');
    //change letter
    b.setAttribute('id', "m" + i);
    b.setAttribute("class",m1[i][3]);
    b.appendChild(document.createTextNode(m1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper13');
    wrapper.appendChild(b);
};

var m1setting = 2;
//change function name
function lang13(){
    if (m1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper13').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = m1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper13').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= m1[index][0];
    }
}
m1setting = m1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper13");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionm(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = m1[index][0];
    var english = m1[index][1];
    var link = m1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper13");
x.style.height = "auto";
}
//change function name
function o13() {
    //change wrapper name
    var x = document.getElementById("wrapper13");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var n1 = [
["der Polizist", "policeman", "https://www.collinsdictionary.com/dictionary/german-english/polizist", "noun"],
["erschie"+"\u00df"+"en", "to shoot (dead)", "https://www.collinsdictionary.com/dictionary/german-english/erschossen", "verb"],
["bewerten", "to assess", "https://www.collinsdictionary.com/dictionary/german-english/bewerten", "verb"],
["die Notwehr", "self-defense", "https://www.collinsdictionary.com/dictionary/german-english/notwehr", "noun"],
["der Schuss", "shot", "https://www.collinsdictionary.com/dictionary/german-english/schuss", "noun"],
["die Hochschule", "university", "https://www.collinsdictionary.com/dictionary/german-english/hochschule", "noun"],
["zuordnen", "to assign to", "https://www.collinsdictionary.com/dictionary/german-english/zuordnen", "verb"],
["beziehungsweise", "or", "https://www.collinsdictionary.com/dictionary/german-english/beziehungsweise", "other"],
["allesamt", "all", "https://www.collinsdictionary.com/dictionary/german-english/allesamt", "adv"],
["der Einsatz", "use", "https://www.collinsdictionary.com/dictionary/german-english/einsatz", "noun"],
["zur"+"\u00fc"+"ckgehen", "to decline", "https://www.dict.cc/?s=zur%C3%BCckgehen&failed_kw=zuruckgehen", "verb"],
["rechnerisch", "numerically", "https://www.collinsdictionary.com/dictionary/german-english/rechnerisch", "adv"],
["die Schusswaffe", "firearm", "https://www.collinsdictionary.com/dictionary/german-english/schusswaffe", "noun"],
["somit", "therefore", "https://www.collinsdictionary.com/dictionary/german-english/somit", "adv"],
["die Gewerkschaft", "union", "https://www.collinsdictionary.com/dictionary/german-english/gewerkschaft", "noun"],
["betonen", "to emphasize", "https://www.collinsdictionary.com/dictionary/german-english/betonen", "verb"],
["niedrig", "low", "https://www.collinsdictionary.com/dictionary/german-english/niedrig", "adj"],
["Polizeivollzugsbeamte", "police officers", "https://www.dict.cc/?s=Polizeivollzugsbeamte", "noun"],
["schie"+"\u00df"+"w"+"\u00fc"+"tig", "trigger-happy", "https://www.dict.cc/?s=schie%C3%9Fw%C3%BCtig", "adj"],
["es kann keine Rede sein von...", "there can be no talk of...", "https://www.dict.cc/?s=keine+rede", "other"],
["erfolgen", "to follow", "https://www.collinsdictionary.com/dictionary/german-english/erfolgen", "verb"],
["als letztes Mittel", "as a last resort", "https://www.dict.cc/?s=als+letztes+Mittel", "adv"],
["stellvertretend", "acting", "https://www.collinsdictionary.com/dictionary/german-english/stellvertretend", "adj"],
["darauf hinweisen", "to point out", "https://www.collinsdictionary.com/dictionary/german-english/hinweisen", "verb"],
["t"+"\u00e4"+"tlich", "violent", "https://www.collinsdictionary.com/dictionary/german-english/tatlich", "adj"],
["die Konkurrenz", "competition", "https://www.collinsdictionary.com/dictionary/german-english/konkurrenz", "noun"],
["die Gewalt", "force/violence", "https://www.collinsdictionary.com/dictionary/german-english/gewalt", "noun"],
["feststellbar", "detectable", "https://en.wiktionary.org/wiki/feststellbar", "adj"],
["zwingen", "to force", "https://www.collinsdictionary.com/dictionary/german-english/zwingen", "verb"],
["greifen", "to take hold of", "https://www.collinsdictionary.com/dictionary/german-english/greifen", "verb"],
["\u00fc"+"brigens", "by the way", "https://www.collinsdictionary.com/dictionary/german-english/ubrigens", "adv"],
["aufweisen", "to show", "https://www.collinsdictionary.com/dictionary/german-english/aufweisen", "verb"]  
]
        
for (i in n1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionn(event, this)');
    //change letter
    b.setAttribute('id', "n" + i);
    b.setAttribute("class",n1[i][3]);
    b.appendChild(document.createTextNode(n1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper14');
    wrapper.appendChild(b);
};

var n1setting = 2;
//change function name
function lang14(){
    if (n1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper14').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = n1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper14').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= n1[index][0];
    }
}
n1setting = n1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper14");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionn(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = n1[index][0];
    var english = n1[index][1];
    var link = n1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
      document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper14");
x.style.height = "auto";
}
//change function name
function o14() {
    //change wrapper name
    var x = document.getElementById("wrapper14");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var p1 = [
["mahnen wegen", "to remind of", "https://www.collinsdictionary.com/dictionary/german-english/mahnen", "verb"],
["Ma"+"\u00df"+"nahmen ergreifen", "to take measures", "https://www.collinsdictionary.com/dictionary/german-english/ergreifen", "verb"],
["die Klage", "charge", "https://www.collinsdictionary.com/dictionary/german-english/klage", "noun"],
["verfehlen", "to fail", "https://www.collinsdictionary.com/dictionary/german-english/verfehlen", "verb"],
["verringern", "to reduce", "https://www.collinsdictionary.com/dictionary/german-english/verringern", "verb"],
["das D"+"\u00fc"+"ngemittel", "fertilizer", "https://www.collinsdictionary.com/dictionary/german-english/dungemittel", "noun"],
["das Mahnschreiben", "reminder", "https://www.collinsdictionary.com/dictionary/german-english/mahnschreiben", "noun"],
["nachbessern", "to amend", "https://www.collinsdictionary.com/dictionary/german-english/nachbessern", "verb"],
["die Verordnung", "decree", "https://www.collinsdictionary.com/dictionary/german-english/verordnung", "noun"],
["die Vorschlag", "proposal", "https://www.collinsdictionary.com/dictionary/german-english/vorschlag", "noun"],
["die Mahnung", "reminder", "https://www.collinsdictionary.com/dictionary/german-english/mahnung", "noun"],
["nachkommen", "to satisfy", "https://en.wiktionary.org/wiki/nachkommen", "verb"],
["die Strafe", "punishment", "https://www.collinsdictionary.com/dictionary/german-english/strafe", "noun"],
["in H"+"\u00f6"+"he", "amounting to", "https://www.dict.cc/?s=in+H%C3%B6he", "other"],
["verurteilen", "to fine", "https://www.collinsdictionary.com/dictionary/german-english/verurteilen", "verb"],
["offensichtlich", "obvious", "https://www.collinsdictionary.com/dictionary/german-english/offensichtlich", "adj"],
["die Auffassung", "opinion", "https://www.collinsdictionary.com/dictionary/german-english/auffassung", "noun"],
["verh"+"\u00e4"+"ngen", "to impose", "https://www.collinsdictionary.com/dictionary/german-english/verhangen", "verb"],
["das Urteil", "judgement", "https://www.collinsdictionary.com/dictionary/german-english/urteil", "noun"],
["verpflichten", "to oblige", "https://www.collinsdictionary.com/dictionary/german-english/verpflichten", "verb"],
["etw strenger gestalten", "to make sth stricter", "https://www.collinsdictionary.com/dictionary/german-english/gestalten", "other"],
["die Bestimmung", "regulation", "https://www.collinsdictionary.com/dictionary/german-english/bestimmung", "noun"],
["der Landwirt", "farmer", "https://www.collinsdictionary.com/dictionary/german-english/landwirt", "noun"],
["ausbringen", "to apply (fertilizer)", "https://www.dict.cc/?s=Ausbringen&failed_kw=ausbrignen", "verb"],
["die G"+"\u00fc"+"lle", "liquid manure", "https://www.collinsdictionary.com/dictionary/german-english/gulle", "noun"],
["die Gesetzgebung", "leglisation", "https://www.collinsdictionary.com/dictionary/german-english/gesetzgebung", "noun"],
["immer wieder", "again and again", "https://www.dict.cc/?s=immer+wieder", "adv"],
["sich verz"+"\u00f6"+"gern", "to be delayed", "https://www.collinsdictionary.com/dictionary/german-english/verzogern", "verb"],
["der Widerstand", "resistance", "https://www.collinsdictionary.com/dictionary/german-english/widerstand", "noun"],
["das Gew"+"\u00e4"+"sser", "stretch of water", "https://www.collinsdictionary.com/dictionary/german-english/gewasser", "noun"],
["das Wachstum", "growth", "https://www.collinsdictionary.com/dictionary/german-english/wachstum", "noun"],
["doch", "after all", "https://www.collinsdictionary.com/dictionary/german-english/doch", "adv"],
["d"+"\u00fc"+"ngen", "to fertilize", "https://www.collinsdictionary.com/dictionary/german-english/dungen", "verb"],
["sich ansammeln", "to accumulate", "https://www.collinsdictionary.com/dictionary/german-english/ansammeln", "verb"],
["der R"+"\u00fc"+"ckstand", "residue", "https://www.collinsdictionary.com/dictionary/german-english/ruckstand", "noun"],
["der Bach", "stream", "https://www.collinsdictionary.com/dictionary/german-english/bach", "noun"],
["entstehen durch", "to be produced through", "https://www.collinsdictionary.com/dictionary/german-english/entstehen", "verb"] 
]

for (i in p1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionp(event, this)');
    //change letter
    b.setAttribute('id', "p" + i);
    b.setAttribute("class",p1[i][3]);
    b.appendChild(document.createTextNode(p1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper15');
    wrapper.appendChild(b);
};

var p1setting = 2;
//change function name
function lang15(){
    if (p1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper15').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = p1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper15').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= p1[index][0];
    }
}
p1setting = p1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper15");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionp(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = p1[index][0];
    var english = p1[index][1];
    var link = p1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
        document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper15");
x.style.height = "auto";
}
//change function name
function o15() {
    //change wrapper name
    var x = document.getElementById("wrapper15");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}


var q1 = [
["das ist doch mal was", "that's really something", "https://www.dict.cc/?s=da+war+doch+mal+was", "other"],
["gut", "about", "https://www.dict.cc/?s=Gut", "adv"],
["eine Aufnahme machen", "to take a photo", "https://www.collinsdictionary.com/dictionary/german-english/aufnahme", "verb"],
["in erster Linie", "mainly", "https://www.dict.cc/?s=in+erster+Linie", "adv"],
["zum Einsatz kommen", "to be used", "https://www.dict.cc/?s=zum+Einsatz+kommen", "verb"],
["die Gegend", "area", "https://www.collinsdictionary.com/dictionary/german-english/gegend", "noun"],
["unterwegs", "on the road", "https://www.dict.cc/?s=unterwegs", "adv"],
["das Verkehrszeichen", "road sign", "https://www.collinsdictionary.com/dictionary/german-english/verkehrszeichen", "noun"],
["die Stra"+"\u00df"+"enf"+"\u00fc"+"hrung", "route", "https://www.collinsdictionary.com/dictionary/german-english/strassenfuhrung", "noun"],
["entnehmen", "to take (info)", "https://www.collinsdictionary.com/dictionary/german-english/entnehmen", "verb"],
["ausstatten", "to equip", "https://www.collinsdictionary.com/dictionary/german-english/ausstatten", "verb"],
["abtasten", "to scan", "https://www.collinsdictionary.com/dictionary/german-english/abtasten", "verb"],
["der Aufenthaltsort", "whereabouts", "https://www.collinsdictionary.com/dictionary/german-english/aufenthaltsort", "noun"],
["aufzeichnen", "to record", "https://www.collinsdictionary.com/dictionary/german-english/aufzeichnen", "verb"],
["erheben", "to gather (data)", "https://en.wiktionary.org/wiki/erheben", "verb"],
["das Gesicht", "face", "https://www.collinsdictionary.com/dictionary/german-english/gesicht", "noun"],
["das Autokennziechen", "license plate", "https://www.dict.cc/?s=Autokennzeichen", "noun"],
["verpixeln", "to pixelate", "https://www.collinsdictionary.com/dictionary/german-english/verpixeln", "verb"],
["die L"+"\u00f6"+"schung", "deletion", "https://www.collinsdictionary.com/dictionary/german-english/loschung", "noun"],
["roh", "raw", "https://www.collinsdictionary.com/dictionary/german-english/roh", "adj"],
["die Abbildung", "depiction", "https://www.collinsdictionary.com/dictionary/german-english/abbildung", "noun"],
["abfahren", "to cover", "https://www.collinsdictionary.com/dictionary/german-english/abfahren", "verb"]
]

for (i in q1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionq(event, this)');
    //change letter
    b.setAttribute('id', "q" + i);
    b.setAttribute("class",q1[i][3]);
    b.appendChild(document.createTextNode(q1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper16');
    wrapper.appendChild(b);
};

var q1setting = 2;
//change function name
function lang16(){
    if (q1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper16').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = q1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper16').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= q1[index][0];
    }
}
q1setting = q1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper16");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionq(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = q1[index][0];
    var english = q1[index][1];
    var link = q1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
        document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper16");
x.style.height = "auto";
}
//change function name
function o16() {
    //change wrapper name
    var x = document.getElementById("wrapper16");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var r1 = [
["das Volksfest", "public festival", "https://www.collinsdictionary.com/dictionary/german-english/volksfest", "noun"],
["feuern", "to fire", "https://www.collinsdictionary.com/dictionary/german-english/feuern", "verb"],
["jdn ins Krankenhaus einliefern", "to admit sb to hospital", "https://www.collinsdictionary.com/dictionary/german-english/einliefern", "other"],
["der Zustand", "condition (med)", "https://www.collinsdictionary.com/dictionary/german-english/zustand", "noun"],
["Angaben zu etw machen", "to give details on something", "https://www.collinsdictionary.com/dictionary/german-english/angabe", "other"],
["stellen", "to catch", "https://www.collinsdictionary.com/dictionary/german-english/stellen", "verb"],
["der Zeuge", "witness", "https://www.collinsdictionary.com/dictionary/german-english/zeuge", "noun"],
["er"+"\u00f6"+"ffnen", "open", "https://www.collinsdictionary.com/dictionary/german-english/eroffnen", "verb"],
["der Zaun", "fence", "https://www.collinsdictionary.com/dictionary/german-english/zaun", "noun"],
["durchschneiden", "to cut through", "https://www.collinsdictionary.com/dictionary/german-english/durchschneiden", "verb"],
["der Zugang", "entrance", "https://www.collinsdictionary.com/dictionary/german-english/zugang", "noun"],
["das Gel"+"\u00e4"+"nde", "grounds", "https://www.collinsdictionary.com/dictionary/german-english/gelande", "noun"],
["sich Zugang verschaffen", "to gain access", "https://www.dict.cc/?s=verschaffen", "verb"],
["die Alarmbereitschaft", "alert", "https://www.collinsdictionary.com/dictionary/german-english/alarmbereitschaft", "noun"],
["der Sender", "channel (TV)", "https://www.collinsdictionary.com/dictionary/german-english/sender", "noun"],
["die Kugel", "shot", "https://www.collinsdictionary.com/dictionary/german-english/kugel", "noun"],
["rennen", "to run", "https://www.collinsdictionary.com/dictionary/german-english/rennen", "verb"],
["die Tarnkleidung", "camoflage", "https://www.dict.cc/?s=Tarnkleidung", "noun"],
["der Vorfall", "incident", "https://www.collinsdictionary.com/dictionary/german-english/vorfall", "noun"],
["wackelig", "shaky", "https://www.collinsdictionary.com/dictionary/german-english/wackelig", "adj"],
["kursieren", "to circulate", "https://www.collinsdictionary.com/dictionary/german-english/kursieren", "verb"],
["anrichten", "to bring about", "https://www.collinsdictionary.com/dictionary/german-english/anrichten", "verb"],
["folgenschwer", "serious", "https://www.collinsdictionary.com/dictionary/german-english/folgenschwer", "adj"],
["die Menschenmenge", "crowd", "https://www.collinsdictionary.com/dictionary/german-english/menschenmenge", "noun"]
]

for (i in r1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionr(event, this)');
    //change letter
    b.setAttribute('id', "r" + i);
    b.setAttribute("class",r1[i][3]);
    b.appendChild(document.createTextNode(r1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper17');
    wrapper.appendChild(b);
};

var r1setting = 2;
//change function name
function lang17(){
    if (r1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper17').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = r1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper17').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= r1[index][0];
    }
}
r1setting = r1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper17");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionr(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = r1[index][0];
    var english = r1[index][1];
    var link = r1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
        document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper17");
x.style.height = "auto";
}
//change function name
function o17() {
    //change wrapper name
    var x = document.getElementById("wrapper17");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}


var s1 = [
["das Amt", "department", "https://www.collinsdictionary.com/dictionary/german-english/amt", "noun"],
["die Zielvorgabe", "objective", "https://www.dict.cc/?s=Zielvorgabe", "noun"],
["erh"+"\u00f6"+"hen", "to rise", "https://www.collinsdictionary.com/dictionary/german-english/erhohen", "verb"],
["der Wohnungsbestand", "housing stock", "https://www.dict.cc/?s=Wohnungsbestand", "noun"],
["angesichts", "in the face of", "https://www.collinsdictionary.com/dictionary/german-english/angesichts", "other"],
["die Ballung", "concentration", "https://www.collinsdictionary.com/dictionary/german-english/ballung", "noun"],
["die Knappheit", "shortage", "https://www.collinsdictionary.com/dictionary/german-english/knappheit", "noun"],
["der Anspruch", "demand", "https://www.collinsdictionary.com/dictionary/german-english/anspruch", "noun"],
["das Einfamilienhaus", "single-family house", "https://www.collinsdictionary.com/dictionary/german-english/einfamilienhaus", "noun"],
["eingehen", "to enter", "https://www.dict.cc/?s=eingehen", "verb"],
["\u00fc"+"ber etw hinaus", "beyond sth", "https://www.collinsdictionary.com/dictionary/german-english/hinaus", "other"],
["hingegen", "however", "https://www.collinsdictionary.com/dictionary/german-english/hingegen", "other"]
]

for (i in s1){
var b = document.createElement('button');
//change function name
b.setAttribute("onclick", 'myFunctions(event, this)');
//change letter
b.setAttribute('id', "s" + i);
b.setAttribute("class",s1[i][3]);
b.appendChild(document.createTextNode(s1[i][0]));
//change wrapper name
var wrapper = document.getElementById('wrapper18');
wrapper.appendChild(b);
};

var s1setting = 2;
//change function name
function lang18(){
if (s1setting  % 2 === 0){
    // change wrapper name 
    var children = [].slice.call(document.getElementById('wrapper18').getElementsByTagName('*'),0);
    for (i = 0; i<children.length; i++){
        var char = children[i].id;
        var index = parseInt(char.slice(1));
        children[i].innerText = s1[index][1];
    }
}
else{
    // change wrapper name
    var children = [].slice.call(document.getElementById('wrapper18').getElementsByTagName('*'),0);
    for (i = 0; i<children.length; i++){
        var char = children[i].id;
        var index = parseInt(char.slice(1));
        children[i].innerText= s1[index][0];
}
}
s1setting = s1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper18");
if (x.style.height) {
x.style.height = "auto";
} 
else {
return null;
}
}
//change function name
function myFunctions(event, el) {
var char = el.id;
var index = eval(char.slice(1));
var german = s1[index][0];
var english = s1[index][1];
var link = s1[index][2];
if (event.shiftKey) {
    window.open(link, "_blank");
}
else if(event.ctrlKey) {
    document.getElementById(char).remove();
}
else {
if (document.getElementById(char).innerText == german) 
{
    document.getElementById(char).innerText = english;
}
else 
{
    document.getElementById(char).innerText = german;
}}
//change wrapper name
var x = document.getElementById("wrapper18");
x.style.height = "auto";
}
//change function name
function o18() {
//change wrapper name
var x = document.getElementById("wrapper18");
if (x.style.height) {
    x.style.height = null;
} 
else {
    x.style.height = x.scrollHeight + "px";
}
}

var t1 = [
["die Etappe", "stage", "https://www.collinsdictionary.com/dictionary/german-english/etappe", "noun"],
["vorzeitig", "prematurely", "https://www.collinsdictionary.com/dictionary/german-english/vorzeitig", "adv"],
["die Bedingung", "condition", "https://www.collinsdictionary.com/dictionary/german-english/bedingung", "noun"],
["abbrechen", "to stop", "https://www.collinsdictionary.com/dictionary/german-english/abbrechen", "verb"],
["der Hagelschauer", "hailstorm", "https://www.dict.cc/?s=Hagelschauer", "noun"],
["verhindern", "to prevent", "https://www.collinsdictionary.com/dictionary/german-english/verhindern", "verb"],
["veranstalten", "to organise", "https://www.collinsdictionary.com/dictionary/german-english/veranstalten", "verb"],
["der Abbruch", "stopping", "https://www.collinsdictionary.com/dictionary/german-english/abbruch", "noun"],
["die Lawine", "avalanche", "https://www.collinsdictionary.com/dictionary/german-english/lawine", "noun"],
["die Abfahrt", "departure", "https://www.collinsdictionary.com/dictionary/german-english/abfahrt", "noun"],
["das Gebirge", "mountain range", "https://www.collinsdictionary.com/dictionary/german-english/gebirge", "noun"],
["per Funk", "by radio", "https://www.collinsdictionary.com/dictionary/german-english/funk_2", "other"],
["das Teilst"+"\u00fc"+"ck", "stage", "https://www.dict.cc/?s=Teilst%C3%BCck&failed_kw=teilstuck", "noun"],
["die Gemeinde", "community", "https://www.collinsdictionary.com/dictionary/german-english/gemeinde", "noun"],
["der Bagger", "dredger", "https://www.collinsdictionary.com/dictionary/german-english/bagger", "noun"],
["das Rennen", "race", "https://www.collinsdictionary.com/dictionary/german-english/rennen", "noun"],
["der Zwischenfall", "incident", "https://www.collinsdictionary.com/dictionary/german-english/zwischenfall", "noun"],
["der Ausgang", "outcome", "https://www.collinsdictionary.com/dictionary/german-english/ausgang", "noun"],
["innehaben", "to hold", "https://www.collinsdictionary.com/dictionary/german-english/innehaben", "verb"],
["verdr"+"\u00e4"+"ngen", "to oust", "https://www.collinsdictionary.com/dictionary/german-english/verdrangen", "verb"],
["werten", "to allow (sport)", "https://www.collinsdictionary.com/dictionary/german-english/werten", "verb"],
["die Wertung", "scoring", "https://www.collinsdictionary.com/dictionary/german-english/wertung", "noun"],
["der Gipfel", "summit", "https://www.collinsdictionary.com/dictionary/german-english/gipfel", "noun"],
["einfahren", "to arrive", "https://en.wiktionary.org/wiki/einfahren", "verb"],
["stattdessen", "instead", "https://www.collinsdictionary.com/dictionary/german-english/stattdessen", "adv"],
["vergeben", "to award", "https://www.collinsdictionary.com/dictionary/german-english/vergeben", "verb"],
["der Rang", "rank", "https://www.collinsdictionary.com/dictionary/german-english/rang", "noun"],
["der Mitfavorit", "joint favourite", "https://www.dict.cc/?s=Mitfavorit", "noun"],
["der Muskelfaserriss", "torn muscle fiber", "https://www.dict.cc/?s=Muskelfaserriss", "noun"],
["der Trikot", "jersey", "https://www.collinsdictionary.com/dictionary/german-english/trikot", "noun"]
]

for (i in t1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctiont(event, this)');
    //change letter
    b.setAttribute('id', "t" + i);
    b.setAttribute("class",t1[i][3]);
    b.appendChild(document.createTextNode(t1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper19');
    wrapper.appendChild(b);
};

var t1setting = 2;
//change function name
function lang19(){
    if (t1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper19').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = t1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper19').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= t1[index][0];
    }
}
t1setting = t1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper19");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctiont(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = t1[index][0];
    var english = t1[index][1];
    var link = t1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
        document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper19");
x.style.height = "auto";
}
//change function name
function o19() {
    //change wrapper name
    var x = document.getElementById("wrapper19");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var u1 = [
["die Hitze", "heat", "https://www.collinsdictionary.com/dictionary/german-english/hitze", "noun"],
["im Schnitt", "on average", "https://www.dict.cc/?s=im+Schnitt", "adv"],
["der Mittelwert", "mean", "https://www.collinsdictionary.com/dictionary/german-english/mittelwert", "noun"],
["au"+"\u00df"+"ergew"+"\u00f6"+"hnlich", "unusual (=ungew"+"\u00f6"+"hnlich)", "https://www.collinsdictionary.com/dictionary/german-english/aussergewohnlich", "adj"],
["aufstellen", "to set", "https://www.collinsdictionary.com/dictionary/german-english/aufstellen", "verb"],
["\u00fc"+"berbieten", "to beat (record)", "https://www.collinsdictionary.com/dictionary/german-english/uberbieten", "verb"],
["messen", "to measure", "https://www.collinsdictionary.com/dictionary/german-english/messen", "verb"],
["verzeichnen", "to record", "https://www.collinsdictionary.com/dictionary/german-english/verzeichnen", "verb"],
["dr"+"\u00fc"+"cken", "to weigh heavily upon", "https://www.collinsdictionary.com/dictionary/german-english/drucken_2", "verb"],
["vorl"+"\u00e4"+"ufig", "temporary", "https://www.collinsdictionary.com/dictionary/german-english/vorlaufig", "adj"],
["das Soll", "target", "https://www.collinsdictionary.com/dictionary/german-english/soll", "noun"],
["leiden", "to suffer", "https://www.collinsdictionary.com/dictionary/german-english/leiden_2", "verb"],
["die Schicht", "layer", "https://www.collinsdictionary.com/dictionary/german-english/schicht", "noun"],
["durchdringen", "to penetrate", "https://www.collinsdictionary.com/dictionary/german-english/durchdringen", "verb"]
]
            
var u1noun = 0;
var u1verb = 0;
var u1adv = 0;
var u1other = 0;
var u1adj = 0;
var u1total = 0;

for (i in u1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionu(event, this)');
    //change letter
    b.setAttribute('id', "u" + i);
    b.setAttribute("class",u1[i][3]);
    b.appendChild(document.createTextNode(u1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper20');
    wrapper.appendChild(b);
    if (u1[i][3] == "verb") {
        u1verb = 1 + u1verb;
        u1total = 1 + u1total;
        }
        else if (u1[i][3] == "noun") {
        u1noun = 1+u1noun;
        u1total = 1 + u1total;
        }
        else if (u1[i][3] == "adv") {
        u1adv = 1+u1adv;
        u1total = 1 + u1total;
        }
        else if (u1[i][3] == "adj") {
        u1adj = 1+u1adj;
        u1total = 1 + u1total;
        }
        else {
        u1other = 1+u1other;
        u1total = 1 + u1total;
        }
};

var u1setting = 2;
//change function name
function lang20(){
    if (u1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper20').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = u1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper20').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= u1[index][0];
    }
}
u1setting = u1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper20");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionu(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = u1[index][0];
    var english = u1[index][1];
    var link = u1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
        document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper20");
x.style.height = "auto";
}
//change function name
function o20() {
    //change wrapper name
    var x = document.getElementById("wrapper20");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var u1verbp = String(Math.floor(100* u1verb/ u1total)) + "%" ;
var u1nounp = String(Math.floor(100* u1noun/ u1total)+Math.floor(100* u1verb/ u1total)) + "%" ;
var u1adjp = String(Math.floor(100* u1adj/ u1total)+Math.floor(100* u1noun/ u1total)+Math.floor(100* u1verb/ u1total)) + "%" ;
var u1advp = String(Math.floor(100* u1adv/ u1total)+Math.floor(100* u1adj/ u1total)+Math.floor(100* u1noun/ u1total)+Math.floor(100* u1verb/ u1total)) + "%" ;

console.log(u1verbp,u1nounp,u1adjp,u1advp)

var v1 = [
["sich verlangsamen", "to slow down", "https://www.collinsdictionary.com/dictionary/german-english/verlangsamen", "verb"],
["sich abschw"+"\u00e4"+"chen", "to diminish", "https://www.collinsdictionary.com/dictionary/german-english/abschwachen", "verb"],
["die W"+"\u00e4"+"hrung", "currency", "https://www.collinsdictionary.com/dictionary/german-english/wahrung_2", "noun"],
["erwarten", "to expect", "https://www.collinsdictionary.com/dictionary/german-english/erwarten", "verb"],
["ausfallen", "to turn out", "https://www.dict.cc/?s=ausfallen", "verb"],
["der Stand", "position", "https://www.collinsdictionary.com/dictionary/german-english/stand", "noun"],
["tief", "low", "https://www.collinsdictionary.com/dictionary/german-english/tief", "adj"],
["betragen", "amounts to", "https://www.dict.cc/?s=betr%C3%A4gt", "verb"],
["aufschieben", "to postpone", "https://en.wiktionary.org/wiki/aufschieben", "verb"],
["die Anschaffung", "purchase", "https://www.collinsdictionary.com/dictionary/german-english/anschaffung", "noun"],
["st"+"\u00fc"+"tzen", "to support", "https://www.collinsdictionary.com/dictionary/german-english/stutzen_2", "verb"],
["lockern", "to relax", "https://www.collinsdictionary.com/dictionary/german-english/lockern", "verb"],
["die Wideraufnahme", "resumption", "https://www.collinsdictionary.com/dictionary/german-english/wiederaufnahme", "noun"],
["der Zins", "interest (fin)", "https://www.collinsdictionary.com/dictionary/german-english/zins", "noun"],
["einlagern", "to store", "https://www.collinsdictionary.com/dictionary/german-english/einlagern", "verb"],
["anregen", "to prompt", "https://www.collinsdictionary.com/dictionary/german-english/anregen", "verb"],
["antreiben", "to drive (fin)", "https://www.collinsdictionary.com/dictionary/german-english/antreiben", "verb"],
["die Konjunktur", "economic situation", "https://www.collinsdictionary.com/dictionary/german-english/konjunktur", "noun"],
["die Preisentwicklung", "market trend", "https://www.dict.cc/?s=Preisentwicklung", "noun"],
["schw"+"\u00e4"+"cheln", "to weaken", "https://www.collinsdictionary.com/dictionary/german-english/schwacheln", "verb"],
["die Aufzeichnung", "recording", "https://www.collinsdictionary.com/dictionary/german-english/aufzeichnung", "noun"]
]
            
var v1noun = 0;
var v1verb = 0;
var v1adv = 0;
var v1other = 0;
var v1adj = 0;
var v1total = 0;

for (i in v1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionv(event, this)');
    //change letter
    b.setAttribute('id', "v" + i);
    b.setAttribute("class",v1[i][3]);
    b.appendChild(document.createTextNode(v1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper21');
    wrapper.appendChild(b);
    if (v1[i][3] == "verb") {
        v1verb = 1 + v1verb;
        v1total = 1 + v1total;
        }
        else if (v1[i][3] == "noun") {
        v1noun = 1+v1noun;
        v1total = 1 + v1total;
        }
        else if (v1[i][3] == "adv") {
        v1adv = 1+v1adv;
        v1total = 1 + v1total;
        }
        else if (v1[i][3] == "adj") {
        v1adj = 1+v1adj;
        v1total = 1 + v1total;
        }
        else {
        v1other = 1+v1other;
        v1total = 1 + v1total;
        }
};

var v1setting = 2;
//change function name
function lang21(){
    if (v1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper21').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = v1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper21').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= v1[index][0];
    }
}
v1setting = v1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper21");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionv(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = v1[index][0];
    var english = v1[index][1];
    var link = v1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
        document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper21");
x.style.height = "auto";
}
//change function name
function o21() {
    //change wrapper name
    var x = document.getElementById("wrapper21");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var v1verbp = String(Math.floor(100* v1verb/ v1total)) + "%" ;
var v1nounp = String(Math.floor(100* v1noun/ v1total)+Math.floor(100* v1verb/ v1total)) + "%" ;
var v1adjp = String(Math.floor(100* v1adj/ v1total)+Math.floor(100* v1noun/ v1total)+Math.floor(100* v1verb/ v1total)) + "%" ;
var v1advp = String(Math.floor(100* v1adv/ v1total)+Math.floor(100* v1adj/ v1total)+Math.floor(100* v1noun/ v1total)+Math.floor(100* v1verb/ v1total)) + "%" ;

console.log(v1verbp,v1nounp,v1adjp,v1advp)

var w1 = [
["wahrscheinlich", "probable", "https://www.collinsdictionary.com/dictionary/german-english/wahrscheinlich", "adj"],
["auftreten", "to occur", "https://www.collinsdictionary.com/dictionary/german-english/auftreten", "verb"],
["errechnen", "to calculate", "https://en.wiktionary.org/wiki/errechnen", "verb"],
["j"+"\u00fc"+"ngst", "latest", "https://www.collinsdictionary.com/dictionary/german-english/jungste", "adj"],
["verst"+"\u00e4"+"rken", "to intensify", "https://www.collinsdictionary.com/dictionary/german-english/verstarken", "verb"],
["beteiligt", "involved in", "https://www.collinsdictionary.com/dictionary/german-english/beteiligt", "adj"],
["melden", "to report", "https://www.collinsdictionary.com/dictionary/german-english/melden", "verb"],
["der Bahnverkehr", "rail services", "https://www.dict.cc/?s=Bahnverkehr", "noun"],
["die D"+"\u00fc"+"rre", "drought", "https://www.collinsdictionary.com/dictionary/german-english/durre", "noun"],
["die Messung", "measuring", "https://www.collinsdictionary.com/dictionary/german-english/messung", "noun"],
["sich decken", "to agree/correspond", "https://www.dict.cc/?s=sich+decken", "verb"],
["h"+"\u00e4"+"ufig", "frequent", "https://www.collinsdictionary.com/dictionary/german-english/haufig", "adj"],
["das Ereignis", "event", "https://www.collinsdictionary.com/dictionary/german-english/ereignis", "noun"],
["berechnen", "to estimate", "https://www.collinsdictionary.com/dictionary/german-english/berechnen", "verb"],
["jeweils", "each time", "https://www.collinsdictionary.com/dictionary/german-english/jeweils", "adv"],
["aufeinanderfolgend", "consecutive", "https://en.wiktionary.org/wiki/aufeinanderfolgend", "adj"],
["ziehen", "to move", "https://www.collinsdictionary.com/dictionary/german-english/ziehen", "verb"],
["mittlerweise", "in the meantime", "https://www.collinsdictionary.com/dictionary/german-english/mittlerweile", "adv"],
["die Schmelze", "melting", "https://www.collinsdictionary.com/dictionary/german-english/schmelze", "noun"],
["fern", "distant", "https://www.collinsdictionary.com/dictionary/german-english/fern", "adj"],
["erfassen", "to capture", "https://www.collinsdictionary.com/dictionary/german-english/erfassen", "verb"]    
]
            
var w1noun = 0;
var w1verb = 0;
var w1adv = 0;
var w1other = 0;
var w1adj = 0;
var w1total = 0;

for (i in w1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionw(event, this)');
    //change letter
    b.setAttribute('id', "w" + i);
    b.setAttribute("class",w1[i][3]);
    b.appendChild(document.createTextNode(w1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper22');
    wrapper.appendChild(b);
    if (w1[i][3] == "verb") {
        w1verb = 1 + w1verb;
        w1total = 1 + w1total;
        }
        else if (w1[i][3] == "noun") {
        w1noun = 1+w1noun;
        w1total = 1 + w1total;
        }
        else if (w1[i][3] == "adv") {
        w1adv = 1+w1adv;
        w1total = 1 + w1total;
        }
        else if (w1[i][3] == "adj") {
        w1adj = 1+w1adj;
        w1total = 1 + w1total;
        }
        else {
        w1other = 1+w1other;
        w1total = 1 + w1total;
        }
};

var w1setting = 2;
//change function name
function lang22(){
    if (w1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper22').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = w1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper22').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= w1[index][0];
    }
}
w1setting = w1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper22");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionw(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = w1[index][0];
    var english = w1[index][1];
    var link = w1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
        document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper22");
x.style.height = "auto";
}
//change function name
function o22() {
    //change wrapper name
    var x = document.getElementById("wrapper22");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var w1verbp = String(Math.floor(100* w1verb/ w1total)) + "%" ;
var w1nounp = String(Math.floor(100* w1noun/ w1total)+Math.floor(100* w1verb/ w1total)) + "%" ;
var w1adjp = String(Math.floor(100* w1adj/ w1total)+Math.floor(100* w1noun/ w1total)+Math.floor(100* w1verb/ w1total)) + "%" ;
var w1advp = String(Math.floor(100* w1adv/ w1total)+Math.floor(100* w1adj/ w1total)+Math.floor(100* w1noun/ w1total)+Math.floor(100* w1verb/ w1total)) + "%" ;

console.log(w1verbp,w1nounp,w1adjp,w1advp)

var x1 = [
["der Beamte", "officer", "https://www.collinsdictionary.com/dictionary/german-english/beamte", "noun"],
["nennen", "to mention", "https://www.collinsdictionary.com/dictionary/german-english/nennen", "verb"],
["t"+"\u00f6"+"dlich", "fatal", "https://www.collinsdictionary.com/dictionary/german-english/todlich", "adj"],
["sichtbar", "visible", "https://www.collinsdictionary.com/dictionary/german-english/sichtbar", "adj"],
["der Schwerpunkt", "centre", "https://www.collinsdictionary.com/dictionary/german-english/schwerpunkt", "noun"],
["zur"+"\u00fc"+"ckstellen", "to put aside", "https://www.collinsdictionary.com/dictionary/german-english/zuruckstellen", "verb"],
["anordnen", "to order", "https://www.collinsdictionary.com/dictionary/german-english/anordnen", "verb"],
["abstimmen mit", "to bring into agreement with", "https://www.dict.cc/?s=abstimmen", "other"],
["sto"+"\u00df"+"en", "to push", "https://www.collinsdictionary.com/dictionary/german-english/stossen", "verb"],
["\u00fc"+"berrollen", "to run over", "https://en.wiktionary.org/wiki/%C3%BCberrollen", "verb"],
["sich retten", "to escape", "https://www.collinsdictionary.com/dictionary/german-english/retten", "verb"],
["daraufhin", "as a result", "https://www.collinsdictionary.com/dictionary/german-english/daraufhin", "adv"],
["die \u00dc"+"berwachung", "surveillance", "https://www.collinsdictionary.com/dictionary/german-english/uberwachung", "noun"],
["halten f"+"\u00fc"+"r", "to regard", "https://en.wiktionary.org/wiki/halten", "verb"],
["die Einstellung", "hiring", "https://www.collinsdictionary.com/dictionary/german-english/einstellung", "noun"],
["anspannen", "to strain", "https://www.collinsdictionary.com/dictionary/german-english/anspannen", "verb"],
["sich fragen", "to wonder", "https://www.collinsdictionary.com/dictionary/german-english/fragen", "verb"],
["eigentlich", "actually", "https://www.collinsdictionary.com/dictionary/german-english/eigentlich", "adv"]
]
            
var x1noun = 0;
var x1verb = 0;
var x1adv = 0;
var x1other = 0;
var x1adj = 0;
var x1total = 0;

for (i in x1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionx(event, this)');
    //change letter
    b.setAttribute('id', "x" + i);
    b.setAttribute("class",x1[i][3]);
    b.appendChild(document.createTextNode(x1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper23');
    wrapper.appendChild(b);
    if (x1[i][3] == "verb") {
        x1verb = 1 + x1verb;
        x1total = 1 + x1total;
        }
        else if (x1[i][3] == "noun") {
        x1noun = 1+x1noun;
        x1total = 1 + x1total;
        }
        else if (x1[i][3] == "adv") {
        x1adv = 1+x1adv;
        x1total = 1 + x1total;
        }
        else if (x1[i][3] == "adj") {
        x1adj = 1+x1adj;
        x1total = 1 + x1total;
        }
        else {
        x1other = 1+x1other;
        x1total = 1 + x1total;
        }
};

var x1setting = 2;
//change function name
function lang23(){
    if (x1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper23').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = x1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper23').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= x1[index][0];
    }
}
x1setting = x1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper23");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionx(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = x1[index][0];
    var english = x1[index][1];
    var link = x1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
        document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper23");
x.style.height = "auto";
}
//change function name
function o23() {
    //change wrapper name
    var x = document.getElementById("wrapper23");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var x1verbp = String(Math.floor(100* x1verb/ x1total)) + "%" ;
var x1nounp = String(Math.floor(100* x1noun/ x1total)+Math.floor(100* x1verb/ x1total)) + "%" ;
var x1adjp = String(Math.floor(100* x1adj/ x1total)+Math.floor(100* x1noun/ x1total)+Math.floor(100* x1verb/ x1total)) + "%" ;
var x1advp = String(Math.floor(100* x1adv/ x1total)+Math.floor(100* x1adj/ x1total)+Math.floor(100* x1noun/ x1total)+Math.floor(100* x1verb/ x1total)) + "%" ;

console.log(x1verbp,x1nounp,x1adjp,x1advp)

var y1 = [
["sich versch"+"\u00e4"+"rfen", "to intensify", "https://www.collinsdictionary.com/dictionary/german-english/verscharfen", "verb"],
["bevorzugen", "to prefer", "https://www.collinsdictionary.com/dictionary/german-english/bevorzugen", "verb"],
["erbost", "infuriated", "https://en.wiktionary.org/wiki/erbost", "adj"],
["nacheinander", "one after another", "https://www.collinsdictionary.com/dictionary/german-english/nacheinander", "adv"],
["ausschlie"+"\u00df"+"en", "to exclude", "https://www.collinsdictionary.com/dictionary/german-english/ausschliessen", "verb"],
["begr"+"\u00fc"+"nden", "to justify", "https://www.collinsdictionary.com/dictionary/german-english/begrunden", "verb"],
["das Bedenken", "concern", "https://en.wiktionary.org/wiki/Bedenken", "noun"],
["vorwerfen", "to reproach", "https://en.wiktionary.org/wiki/vorwerfen", "verb"],
["verletzen", "to violate", "https://en.wiktionary.org/wiki/verletzen", "verb"],
["einstufen", "to classify", "https://en.wiktionary.org/wiki/einstufen", "verb"],
["der Zweck", "purpose", "https://www.collinsdictionary.com/dictionary/german-english/zweck", "noun"],
["heikel", "difficult", "https://www.collinsdictionary.com/dictionary/german-english/heikel", "adj"],
["ab", "as of", "https://www.collinsdictionary.com/dictionary/german-english/ab", "other"],
["sch"+"\u00e4"+"rfen", "to sharpen", "https://www.collinsdictionary.com/dictionary/german-english/scharfen", "verb"],
["einsch"+"\u00e4"+"tzen", "to assess", "https://en.wiktionary.org/wiki/einsch%C3%A4tzen", "verb"],
["die Beschr"+"\u00e4"+"nkung", "restriction", "https://www.collinsdictionary.com/dictionary/german-english/beschrankung", "noun"],
["vielmehr", "rather", "https://www.collinsdictionary.com/dictionary/german-english/vielmehr", "adv"],
["die Lieferkette", "supply chain", "https://www.dict.cc/?s=Lieferkette", "noun"],
["einberufen", "to summon", "https://www.collinsdictionary.com/dictionary/german-english/einberufen", "verb"],
["anweisen", "to order", "https://en.wiktionary.org/wiki/anweisen", "verb"],
["der Ersatz", "compensation", "https://www.collinsdictionary.com/dictionary/german-english/ersatz", "noun"],
["abschlie"+"\u00df"+"end", "conclusively", "https://www.dict.cc/?s=abschlie%C3%9Fend", "adv"],
["erschweren", "to make hard", "https://en.wiktionary.org/wiki/erschweren", "verb"],
["der Halbleiter", "semiconductor", "https://www.collinsdictionary.com/dictionary/german-english/halbleiter", "noun"],
["die Ann"+"\u00e4"+"herung", "approach", "https://www.collinsdictionary.com/dictionary/german-english/annaherung", "noun"],
["gleichwohl", "nevertheless", "https://en.wiktionary.org/wiki/gleichwohl", "adv"],
["weder...noch...", "neither...nor...", "https://www.collinsdictionary.com/dictionary/german-english/weder", "other"],
["die Beziehung", "relationship", "https://www.collinsdictionary.com/dictionary/german-english/beziehung", "noun"],
["der Vorzug", "preference", "https://www.collinsdictionary.com/dictionary/german-english/vorzug", "noun"],   
]
            
var y1noun = 0;
var y1verb = 0;
var y1adv = 0;
var y1other = 0;
var y1adj = 0;
var y1total = 0;

for (i in y1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctiony(event, this)');
    //change letter
    b.setAttribute('id', "y" + i);
    b.setAttribute("class",y1[i][3]);
    b.appendChild(document.createTextNode(y1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper24');
    wrapper.appendChild(b);
    if (y1[i][3] == "verb") {
        y1verb = 1 + y1verb;
        y1total = 1 + y1total;
        }
        else if (y1[i][3] == "noun") {
        y1noun = 1+y1noun;
        y1total = 1 + y1total;
        }
        else if (y1[i][3] == "adv") {
        y1adv = 1+y1adv;
        y1total = 1 + y1total;
        }
        else if (y1[i][3] == "adj") {
        y1adj = 1+y1adj;
        y1total = 1 + y1total;
        }
        else {
        y1other = 1+y1other;
        y1total = 1 + y1total;
        }
};

var y1setting = 2;
//change function name
function lang24(){
    if (y1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper24').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = y1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper24').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= y1[index][0];
    }
}
y1setting = y1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper24");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctiony(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = y1[index][0];
    var english = y1[index][1];
    var link = y1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
        document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper24");
x.style.height = "auto";
}
//change function name
function o24() {
    //change wrapper name
    var x = document.getElementById("wrapper24");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var y1verbp = String(Math.floor(100* y1verb/ y1total)) + "%" ;
var y1nounp = String(Math.floor(100* y1noun/ y1total)+Math.floor(100* y1verb/ y1total)) + "%" ;
var y1adjp = String(Math.floor(100* y1adj/ y1total)+Math.floor(100* y1noun/ y1total)+Math.floor(100* y1verb/ y1total)) + "%" ;
var y1advp = String(Math.floor(100* y1adv/ y1total)+Math.floor(100* y1adj/ y1total)+Math.floor(100* y1noun/ y1total)+Math.floor(100* y1verb/ y1total)) + "%" ;

console.log(y1verbp,y1nounp,y1adjp,y1advp)

var z1 = [
["das Attentat", "assassination", "https://www.collinsdictionary.com/dictionary/german-english/attentat", "noun"],
["entgehen", "to escape", "https://www.collinsdictionary.com/dictionary/german-english/entgehen", "verb"],
["sogar", "yet", "https://www.dict.cc/?s=sogar", "adv"],
["erwerben", "to acquire", "https://www.collinsdictionary.com/dictionary/german-english/erwerben", "verb"],
["ausgehen", "to get away", "https://en.wiktionary.org/wiki/ausgehen", "verb"],
["die Abgabe", "handing over", "https://www.collinsdictionary.com/dictionary/german-english/abgabe", "noun"],
["das Gef"+"\u00e4"+"ngnis", "imprisonment", "https://www.collinsdictionary.com/dictionary/german-english/gefangnis", "noun"],
["loben", "to praise", "https://www.collinsdictionary.com/dictionary/german-english/loben", "verb"],
["die Vorschrift", "regulation", "https://www.collinsdictionary.com/dictionary/german-english/vorschrift", "noun"],
["die Einwanderung", "immigration", "https://www.collinsdictionary.com/dictionary/german-english/einwanderung", "noun"],
["verkn"+"\u00fc"+"pfen", "to link", "https://www.collinsdictionary.com/dictionary/german-english/verknupfen", "verb"],
["festnehmen", "to arrest", "https://www.collinsdictionary.com/dictionary/german-english/festnehmen", "verb"],
["der Prozess", "trial (law)", "https://www.collinsdictionary.com/dictionary/german-english/prozess", "noun"],
["das Fr"+"\u00fc"+"hjahr", "spring", "https://www.collinsdictionary.com/dictionary/german-english/fruhjahr", "noun"],
["die Haftstrafe", "prison sentence", "https://www.collinsdictionary.com/dictionary/german-english/haftstrafe", "noun"]  
]
            
var z1noun = 0;
var z1verb = 0;
var z1adv = 0;
var z1other = 0;
var z1adj = 0;
var z1total = 0;

for (i in z1){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionz(event, this)');
    //change letter
    b.setAttribute('id', "z" + i);
    b.setAttribute("class",z1[i][3]);
    b.appendChild(document.createTextNode(z1[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper25');
    wrapper.appendChild(b);
    if (z1[i][3] == "verb") {
        z1verb = 1 + z1verb;
        z1total = 1 + z1total;
        }
        else if (z1[i][3] == "noun") {
        z1noun = 1+z1noun;
        z1total = 1 + z1total;
        }
        else if (z1[i][3] == "adv") {
        z1adv = 1+z1adv;
        z1total = 1 + z1total;
        }
        else if (z1[i][3] == "adj") {
        z1adj = 1+z1adj;
        z1total = 1 + z1total;
        }
        else {
        z1other = 1+z1other;
        z1total = 1 + z1total;
        }
};

var z1setting = 2;
//change function name
function lang25(){
    if (z1setting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper25').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText = z1[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper25').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(1));
            children[i].innerText= z1[index][0];
    }
}
z1setting = z1setting + 1;
//change wrapper name
var x = document.getElementById("wrapper25");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionz(event, el) {
    var char = el.id;
    var index = eval(char.slice(1));
    var german = z1[index][0];
    var english = z1[index][1];
    var link = z1[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
        document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper25");
x.style.height = "auto";
}
//change function name
function o25() {
    //change wrapper name
    var x = document.getElementById("wrapper25");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var z1verbp = String(Math.floor(100* z1verb/ z1total)) + "%" ;
var z1nounp = String(Math.floor(100* z1noun/ z1total)+Math.floor(100* z1verb/ z1total)) + "%" ;
var z1adjp = String(Math.floor(100* z1adj/ z1total)+Math.floor(100* z1noun/ z1total)+Math.floor(100* z1verb/ z1total)) + "%" ;
var z1advp = String(Math.floor(100* z1adv/ z1total)+Math.floor(100* z1adj/ z1total)+Math.floor(100* z1noun/ z1total)+Math.floor(100* z1verb/ z1total)) + "%" ;

console.log(z1verbp,z1nounp,z1adjp,z1advp)

var aa = [
["weitergeben", "to pass on", "https://www.collinsdictionary.com/dictionary/german-english/weitergeben", "verb"],
["zielen auf", "to be aimed at", "https://www.collinsdictionary.com/dictionary/german-english/zielen", "verb"],
["leiten", "to manage", "https://en.wiktionary.org/wiki/leiten", "verb"],
["Kosten umlegen", "to apportion", "https://www.dict.cc/?s=umlegen", "verb"],
["etw weiterreichen", "to pass sth along", "https://www.dict.cc/?s=weiterreichen", "verb"],
["t"+"\u00e4"+"tigen", "to effect", "https://en.wiktionary.org/wiki/t%C3%A4tigen", "verb"],
["momentan", "at the moment", "https://www.collinsdictionary.com/dictionary/german-english/momentan", "adj"],
["konkret", "specifically", "https://www.dict.cc/?s=konkret", "adv"],
["der Nachteil", "disadvantage", "https://www.collinsdictionary.com/dictionary/german-english/nachteil", "noun"],
["die Darstellung", "account", "https://www.collinsdictionary.com/dictionary/german-english/darstellung", "noun"],
["\u00fc"+"bertragen", "to pass on", "https://www.collinsdictionary.com/dictionary/german-english/ubertragen", "verb"],
["r"+"\u00fc"+"ckwirkend", "retrospective (law)", "https://www.collinsdictionary.com/dictionary/german-english/ruckwirkend", "adj"],
["die Bestrebung", "endeavour", "https://www.collinsdictionary.com/dictionary/german-english/bestrebung", "noun"],
["vertagen", "to postpone", "https://www.collinsdictionary.com/dictionary/german-english/vertagen", "verb"],
["der Umsatz", "turnover", "https://www.collinsdictionary.com/dictionary/german-english/umsatz", "noun"],
["treffen", "to hit", "https://www.collinsdictionary.com/dictionary/german-english/treffen", "verb"],
["die Verlagerung", "relocation", "https://en.wiktionary.org/wiki/Verlagerung", "noun"],
["geschickt", "skilful", "https://www.collinsdictionary.com/dictionary/german-english/geschickt", "adj"],
["umleiten", "to redirect", "https://en.wiktionary.org/wiki/umleiten", "verb"],
["betreffen", "to concern", "https://en.wiktionary.org/wiki/betreffen", "verb"],
["der Zoll", "tariff", "https://www.dict.cc/?s=Zoll", "noun"],
["andeuten", "to suggest", "https://en.wiktionary.org/wiki/andeuten", "verb"],
["einstufen", "to classify", "https://www.collinsdictionary.com/dictionary/german-english/einstufen", "verb"],
["das Vorgehen", "action", "https://www.collinsdictionary.com/dictionary/german-english/vorgehen", "noun"],
["nachvollziehbar", "comprehensible", "https://www.collinsdictionary.com/dictionary/german-english/nachvollziehbar", "adj"],
["der Zweig", "branch", "https://www.collinsdictionary.com/dictionary/german-english/zweig", "noun"],
["anstreben", "to pursue", "https://en.wiktionary.org/wiki/anstreben", "verb"],
["die Einigung", "agreement", "https://www.collinsdictionary.com/dictionary/german-english/einigung", "noun"],
["die Abgabe", "tax", "https://www.collinsdictionary.com/dictionary/german-english/abgabe", "noun"],
["sich richten gegen", "to be directed at", "https://en.wiktionary.org/wiki/richten", "verb"],
["gezielt", "specifically", "https://www.collinsdictionary.com/dictionary/german-english/gezielt", "adj"],
["durchf"+"\u00fc"+"hren", "to conduct", "https://www.dict.cc/?s=durchf%C3%BChren", "verb"]   
]
            
var aanoun = 0;
var aaverb = 0;
var aaadv = 0;
var aaother = 0;
var aaadj = 0;
var aatotal = 0;

for (i in aa){
    var b = document.createElement('button');
    //change function name
    b.setAttribute("onclick", 'myFunctionaa(event, this)');
    //change letter
    b.setAttribute('id', "aa" + i);
    b.setAttribute("class",aa[i][3]);
    b.appendChild(document.createTextNode(aa[i][0]));
    //change wrapper name
    var wrapper = document.getElementById('wrapper26');
    wrapper.appendChild(b);
    if (aa[i][3] == "verb") {
        aaverb = 1 + aaverb;
        aatotal = 1 + aatotal;
        }
        else if (aa[i][3] == "noun") {
        aanoun = 1+aanoun;
        aatotal = 1 + aatotal;
        }
        else if (aa[i][3] == "adv") {
        aaadv = 1+aaadv;
        aatotal = 1 + aatotal;
        }
        else if (aa[i][3] == "adj") {
        aaadj = 1+aaadj;
        aatotal = 1 + aatotal;
        }
        else {
        aaother = 1+aaother;
        aatotal = 1 + aatotal;
        }
};

var aasetting = 2;
//change function name
function lang26(){
    if (aasetting  % 2 === 0){
        // change wrapper name 
        var children = [].slice.call(document.getElementById('wrapper26').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(2));
            children[i].innerText = aa[index][1];
        }
    }
    else{
        // change wrapper name
        var children = [].slice.call(document.getElementById('wrapper26').getElementsByTagName('*'),0);
        for (i = 0; i<children.length; i++){
            var char = children[i].id;
            var index = parseInt(char.slice(2));
            children[i].innerText= aa[index][0];
    }
}
aasetting = aasetting + 1;
//change wrapper name
var x = document.getElementById("wrapper26");
if (x.style.height) {
    x.style.height = "auto";
} 
else {
    return null;
}
}
//change function name
function myFunctionaa(event, el) {
    var char = el.id;
    var index = eval(char.slice(2));
    var german = aa[index][0];
    var english = aa[index][1];
    var link = aa[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
        document.getElementById(char).innerText = german;
    }}
//change wrapper name
var x = document.getElementById("wrapper26");
x.style.height = "auto";
}
//change function name
function o26() {
    //change wrapper name
    var x = document.getElementById("wrapper26");
    if (x.style.height) {
        x.style.height = null;
    } 
    else {
        x.style.height = x.scrollHeight + "px";
    }
}

var aaverbp = String(Math.floor(100* aaverb/ aatotal)) + "%" ;
var aanounp = String(Math.floor(100* aanoun/ aatotal)+Math.floor(100* aaverb/ aatotal)) + "%" ;
var aaadjp = String(Math.floor(100* aaadj/ aatotal)+Math.floor(100* aanoun/ aatotal)+Math.floor(100* aaverb/ aatotal)) + "%" ;
var aaadvp = String(Math.floor(100* aaadv/ aatotal)+Math.floor(100* aaadj/ aatotal)+Math.floor(100* aanoun/ aatotal)+Math.floor(100* aaverb/ aatotal)) + "%" ;

console.log(aaverbp,aanounp,aaadjp,aaadvp)


var ab = [
    ["ersparen", "to save", "https://www.dict.cc/?s=ersparen", "verb"],
    ["Schritte", "steps", "https://www.dict.cc/?s=schritte", "noun"],
    ["der Vorwurf", "accusation", "https://www.dict.cc/?s=Vorwurf&failed_kw=Vorwurfs", "noun"],
    ["die Hinterziehung", "evasion", "https://www.dict.cc/?s=hinterziehung", "noun"],
    ["das Abkommen", "agreement", "https://www.dict.cc/?s=abkommen", "noun"],
    ["etw. bel"+"\u00e4"+"uft sich auf", "sth. totals (money)", "https://www.dict.cc/?s=bel%C3%A4uft", "other"],
    ["umgerechnet", "equivalent", "https://en.wiktionary.org/wiki/umgerechnet", "adj"],
    ["der Fahnder", "investigator", "https://en.wiktionary.org/wiki/Fahnder", "noun"],
    ["w"+"\u00e4"+"hrend", "whereas", "https://www.dict.cc/?s=w%C3%A4hrend", "other"],
    ["Erl"+"\u00f6"+"se", "income", "https://www.dict.cc/?s=erl%C3%B6se", "noun"],
    ["verbuchen", "to enter (data)", "https://en.wiktionary.org/wiki/verbuchen", "verb"],
    ["einleiten", "to initiate sth.", "https://www.dict.cc/?s=einleiten", "verb"],
    ["im Zuge", "in the course of", "https://en.wiktionary.org/wiki/im_Zuge#German", "other"],
    ["durchsuchen", "to search", "https://en.wiktionary.org/wiki/durchsuchen", "verb"],
    ["etw. ein Ende setzen", "to put an end to sth.", "https://www.dict.cc/?s=setzen+End", "other"],
    ["im Hinblick auf ", "with regard to", "https://www.dict.cc/?s=hinblick", "other"],
    ["die Angelegenheit", "matter/issue", "https://en.wiktionary.org/wiki/Angelegenheit", "noun"],
    ["das Werkzeug", "tool", "https://en.wiktionary.org/wiki/Werkzeug#German", "noun"],
    ["\u00e4"+"hnlich gelagert", "similar", "https://www.collinsdictionary.com/dictionary/german-english/gelagert", "adj"],
    ["beilegen", "to resolve (dispute)", "https://en.wiktionary.org/wiki/beilegen", "verb"],
    ["nachzahlen", "to pay extra", "https://www.collinsdictionary.com/dictionary/german-english/nachzahlen_1", "verb"]
]
                
    var abnoun = 0;
    var abverb = 0;
    var abadv = 0;
    var abother = 0;
    var abadj = 0;
    var abtotal = 0;
    
    for (i in ab){
        var b = document.createElement('button');
        //change function name
        b.setAttribute("onclick", 'myFunctionab(event, this)');
        //change letter
        b.setAttribute('id', "ab" + i);
        b.setAttribute("class",ab[i][3]);
        b.appendChild(document.createTextNode(ab[i][0]));
        //change wrapper name
        var wrapper = document.getElementById('wrapper27');
        wrapper.appendChild(b);
        if (ab[i][3] == "verb") {
            abverb = 1 + abverb;
            abtotal = 1 + abtotal;
            }
            else if (ab[i][3] == "noun") {
            abnoun = 1+abnoun;
            abtotal = 1 + abtotal;
            }
            else if (ab[i][3] == "adv") {
            abadv = 1+abadv;
            abtotal = 1 + abtotal;
            }
            else if (ab[i][3] == "adj") {
            abadj = 1+abadj;
            abtotal = 1 + abtotal;
            }
            else {
            abother = 1+abother;
            abtotal = 1 + abtotal;
            }
    };
    
    var absetting = 2;
    //change function name
    function lang27(){
        if (absetting  % 2 === 0){
            // change wrapper name 
            var children = [].slice.call(document.getElementById('wrapper27').getElementsByTagName('*'),0);
            for (i = 0; i<children.length; i++){
                var char = children[i].id;
                var index = parseInt(char.slice(2));
                children[i].innerText = ab[index][1];
            }
        }
        else{
            // change wrapper name
            var children = [].slice.call(document.getElementById('wrapper27').getElementsByTagName('*'),0);
            for (i = 0; i<children.length; i++){
                var char = children[i].id;
                var index = parseInt(char.slice(2));
                children[i].innerText= ab[index][0];
        }
    }
    absetting = absetting + 1;
    //change wrapper name
    var x = document.getElementById("wrapper27");
    if (x.style.height) {
        x.style.height = "auto";
    } 
    else {
        return null;
    }
    }
    //change function name
    function myFunctionab(event, el) {
        var char = el.id;
        var index = eval(char.slice(2));
        var german = ab[index][0];
        var english = ab[index][1];
        var link = ab[index][2];
        if (event.shiftKey) {
            window.open(link, "_blank");
        }
        else if(event.ctrlKey) {
            document.getElementById(char).remove();
        }
        else {
        if (document.getElementById(char).innerText == german) 
        {
            document.getElementById(char).innerText = english;
        }
        else 
        {
            document.getElementById(char).innerText = german;
        }}
    //change wrapper name
    var x = document.getElementById("wrapper27");
    x.style.height = "auto";
    }
    //change function name
    function o27() {
        //change wrapper name
        var x = document.getElementById("wrapper27");
        if (x.style.height) {
            x.style.height = null;
        } 
        else {
            x.style.height = x.scrollHeight + "px";
        }
    }
    
    var abverbp = String(Math.floor(100* abverb/ abtotal)) + "%" ;
    var abnounp = String(Math.floor(100* abnoun/ abtotal)+Math.floor(100* abverb/ abtotal)) + "%" ;
    var abadjp = String(Math.floor(100* abadj/ abtotal)+Math.floor(100* abnoun/ abtotal)+Math.floor(100* abverb/ abtotal)) + "%" ;
    var abadvp = String(Math.floor(100* abadv/ abtotal)+Math.floor(100* abadj/ abtotal)+Math.floor(100* abnoun/ abtotal)+Math.floor(100* abverb/ abtotal)) + "%" ;
    
    console.log(abverbp,abnounp,abadjp,abadvp)

// "+"\u00fc"+"
var ac = [
["schrumpfen", "to shrink", "https://en.wiktionary.org/wiki/schrumpfen", "verb"],
["erwarten", "to expect", "https://en.wiktionary.org/wiki/erwarten", "verb"],
["der Abschwung","downturn","https://en.wiktionary.org/wiki/Abschwung","noun"],
["abermals","again","https://www.dict.cc/?s=abermals","adv"],
["der R"+"\u00fc"+"ckgang","decline","https://www.dict.cc/?s=R%C3%BCckgang","noun"],
["das Bruttoinlandsprodukt","gross domestic product","https://en.wiktionary.org/wiki/Bruttoinlandsprodukt","noun"],
["zitieren","to cite/quote","https://en.wiktionary.org/wiki/zitieren","verb"],
["die Wirtschaftsleistung","economic output","https://www.dict.cc/?s=Wirtschaftsleistung","noun"],
["\u00d6"+"konomen","economists","https://www.dict.cc/?s=%C3%96konomen","noun"],
["hintereinander","consecutively","https://en.wiktionary.org/wiki/hintereinander","adv"],
["hervorheben","to emphasize","https://en.wiktionary.org/wiki/hervorheben#German","verb"],
["Binnen-","domestic","https://www.dict.cc/?s=Binnen","other"],
["die Konjunktur","economic situation","https://en.wiktionary.org/wiki/Konjunktur","noun"],
["auseinander","apart","https://en.wiktionary.org/wiki/auseinander","adv"],
["kurzfristig","short-term","https://en.wiktionary.org/wiki/kurzfristig","adj"],
["der Strich","line","https://en.wiktionary.org/wiki/Strich","noun"],
["das Plus","increase","https://en.wiktionary.org/wiki/Plus","noun"],
["\u00fc"+"bertreiben","to exaggerate","https://en.wiktionary.org/wiki/%C3%BCbertreiben#German","verb"],
["das Anliegen","concern/request","https://en.wiktionary.org/wiki/Anliegen","noun"],
["die Sanierung","renovation","https://en.wiktionary.org/wiki/Sanierung","noun"],
["fortsetzen","to continue with something","https://en.wiktionary.org/wiki/fortsetzen","verb"]
]
                    
        var acnoun = 0;
        var acverb = 0;
        var acadv = 0;
        var acother = 0;
        var acadj = 0;
        var actotal = 0;
        
        for (i in ac){
            var b = document.createElement('button');
            //change function name
            b.setAttribute("onclick", 'myFunctionac(event, this)');
            //change letter
            b.setAttribute('id', "ac" + i);
            b.setAttribute("class",ac[i][3]);
            b.appendChild(document.createTextNode(ac[i][0]));
            //change wrapper name
            var wrapper = document.getElementById('wrapper28');
            wrapper.appendChild(b);
            if (ac[i][3] == "verb") {
                acverb = 1 + acverb;
                actotal = 1 + actotal;
                }
                else if (ac[i][3] == "noun") {
                acnoun = 1+acnoun;
                actotal = 1 + actotal;
                }
                else if (ac[i][3] == "adv") {
                acadv = 1+acadv;
                actotal = 1 + actotal;
                }
                else if (ac[i][3] == "adj") {
                acadj = 1+acadj;
                actotal = 1 + actotal;
                }
                else {
                acother = 1+acother;
                actotal = 1 + actotal;
                }
        };
        
        var acsetting = 2;
        //change function name
        function lang28(){
            if (acsetting  % 2 === 0){
                // change wrapper name 
                var children = [].slice.call(document.getElementById('wrapper28').getElementsByTagName('*'),0);
                for (i = 0; i<children.length; i++){
                    var char = children[i].id;
                    var index = parseInt(char.slice(2));
                    children[i].innerText = ac[index][1];
                }
            }
            else{
                // change wrapper name
                var children = [].slice.call(document.getElementById('wrapper28').getElementsByTagName('*'),0);
                for (i = 0; i<children.length; i++){
                    var char = children[i].id;
                    var index = parseInt(char.slice(2));
                    children[i].innerText= ac[index][0];
            }
        }
        acsetting = acsetting + 1;
        //change wrapper name
        var x = document.getElementById("wrapper28");
        if (x.style.height) {
            x.style.height = "auto";
        } 
        else {
            return null;
        }
        }
        //change function name
        function myFunctionac(event, el) {
            var char = el.id;
            var index = eval(char.slice(2));
            var german = ac[index][0];
            var english = ac[index][1];
            var link = ac[index][2];
            if (event.shiftKey) {
                window.open(link, "_blank");
            }
            else if(event.ctrlKey) {
                document.getElementById(char).remove();
            }
            else {
            if (document.getElementById(char).innerText == german) 
            {
                document.getElementById(char).innerText = english;
            }
            else 
            {
                document.getElementById(char).innerText = german;
            }}
        //change wrapper name
        var x = document.getElementById("wrapper28");
        x.style.height = "auto";
        }
        //change function name
        function o28() {
            //change wrapper name
            var x = document.getElementById("wrapper28");
            if (x.style.height) {
                x.style.height = null;
            } 
            else {
                x.style.height = x.scrollHeight + "px";
            }
        }
        
        var acverbp = String(Math.floor(100* acverb/ actotal)) + "%" ;
        var acnounp = String(Math.floor(100* acnoun/ actotal)+Math.floor(100* acverb/ actotal)) + "%" ;
        var acadjp = String(Math.floor(100* acadj/ actotal)+Math.floor(100* acnoun/ actotal)+Math.floor(100* acverb/ actotal)) + "%" ;
        var acadvp = String(Math.floor(100* acadv/ actotal)+Math.floor(100* acadj/ actotal)+Math.floor(100* acnoun/ actotal)+Math.floor(100* acverb/ actotal)) + "%" ;
        
        console.log(acverbp,acnounp,acadjp,acadvp)




var massivelist = a1.concat(b1,c1,d1,e1,f1,g1,h1,i1,j1,k1,l1,m1,n1,p1,q1,r1,s1,t1,u1,v1,w1,x1,y1,z1,aa,ab,ac);

function inc(a,search){
    var b = a.toUpperCase();
    var c = search.toUpperCase(); // schaffers s is converted to SS here
    if (b.includes(c)){
        return true
    }
    else {
        return false
    }

}
var verbsetting= 1;
function verbs(){
    var myNode = document.getElementById("currentones");
    myNode.style.height = "auto";
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        }
    for (i=0; i<massivelist.length; i++){
        if (massivelist[i][3]== "verb"){
            c = document.getElementById("currentones");
               
                var b = document.createElement('button');
                //change function name
                b.setAttribute("onclick", 'myFunctionmassive(event, this)');
                //change letter
                b.setAttribute('id', "massive" + i);
                b.setAttribute("class",massivelist[i][3]);
                if (verbsetting % 2 === 0){
                b.appendChild(document.createTextNode(massivelist[i][0]));
                }
                else {
                    b.appendChild(document.createTextNode(massivelist[i][1]));
                }
                //change wrapper name
                
                c.appendChild(b);
        }

    }
verbsetting = verbsetting +1 ;
}
var nounsetting = 1;
function nouns(){
    var myNode = document.getElementById("currentones");
    myNode.style.height = "auto";
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        }
    for (i=0; i<massivelist.length; i++){
        if (massivelist[i][3]== "noun"){
            c = document.getElementById("currentones");
               
                var b = document.createElement('button');
                //change function name
                b.setAttribute("onclick", 'myFunctionmassive(event, this)');
                //change letter
                b.setAttribute('id', "massive" + i);
                b.setAttribute("class",massivelist[i][3]);
                if (nounsetting % 2 === 0){
                    b.appendChild(document.createTextNode(massivelist[i][0]));
                    }
                    else {
                        b.appendChild(document.createTextNode(massivelist[i][1]));
                    }
                //change wrapper name
                
                c.appendChild(b);
        }

    }
nounsetting = nounsetting + 1;
}
var adjsetting = 1;
function adjectives(){
    var myNode = document.getElementById("currentones");
    myNode.style.height = "auto";
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        }
    for (i=0; i<massivelist.length; i++){
        if (massivelist[i][3]== "adj"){
            c = document.getElementById("currentones");
               
                var b = document.createElement('button');
                //change function name
                b.setAttribute("onclick", 'myFunctionmassive(event, this)');
                //change letter
                b.setAttribute('id', "massive" + i);
                b.setAttribute("class",massivelist[i][3]);
                if (adjsetting % 2 === 0){
                    b.appendChild(document.createTextNode(massivelist[i][0]));
                    }
                    else {
                        b.appendChild(document.createTextNode(massivelist[i][1]));
                    }
                
                c.appendChild(b);
        }

    }
adjsetting = adjsetting +1;
}
var advsetting = 1;
function adverbs(){
    var myNode = document.getElementById("currentones");
    myNode.style.height = "auto";
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        }
    for (i=0; i<massivelist.length; i++){
        if (massivelist[i][3]== "adv"){
            c = document.getElementById("currentones");
               
                var b = document.createElement('button');
                //change function name
                b.setAttribute("onclick", 'myFunctionmassive(event, this)');
                //change letter
                b.setAttribute('id', "massive" + i);
                b.setAttribute("class",massivelist[i][3]);
                if (advsetting % 2 === 0){
                    b.appendChild(document.createTextNode(massivelist[i][0]));
                    }
                    else {
                        b.appendChild(document.createTextNode(massivelist[i][1]));
                    }
                
                c.appendChild(b);
        }

    }
advsetting = advsetting +1 ;
}

function removal(){
    var myNode = document.getElementById("currentones");
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        }
    document.getElementById("autoid").value = "";
}



var othersetting = 1;
function other(){
    var myNode = document.getElementById("currentones");
        myNode.style.height = "auto";
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        }
    for (i=0; i<massivelist.length; i++){
        if (massivelist[i][3]== "other"){
            c = document.getElementById("currentones");
               
                var b = document.createElement('button');
                //change function name
                b.setAttribute("onclick", 'myFunctionmassive(event, this)');
                //change letter
                b.setAttribute('id', "massive" + i);
                b.setAttribute("class",massivelist[i][3]);
                if (othersetting % 2 === 0){
                    b.appendChild(document.createTextNode(massivelist[i][0]));
                    }
                    else {
                        b.appendChild(document.createTextNode(massivelist[i][1]));
                    }
                
                c.appendChild(b);
        }

    }
othersetting = othersetting +1 ;
}



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


 function wordgen(){
     place = massivelist[getRandomInt(massivelist.length)][getRandomInt(2)];
     document.getElementById("autoid").placeholder = place;
 }

function searching(){
    var searcher = document.getElementById("autoid");
    var myVar = setInterval(wordgen,1000);
    searcher.addEventListener("input", function(){
        var myNode = document.getElementById("currentones");
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        }
        var enteredtext = searcher.value;
        if (searcher.value == ""){
            document.getElementById("currentones").style.height = 0;
        }
        else{
            document.getElementById("currentones").style.height = "auto";

        }
        var counter = 0;
        for (i=0; i<massivelist.length; i++){
            if ((inc(massivelist[i][0],enteredtext) == true) ){ //    && (counter<200) ... after true)
                c = document.getElementById("currentones");
                var b = document.createElement('button');
                //change function name
                b.setAttribute("onclick", 'myFunctionmassive(event, this)');
                //change letter
                b.setAttribute('id', "massive" + i);
                b.setAttribute("class",massivelist[i][3]);
                b.appendChild(document.createTextNode(massivelist[i][0]));
                //change wrapper name
                c.appendChild(b);
                counter = counter + 1;
            }
            else if ((inc(massivelist[i][1],enteredtext) == true) ){ //    && (counter<200) ... after true)
                c = document.getElementById("currentones");
                var b = document.createElement('button');
                //change function name
                b.setAttribute("onclick", 'myFunctionmassive(event, this)');
                //change letter
                b.setAttribute('id', "massive" + i);
                b.setAttribute("class",massivelist[i][3]);
                b.appendChild(document.createTextNode(massivelist[i][1]));
                //change wrapper name
                
                c.appendChild(b);
                counter = counter + 1;
                
            }
        }
        
        
    })
}

// function isEmpty(str){
//     return !str.replace(/\s+/, '').length;
// }

function myFunctionmassive(event, el) {
    var char = el.id;
    var index = eval(char.slice(7));
    var german = massivelist[index][0];
    var english = massivelist[index][1];
    var link = massivelist[index][2];
    if (event.shiftKey) {
        window.open(link, "_blank");
    }
    else if(event.ctrlKey) {
        document.getElementById(char).remove();
    }
    else {
    if (document.getElementById(char).innerText == german) 
    {
        document.getElementById(char).innerText = english;
    }
    else 
    {
        document.getElementById(char).innerText = german;
    }}

}

searching()
