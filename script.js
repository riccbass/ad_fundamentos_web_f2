//ele precisa estar aembaixo para pegar os elementos do html, se for carregado antes o script n pega
const form = document.getElementById("cadastro_cliente");

form.addEventListener("submit", function (e) {
  const modalEl = document.getElementById("modal_cliente");
  $(modalEl).modal("hide");

  alert("Cadastro concluído");

  e.preventDefault();
  e.stopPropagation();

  //envia para o backend
});

function servico(servico) {
  document.getElementById("servico").innerHTML = servico;
  document.getElementById("tipo_servico").value = servico;
}

//função para preencher o horário atual na data de entrega/retirada

function toLocalISOString(date) {
  const localDate = new Date(date - date.getTimezoneOffset() * 60000); //offset in milliseconds. Credit https://stackoverflow.com/questions/10830357/javascript-toisostring-ignores-timezone-offset

  localDate.setHours(localDate.getHours() + 2);

  // Optionally remove second/millisecond if needed
  localDate.setSeconds(null);
  localDate.setMilliseconds(null);
  return localDate.toISOString().slice(0, -1);
}

//isso faz com que ao carregar já preencha
window.addEventListener("load", () => {
  document.getElementById("data_entrega").value = toLocalISOString(new Date());
});

//timer

function contagem(dataAlvo) {
  //hora alvo em milisegundos
  var horaBlackFriday = dataAlvo.getTime();
  //hora atual em milisegundos
  var horaAtual = new Date().getTime();

  var distancia = horaBlackFriday - horaAtual;

  if (distancia < 0) {
    return "Já passo!";
  }

  var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  return `Faltam apenas ${dias}d ${horas}h ${minutos}m ${segundos}s para a Black-Friday`;
}

function contagemBlackFriday() {
  var blackFriday = new Date("2025-11-28");
  var texto = contagem(blackFriday);

  document.getElementById("contador").innerHTML = texto;
}

setInterval(contagemBlackFriday, 500);
