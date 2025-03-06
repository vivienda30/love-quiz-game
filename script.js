let passcode = "0502";
let enteredCode = "";
const questions = [
    { 
        question: "Dimana pertama kali kita ketemu?",
        options: ["Di kampus", "Di kos yang sama", "Di mall"],
        answer: "Di kos yang sama"
    },
    { 
        question: "Siapa pemain bola favoritku?",
        options: ["Ronaldo", "Messi", "Zidane", "Paolo Maldini"],
        answer: "Zidane"
    },
    { 
        question: "Ubub-ubur ikan lele.....",
        options: ["Aku sayang kamu", "I love u selaluuu leee", "Kamu imut"],
        answer: "I love u selaluuu leee"
    }
];
let currentQuestion = 0;

function enterDigit(digit) {
    if (enteredCode.length < 4) {
        enteredCode += digit;
    }
    if (enteredCode.length === 4) {
        checkPasscode();
    }
}

function checkPasscode() {
    if (enteredCode === passcode) {
        document.querySelector(".passcode-screen").classList.add("hidden");
        document.querySelector(".container").classList.remove("hidden");
        loadQuestion();
    } else {
        alert("❌ Passcode salah!");
        enteredCode = "";
    }
}

function loadQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    let optionsHTML = "";
    q.options.forEach(option => {
        optionsHTML += `<button onclick="checkAnswer('${option}')">${option}</button>`;
    });
    document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(selected) {
    let correct = questions[currentQuestion].answer;
    if (selected === correct) {
        alert("✅ Benar!");
        nextQuestion();
    } else {
        alert("❌ Salah! Tapi gapapa, aku tetap cinta 😘");
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".container").classList.add("hidden");
        document.querySelector(".envelope-screen").classList.remove("hidden");
    }
}

function openEnvelope() {
    document.querySelector(".message").classList.remove("hidden");
}
