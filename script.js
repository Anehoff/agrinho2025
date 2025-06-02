// script.js

function mostrarDica() {
    document.getElementById("mensagem").textContent = "✅ Sempre avalie a capacidade de suporte do solo antes de definir sua prática agrícola.";
}

// Quiz com 10 perguntas
const perguntas = [
    {
        pergunta: "1. O que é plantio direto?",
        opcoes: ["Revolvimento total do solo", "Manter a palhada sobre o solo", "Queima de resíduos"],
        resposta: 1
    },
    {
        pergunta: "2. Qual o benefício da rotação de culturas?",
        opcoes: ["Aumenta pragas", "Diminui fertilidade", "Melhora o solo e quebra ciclo de pragas"],
        resposta: 2
    },
    {
        pergunta: "3. ILPF significa:",
        opcoes: ["Inovação Legal de Produção Florestal", "Integração Lavoura-Pecuária-Floresta", "Investimento em Lavouras de Pequena Fusão"],
        resposta: 1
    },
    {
        pergunta: "4. Qual é um problema causado pela agricultura convencional?",
        opcoes: ["Melhoria da biodiversidade", "Compactação do solo", "Aumento de infiltração da água"],
        resposta: 1
    },
    {
        pergunta: "5. A prática sustentável visa:",
        opcoes: ["Aumentar poluentes", "Intensificar queimadas", "Conciliar produção com preservação ambiental"],
        resposta: 2
    },
    {
        pergunta: "6. A erosão do solo é causada principalmente por:",
        opcoes: ["Má gestão do solo", "Uso de palhada", "Rotação de culturas"],
        resposta: 0
    },
    {
        pergunta: "7. A ILPF contribui para:",
        opcoes: ["Monocultura", "Diversificação produtiva", "Poluição hídrica"],
        resposta: 1
    },
    {
        pergunta: "8. O plantio direto ajuda a:",
        opcoes: ["Expor nutrientes", "Proteger o solo", "Aumentar a erosão"],
        resposta: 1
    },
    {
        pergunta: "9. A rotação de culturas evita:",
        opcoes: ["Ciclo de pragas", "Diversificação do solo", "Preservação do ambiente"],
        resposta: 0
    },
    {
        pergunta: "10. A sustentabilidade busca:",
        opcoes: ["Exclusivamente lucro", "Equilíbrio entre produção e meio ambiente", "Exploração intensa dos recursos"],
        resposta: 1
    }
];

const containerPerguntas = document.getElementById('perguntas');

perguntas.forEach((q, index) => {
    const div = document.createElement('div');
    div.innerHTML = `<p>${q.pergunta}</p>`;
    q.opcoes.forEach((opcao, i) => {
        div.innerHTML += `
            <label>
                <input type="radio" name="pergunta${index}" value="${i}">
                ${opcao}
            </label><br>
        `;
    });
    containerPerguntas.appendChild(div);
});

function verificarRespostas() {
    let acertos = 0;
    perguntas.forEach((q, index) => {
        const resposta = document.querySelector(`input[name="pergunta${index}"]:checked`);
        if (resposta && parseInt(resposta.value) === q.resposta) {
            acertos++;
        }
    });
    document.getElementById("resultado").textContent = `✅ Você acertou ${acertos} de ${perguntas.length} perguntas!`;
}
