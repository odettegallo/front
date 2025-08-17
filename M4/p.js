let texto = "Reina estudia JavaScript y ama JavaScript";
let coincidencias = texto.match(/JavaScript/g);
console.log(coincidencias); // ["JavaScript", "JavaScript"]

let coincidencia = texto.match(/JavaScript/);
console.log(coincidencia[0]); // "JavaScript"
console.log(coincidencia.index); // 15
