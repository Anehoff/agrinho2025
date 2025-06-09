const quizData = [
  {
    pergunta: "O que é plantio direto?",
    alternativas: ["Plantio com irrigação artificial", "Técnica que mantém a palhada sobre o solo", "Uso exclusivo de sementes transgênicas"],
    correta: 1
  },
  {
    pergunta: "Qual é um dos principais problemas da agricultura convencional?",
    alternativas: ["Fixação de carbono", "Aumento da biodiversidade", "Erosão do solo"],
    correta: 2
  },
  {
    pergunta: "O que a rotação de culturas promove?",
    alternativas: ["Aumento de pragas", "Equilíbrio nutricional do solo", "Poluição hídrica"],
    correta: 1
  },
  {
    pergunta: "ILPF é a sigla para:",
    alternativas: ["Iniciativa Livre de Produtos Férteis", "Integração Lavoura-Pecuária-Floresta", "Índice de Lavoura e Pastagem Familiar"],
    correta: 1
  },
  {
    pergunta: "A compactação do solo dificulta:",
    alternativas: ["A entrada de oxigênio e água", "A aplicação de adubo químico", "A emissão de gases do solo"],
    correta: 0
  },
  {
    pergunta: "A principal vantagem do plantio direto é:",
    alternativas: ["Redução de mão-de-obra", "Redução da erosão", "Aumento do uso de agroquímicos"],
    correta: 1
  },
  {
    pergunta: "O que caracteriza uma prática sustentável?",
    alternativas: ["Lucro imediato", "Equilíbrio entre produção e meio ambiente", "Uso intensivo de defensivos"],
    correta: 1
  },
  {
    pergunta: "Qual dessas é uma prática sustentável?",
    alternativas: ["Queimada controlada anual", "Plantio direto", "Uso de fertilizante nitrogenado em excesso"],
    correta: 1
  },
  {
    pergunta: "A biodiversidade é importante para:",
    alternativas: ["Aumentar o número de pragas", "Equilíbrio ecológico e controle natural de doenças", "Evitar a rotação de culturas"],
    correta: 1
  },
  {
    pergunta: "ILPF promove:",
    alternativas: ["Monocultura extensiva", "Desmatamento", "Eficiência no uso da terra"],
    correta: 2
  }
];

function verificarRespostas() {
  const respostas = document.querySelectorAll('input[type=radio]:checked');
  let acertos = 0;
  respostas.forEach((resposta, i) => {
    if (parseInt(resposta.value) === quizData[i].correta) acertos++;
  });
  alert(`Você acertou ${acertos} de ${quizData.length} questões.`);
}

function montarQuiz() {
  const quiz = document.getElementById('quiz');
  quizData.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-question';
    div.innerHTML = `<strong>${i + 1}. ${q.pergunta}</strong><br>` +
      q.alternativas.map((alt, j) =>
        `<label><input type="radio" name="q${i}" value="${j}"> ${alt}</label><br>`
      ).join('');
    quiz.appendChild(div);
  });
}

montarQuiz();
