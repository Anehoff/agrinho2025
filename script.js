let score = 0;
let totalQuestions = 2;

function checkAnswer(button, correct) {
    if (correct) {
        score++;
        button.style.backgroundColor = '#4CAF50';
    } else {
        button.style.backgroundColor = '#f44336';
    }

    button.disabled = true;
    const siblings = button.parentElement.querySelectorAll('button');
    siblings.forEach(btn => btn.disabled = true);

    if (document.querySelectorAll('button:disabled').length === totalQuestions * 2) {
        document.getElementById('resultado').textContent = 
            `Você acertou ${score} de ${totalQuestions} perguntas!`;
    }
}
