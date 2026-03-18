// botão de enviar feedback ou finalizar
const button = document.querySelector("fieldset button");

// evento de clique
button.addEventListener("click", calcularPontuacao);

function calcularPontuacao() {

  let pontos = 0;

  // pergunta 1
  const p1 = document.querySelector('input[name="pergunta1"]:checked');
  if (p1 && p1.value === "HTML") {
    pontos++;
  }

  // pergunta 2
  const p2 = document.querySelector("#p2").value.toLowerCase();
  if (p2 === "dominio" || p2 === "domínio") {
    pontos++;
  }

  // pergunta 7
  const p7 = document.querySelector("#p7").value;
  if (p7 === "type") {
    pontos++;
  }

  // pergunta 8
  const p8 = document.querySelector("#p8").value.toLowerCase();
  if (p8 === "java") {
    pontos++;
  }

  // resultado
  alert("Sua pontuação foi: " + pontos);
}


const inputs = document.querySelectorAll("input, select");
const progressBar = document.querySelector("#progress-bar");

inputs.forEach(input => {
  input.addEventListener("change", atualizarProgresso);
});

function atualizarProgresso() {

  let respondidas = 0;

  inputs.forEach(input => {
    if (input.type === "radio" || input.type === "checkbox") {
      if (input.checked) {
        respondidas++;
      }
    } else {
      if (input.value !== "") {
        respondidas++;
      }
    }
  });

  const progresso = (respondidas / inputs.length) * 100;

  progressBar.style.width = progresso + "%";
}