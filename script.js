const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
        answer: "William Shakespeare"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Which language is the most spoken worldwide?",
        options: ["English", "Mandarin", "Spanish", "Hindi"],
        answer: "Mandarin"
    },
    {
        question: "In which year did World War II end?",
        options: ["1942", "1945", "1939", "1948"],
        answer: "1945"
    }
];

let score = 0;

function displayQuiz() {
    const quizForm = document.getElementById('quiz-form');
    quizData.forEach((item, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${item.question}</p>`;
        
        item.options.forEach(option => {
            questionElement.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${option}"> ${option}
                </label>
            `;
        });
        quizForm.appendChild(questionElement);
    });
}

document.getElementById('submit-btn').addEventListener('click', () => {
    const results = document.getElementById('result');
    results.innerHTML = "";
    score = 0; // Reset score for each submission
    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === item.answer) {
                score++;
                selectedOption.parentElement.classList.add('correct');
            } else {
                selectedOption.parentElement.classList.add('incorrect');
            }
        }
    });
    results.innerHTML = `You scored ${score} out of ${quizData.length}`;
});

displayQuiz();
