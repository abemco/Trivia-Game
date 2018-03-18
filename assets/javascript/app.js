
// Array of questions
var q = ["Which US state is named on the label of a Jack Daniels bottle?<br /><br />", 
        "What soft drink began in Morison's drug store, in Waco Texas, in 1885?<br /><br />", 
        "What US state drinks the most alcohol per person?<br /><br />", 
        "Champagne is made with what variety of grapes?<br /><br />", 
        "Triple sec, Tequila and lime make what cocktail?<br /><br />",]


// Array of Answers
var a1 = ["<button class=buttons002 onclick=q1c()>Tennesse</button>",
          "<button class=buttons002 onclick=q2i()>Coca-Cola</button>",
          "<button class=buttons002 onclick=q3i()>Alaska</button>",
          "<button class=buttons002 onclick=q4i()>Moscato</button>",
          "<button class=buttons002 onclick=q5i()>Cosmopolitan</button>", ];

var a2 = ["<button class=buttons002 onclick=q1i()>Florida</button>", 
          "<button class=buttons002 onclick=q2i()>Pepsi</button>",
          "<button class=buttons002 onclick=q3i()>California</button>",
          "<button class=buttons002 onclick=q4i()>Chenin Blanc</button>",
          "<button class=buttons002 onclick=q5c()>Margarita</button>", ];

var a3 = ["<button class=buttons002 onclick=q1i()>New York</button>", 
          "<button class=buttons002 onclick=q2c()>Dr. Pepper</button>",
          "<button class=buttons002 onclick=q3c()>New Hempshire</button>",
          "<button class=buttons002 onclick=q4i()>Sauvignon Blanc</button>",
          "<button class=buttons002 onclick=q5i()>Mojito</button>",];

var a4 = ["<button class=buttons002 onclick=q1i()>North Carolina</button>", 
          "<button class=buttons002 onclick=q2i()>Mountain Dew</button>",
          "<button class=buttons002 onclick=q3i()>Texas</button>",
          "<button class=buttons002 onclick=q4c()>Chardonnay</button>",
          "<button class=buttons002 onclick=q5i()>Caipirinha</button>", ];


// Array of response on Correct Answers
var c = ["Correct!!! Jack Daniel's is a brand of Tennessee whiskey and the top selling American whiskey in the world. It is produced in Lynchburg, Tennessee", 
        "You're Right!!! In 1885, in Waco, Texas, a young pharmacist called Charles Alderton invented the soft drink <strong>Dr Pepper</strong>, a carbonated soft drink marketed as having a unique flavor. Alderton worked at a place called Morrison's Old Corner Drug Store and carbonated drinks were served at the soda fountain", 
        "That's right, Reports say that in 2014 a total alcohol consumed per capita in NH was 4,680 gallons.", 
        "oui, vous avez raison, Chardonnay grapes grown in the Champagne region of France are used to produce the sparkling wine mostly know as Champagne.",  
        "Arriba. You're right. Margarita is a cocktail consisting of tequila, triple sec, and lime juice often served with salt on the rim of the glass and it was created in Mexico in the late 1930's.",];


// Array of response on Incorrect Answers
var i = ["Incorrect. The Right answer is Tennessee.", 
        "Incorrect. Actually, Dr. Pepper was the soft drink served at Morrison's Old Corner Drug Store.", 
        "If you're not from New Hampshire you didn't drink too much. In 2014 about 1,860 gallons of Beer was consumed per capita in NH alone", 
        "Sorry the correct answer is Chardonnay", 
        "Perdona-me. The correct drink is Margarita!!!"];


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

function new003() {
    question001.innerHTML = q[2];
    option001.innerHTML = a1[2];
    option002.innerHTML = a2[2];
    option003.innerHTML = a3[2];
    option004.innerHTML = a4[2];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q3c() {
    answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new004()>Next Question</button>";
    score001.innerHTML = s++;
}

function q3i() {
    answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new004()>Next Question</button>";
}


function new004() {
    question001.innerHTML = q[3];
    option001.innerHTML = a1[3];
    option002.innerHTML = a2[3];
    option003.innerHTML = a3[3];
    option004.innerHTML = a4[3];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q4c() {
    answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new005()>Next Question</button>";
    score001.innerHTML = s++;
}

function q4i() {
    answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new005()>Next Question</button>";
}


function new005() {
    question001.innerHTML = q[4];
    option001.innerHTML = a1[4];
    option002.innerHTML = a2[4];
    option003.innerHTML = a3[4];
    option004.innerHTML = a4[4];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q5c() {
    answer001.innerHTML = "<div id=green001>" + c[4] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>Next Question</button>";
    score001.innerHTML = s++;
}

function q5i() {
    answer001.innerHTML = "<div id=red001>" + i[4] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
}

// End function
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

// Repeat function
function repeat001() {
    location.reload();
}

