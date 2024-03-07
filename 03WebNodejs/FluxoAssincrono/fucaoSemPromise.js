function dividirNumeros(num1, num2) {
  if (num2 == 0) throw new Error("Não pode por zero!");
    return num1 / num2;
}

try {
  const resultado = dividirNumeros(2, 0);
  console.log(`Resultado ${resultado}`);

} catch (e) {
  console.log(e.message);
}