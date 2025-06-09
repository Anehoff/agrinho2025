document.getElementById("intro").innerText =
  "Este site tem como objetivo apresentar práticas de manejo sustentável para alunos do primeiro ano de agricultura e profissionais da área. Através de uma linguagem clara e técnica, buscamos proporcionar conhecimento aplicável no campo e incentivar a adoção de estratégias sustentáveis.";

function verificarResposta() {
  const resposta = document.querySelector('input[name="q1"]:checked');
  const resultado = document.getElementById("resposta");

  if (!resposta) {
    resultado.textContent = "Por favor, selecione uma opção.";
    resultado.style.color = "#b30000";
    return;
  }

  if (resposta.value === "b") {
    resultado.textContent = "Correto! O uso intensivo de agrotóxicos não é uma prática sustentável.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Incorreto. Reveja as estratégias de manejo sustentável.";
    resultado.style.color = "#b30000";
  }
}