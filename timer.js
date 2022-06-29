var arr = [
    {
        q: "What is JavaScript?",
        a: "Markup Language",
        b: "Class-based Object Oriented LanguagePreprocesso",
        c: "Prototype based Object Oriented Language",
        ans: "ans3"
    },
    {
        q: "Which of these is the correct way in which we can call the JavaScript code?",
        a: "Triggering Event",
        b: "Preprocesso",
        c: "Function/Method",
        ans: "ans3"
    },
    {
        q: "Which of these is known as the Equality operator used for checking whether both the values are equal?",
        a: "=",
        b: "==",
        c: "===",
        ans: "ans2"
    },
    {
        q: "Which of these is known as the Equality operator used for checking whether both the values are equal?",
        a: "=",
        b: "==",
        c: "===",
        ans: "ans2"
    }
];

const question = document.querySelector('#question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const next = document.getElementById('next');
const answers = document.querySelectorAll('.answer');

let questionCnt = 0;
var score = 0;

const loadQuestion = () => {
    const questionList = arr[questionCnt];
    question.innerHTML = questionList.q;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
}


loadQuestion();

const checkAns = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselect = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

var sec = 0;
var min = 0;

document.getElementById("start").addEventListener("click", start);

function start() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("box").style.display = "block";
    document.getElementById("clock").style.display = "block";
    var x = setInterval(incSec, 1000);
    var y = setInterval(incMin, 60000);
    document.getElementById("submit").addEventListener("click", stop);

    next.addEventListener('click', () => {
        const checkedAns = checkAns();

        if (checkedAns === arr[questionCnt].ans) {
            score++;
        }
        questionCnt++;
        deselect();
        if (questionCnt < arr.length) {
            loadQuestion();
        } else {
            if (score < 2) {
                document.getElementById("box").style.display = "none";
                document.getElementById("clock").style.display = "none";
                document.getElementById("danger").style.display = "block";
                document.getElementById("scored").innerHTML = "Your Score: " + score;
                document.getElementById("durationd").innerHTML = "Your Duration: " + min + " : " + sec;
            } else {
                document.getElementById("box").style.display = "none";
                document.getElementById("clock").style.display = "none";
                document.getElementById("success").style.display = "block";
                document.getElementById("score").innerHTML = "Your Score: " + score;
                document.getElementById("duration").innerHTML = "Your Duration: " + min + " : " + sec;
            }

        }
    });
    function stop() {
        const checkedAns = checkAns();

        if (checkedAns === arr[questionCnt].ans) {
            score++;
        }
        clearInterval(x);
        clearInterval(y);

        if (score < 2) {
            document.getElementById("box").style.display = "none";
            document.getElementById("clock").style.display = "none";
            document.getElementById("danger").style.display = "block";
            document.getElementById("scored").innerHTML = "Your Score: " + score;
            document.getElementById("durationd").innerHTML = "Your Duration: " + min + " : " + sec;
        } else {
            document.getElementById("box").style.display = "none";
            document.getElementById("clock").style.display = "none";
            document.getElementById("success").style.display = "block";
            document.getElementById("score").innerHTML = "Your Score: " + score;
            document.getElementById("duration").innerHTML = "Your Duration: " + min + " : " + sec;
        }
    }
}

function incSec() {
    sec++;
    console.log("Sec", sec);
    document.getElementById('sec').innerHTML = sec;
    if (sec === 60) {
        sec = 0;
        document.getElementById('sec').innerHTML = sec;
    }
}

function incMin() {
    min++;
    console.log("Min", min);
    document.getElementById('min').innerHTML = min + " :";
}
