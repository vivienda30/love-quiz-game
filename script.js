let passcode = "3012";
let enteredCode = "";
const questions = [
    { 
        question: "Dimana pertama kali kita ketemu?",
        image: "https://example.com/kos_image.gif", // Ganti dengan URL GIF kos
        options: ["Di kampus", "Di kos yang sama", "Di mall"],
        answer: "Di kos yang sama"
    },
    { 
        question: "Siapa pemain bola favoritku?",
        image: "https://example.com/zidane_gif.gif", // Ganti dengan URL GIF Zidane
        options: ["Ronaldo", "Messi", "Zidane"],
        answer: "Zidane"
    },
    { 
        question: "Ubub-ubur ikan lele.....",
        image: "https://example.com/funny_love.gif", // Ganti dengan URL GIF lucu
        options: ["Aku sayang kamu", "I love u selaluuu leee", "Kamu imut"],
        answer: "I love u selaluuu leee"
    }
];
let currentQuestion = 0;

function enterDigit(digit) {
    if (enteredCode.length < 4) {
        enteredCode += digit;
        document.querySelectorAll(".passcode-grid button").forEach(btn => {
            if (btn.textContent === digit) {
                btn.style.backgroundColor = "lightgreen";
            }
        });
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
        document.querySelectorAll(".passcode-grid button").forEach(btn => {
            btn.style.backgroundColor = "";
        });
    }
}

function loadQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    document.getElementById("questionImage").src = q.image;
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
