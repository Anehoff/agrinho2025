// script.js

function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "✅ Dica: Sempre avalie a qualidade do solo antes de decidir pela prática agrícola!";
}

function responderQuiz(acertou) {
    const resposta = document.getElementById("respostaQuiz");
    if (acertou) {
        resposta.textContent = "🎉 Parabéns! Você acertou!";
        resposta.style.color = "green";
    } else {
        resposta.textContent = "❌ Ops! Resposta incorreta. Tente novamente!";
        resposta.style.color = "red";
    }
}

function toggleTexto(id) {
    const elemento = document.getElementById(id);
    if (elemento.classList.contains('oculto')) {
        elemento.classList.remove('oculto');
    } else {
        elemento.classList.add('oculto');
    }
}

// Ampliação de imagem ao clicar
const imagens = document.querySelectorAll('.imagem-click');
imagens.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('ampliada');
    });
});
