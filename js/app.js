
function DoneTask(){
    document.getElementById("task1").style.textDecoration = "line-through";
}
function DoneTask2(){
    document.getElementById("task2").style.textDecoration = "line-through";
}
function DoneTask3(task1){
    document.getElementById("task3").style.textDecoration = "line-through";
}

let name  = prompt("Enter Your Name : ")
checkName()
let gender  = prompt(" What's you gender : \n please only enter ( female , male )")
let age  = prompt(" How old are you : ")
checkAge()

function checkName() {
    if ( name == "") {
        alert("empty")
    }
}

function checkGender(){
    if (gender == "male") {
        name = "Mr "+name
    }
    else if (gender == "female") {
        name = "Ms "+name
    }
    else {
        return false
    }
}

function checkAge(){
    if (!(age >= 0)) {
        alert("Wrong Entry , you entred a zero or below value")
    }
}


if(!confirm ("Do you want to skip the welcoming message ?")){
    if (checkGender()) {
        alert ("Wrong Gender Input")
    }
    else {
        alert ("Welcome "+name)
    }
    
}

let arrQuestions = ["Do you like see food ?", "Did you study outside Jordan ? ", "Do you have alot of friends ?"]
let arrAnswers = []
for (let i = 0; i < arrQuestions.length; i++) {
    questionAnswers = prompt(arrQuestions[i])
    if (questionAnswers === ""){
        arrAnswers.push("invalid")
    }
    else {
    arrAnswers.push(questionAnswers)
}}

for (let i = 0; i < arrQuestions.length; i++) {
    console.log (arrQuestions[i] + "= "+ arrAnswers[i])
    
}