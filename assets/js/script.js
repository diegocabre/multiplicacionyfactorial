document.addEventListener("DOMContentLoaded", () => {
  let numero = document.getElementById("number");
  const btn = document.querySelector("#calcular");
  let tablas = document.getElementById("tabla");
  let factorial = document.getElementById("factorial");
  let error = document.getElementById("error");
  let reiniciar = document.getElementById("reiniciar");

  btn.addEventListener("click", () => {
    let num = parseInt(numero.value);

    if (num === 0 || isNaN(num) || num > 20) {
      error.innerHTML = "Ingresa un número entre 1 y 20";
      tablas.innerHTML = "";
      factorial.innerHTML = "";
      numero.value = "";
      return false;
    }
    for (let i = 1; i <= num; i++) {
      tablas.innerHTML += `${num} x ${i} = ${num * i} <br>`;
    }

    for (let i = 1; i <= num; i++) {
      let fact = 1;
      for (let j = 1; j <= i; j++) {
        fact *= j;
      }
      factorial.innerHTML += `El factorial de ${i} es ${fact} <br>`;
    }
  });
});

reiniciar.addEventListener("click", () => {
  location.reload();
});
