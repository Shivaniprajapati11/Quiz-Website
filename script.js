let subject = localStorage.getItem("subject");
let index = parseInt(localStorage.getItem("index")) || 0;
let score = parseInt(localStorage.getItem("score")) || 0;

document.getElementById("subject").innerText = subject + " Quiz";

const questions = {

"HTML": [
{q:"HTML stands for?", options:["Hyper Text Markup Language","High Text","Tool","None"], ans:0},
{q:"Tag for paragraph?", options:["&lt;p&gt;","&lt;h1&gt;","&lt;div&gt;","&lt;span&gt;"], ans:0},
{q:"Image tag?", options:["&lt;img&gt;","&lt;pic&gt;","&lt;src&gt;","&lt;image&gt;"], ans:0},
{q:"Link tag?", options:["&lt;a&gt;","&lt;link&gt;","&lt;href&gt;","&lt;url&gt;"], ans:0},
{q:"Heading tag?", options:["&lt;h1&gt;","&lt;p&gt;","&lt;div&gt;","&lt;span&gt;"], ans:0},
{q:"List tag?", options:["&lt;ul&gt;","&lt;li&gt;","All","&lt;ol&gt;"], ans:2},
{q:"File extension?", options:[".html",".css",".js",".php"], ans:0}
],

"CSS": [
{q:"CSS stands for?", options:["Cascading Style Sheets","Creative Style System","Computer Style Sheets","None"], ans:0},
{q:"Which property changes text color?", options:["color","font-color","text-color","bg-color"], ans:0},
{q:"Which property is used for background color?", options:["background-color","color","bg","style"], ans:0},
{q:"Which CSS property controls text size?", options:["font-size","text-size","size","font"], ans:0},
{q:"Which is correct CSS syntax?", options:["selector { property: value; }","{ property = value }","style = {}","none"], ans:0},
{q:"CSS is used for?", options:["Designing web pages","Database","Programming logic","Server"], ans:0},
{q:"Which property adds space inside element?", options:["padding","margin","spacing","border"], ans:0}
],

"JavaScript": [
{q:"JavaScript is used for?", options:["Web interactivity","Database","Operating system","Hardware"], ans:0},
{q:"Which keyword is used to declare variable?", options:["let","var","const","all"], ans:3},
{q:"Which function shows output in console?", options:["console.log()","print()","echo()","write()"], ans:0},
{q:"Which symbol is used for strict equality?", options:["===","==","=","!="], ans:0},
{q:"JavaScript runs in?", options:["Browser","Server only","Compiler","Database"], ans:0},
{q:"Which is a loop in JS?", options:["for","while","do-while","all"], ans:3},
{q:"Which event runs on click?", options:["onclick","onhover","onpress","onload"], ans:0}
],

"DBMS": [
{q:"DBMS full form?", options:["Database Management System","Data Basic Management System","Digital Management System","None"], ans:0},
{q:"SQL is used for?", options:["Database queries","Designing","Styling","Networking"], ans:0},
{q:"Primary key is?", options:["Unique value","Duplicate value","Null value","Random value"], ans:0},
{q:"Which command is used to fetch data?", options:["SELECT","INSERT","DELETE","UPDATE"], ans:0},
{q:"Table contains?", options:["Rows and Columns","Files","Folders","Objects"], ans:0},
{q:"Foreign key is used for?", options:["Relation between tables","Delete data","Insert data","Style data"], ans:0},
{q:"DBMS is used to?", options:["Store and manage data","Design website","Run programs","Create UI"], ans:0}
],

"JAVA": [
{q:"Java is?", options:["Object Oriented Language","Database","Design tool","OS"], ans:0},
{q:"JVM full form?", options:["Java Virtual Machine","Java Variable Method","Joint Virtual Machine","None"], ans:0},
{q:"Java is platform?", options:["Independent","Dependent","Mobile only","Hardware"], ans:0},
{q:"Which keyword creates object?", options:["new","create","make","object"], ans:0},
{q:"Java file extension?", options:[".java",".js",".class",".exe"], ans:0},
{q:"Which method is main method?", options:["main()","start()","run()","init()"], ans:0},
{q:"Java is used for?", options:["Application development","Styling","Design","Database only"], ans:0}
]

};

function load(){
  let q = questions[subject][index];

  document.getElementById("question").innerText =
  (index+1)+". "+q.q;

  let letters = ["A","B","C","D"];
  let html = "";

  q.options.forEach((opt,i)=>{
    html += `<button class="opt" onclick="check(${i})">
    ${letters[i]}. ${opt}
    </button>`;
  });

  document.getElementById("options").innerHTML = html;
}

function check(i){
  let correct = questions[subject][index].ans;

  let buttons = document.querySelectorAll(".opt");

  buttons.forEach((b,idx)=>{
    b.disabled = true;

    if(idx === correct){
      b.style.background = "green";
      b.style.color = "white";
    }

    if(idx === i && i !== correct){
      b.style.background = "red";
      b.style.color = "white";
    }
  });

  if(i === correct){
    score++;
  }

  localStorage.setItem("score", score);
}

function next(){
  index++;

  if(index < 7){
    load();
  } else {
    document.getElementById("submitBtn").style.display = "inline";
  }
}

function submitQuiz(){
  localStorage.setItem("score", score);
  window.location.href = "result.html";
}


load();