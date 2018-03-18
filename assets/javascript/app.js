
// Array of questions
var q = ["Which US state is named on the label of a Jack Daniels bottle?<br /><br />", 
        "What soft drink began in Morison's drug store, in Waco Texas, in 1885?<br /><br />", 
        "What US state drinks the most alcohol per person?<br /><br />", 
        "Champagne is made with what variety of grapes?<br /><br />", 
        "Triple sec and lime make what cocktail?<br /><br />",]


// Array of Answers
var a1 = ["<button class=buttons002 onclick=q1c()>Tennesse</button>",
          "<button class=buttons002 onclick=q2i()>Coca-Cola</button>", ];

var a2 = ["<button class=buttons002 onclick=q1i()>Florida</button>", 
          "<button class=buttons002 onclick=q2i()>Pepsi</button>"];

var a3 = ["<button class=buttons002 onclick=q1i()>New York</button>", 
          "<button class=buttons002 onclick=q2c()>Dr. Pepper</button>"];

var a4 = ["<button class=buttons002 onclick=q1i()>North Carolina</button>", 
          "<button class=buttons002 onclick=q2i()>Mountain Dew</button>"];


// Array of response on Correct Answers
var c = ["Correct!!! Jack Daniel's is a brand of Tennessee whiskey and the top selling American whiskey in the world. It is produced in Lynchburg, Tennessee", 
        "You're Right!!! In 1885, in Waco, Texas, a young pharmacist called Charles Alderton invented the soft drink <strong>Dr Pepper</strong>, a carbonated soft drink marketed as having a unique flavor. Alderton worked at a place called Morrison's Old Corner Drug Store and carbonated drinks were served at the soda fountain", 
        "Correct", 
        "Correct", 
        "Correct",];


// Array of response on Incorrect Answers
var i = ["Incorrect. The Right answer is Tennessee.", 
        "Incorrect. Actually, Dr. Pepper was the soft drink served at Morrison's Old Corner Drug Store.", 
        "Incorrect", 
        "Incorrect", 
        "Incorrect", 
        "Incorrect",];

// Score function
var n = 0;
n++
var s = 0;
s++

// Questions Function
function begin001 () {
    disappear001.innerHTML = "";
    message001.innerHTML = "";
    question001.innerHTML = q[0];
    option001.innerHTML = a1[0];
    option002.innerHTML = a2[0];
    option003.innerHTML = a3[0];
    option004.innerHTML = a4[0];
    number001.innerHTML = n++;
}

function q1c() {
    answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next Question</button>";
    score001.innerHTML = s++;
}

function q1i() {
    answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next Question</button>";
}

function new002() {
    question001.innerHTML = q[1];
    option001.innerHTML = a1[1];
    option002.innerHTML = a2[1];
    option003.innerHTML = a3[1];
    option004.innerHTML = a4[1];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q2c() {
    answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next Question</button>";
    score001.innerHTML = s++;
}

function q2i() {
    answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next Question</button>";
}

// adding more functions questions same as q1c and q1i
// on the last question on next001 button we add "End of Quiz"

function end001() {
    disappear001.innerHTML = "End of Quiz.";
    question001.innerHTML = "";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    number001.innerHTML = "<div id text001>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>" + "</div>";
    answer001.innerHTML = "";
}

function repeat001() {
    location.reload();
}

