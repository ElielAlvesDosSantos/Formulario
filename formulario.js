let teste = document.getElementById("teste");
let btn_enviar = document.querySelector("#btn_enviar");
let res = document.querySelector("#res");

btn_enviar.addEventListener("click", () => {
  let produto = document.querySelector("#produto").value;
  let qtde = document.querySelector("#qtde").value;
  res.innerHTML =
    "<br>" + "produto = " + produto + " e quantidade = " + qtde + "kg";
});
