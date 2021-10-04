let parametro1;
let parametro2;

function calculadora() {
  let parametro1 = parseInt(prompt("Escriba el primer numero para calcular:"));
  if (isNaN(parametro1)) {
    alert("Introduzca un numero");
  }
  let parametro2 = parseInt(prompt("Escriba el segundo numero"));
  if (isNaN(parametro2)) {
    alert("Introduzca un numero");
  }

  if (isNaN(parametro1) && isNaN(parametro2)) {
    alert(`Tienes que introducir numeros`);
    return calculadora();
  } else if (isNaN(parametro1)) {
    return console.log(
      `La raiz cuadrada de ${parametro2} es: ${Math.sqrt(parametro2).toFixed(3)}`
    );
  } else if (isNaN(parametro2)) {
    return console.log(
      `La raiz cuadrada de ${parametro1} es: ${Math.sqrt(parametro1).toFixed(3)}`
    );
  }

  console.log(
    `El resultado de la suma de ${parametro1} y ${parametro2} es: ${(
      parseInt(parametro1) + parseInt(parametro2)
    ).toFixed(3)}`
  );
  console.log(
    `El resultado de la resta de ${numero1} y ${parametro2} es: ${(
      parseInt(parametro1) - parseInt(parametro2)
    ).toFixed(3)}`
  );
  console.log(
    `El resultado de la multiplicación de ${parametro1} y ${parametro2} es: ${parseInt(
        parametro1 * parametro2
    ).toFixed(3)}`
  );
  console.log(
    `El resultado de la división de ${parametro1} y ${parametro2} es: ${(
      parseInt(parametro1) / parseInt(parametro2)
    ).toFixed(3)}`
  );
}

calculadora();