/*()
 se tienen 3 notas de un aprendiz para la asignatura programación.
Nota1 = 5, Nota2 = 3 y Nota3= 4. Se requiere saber cual es el promedio del semestre. */

// parseInt - pasa a enteros ---   parseFloat - pasa string a numero decimal
var Nota1 = parseFloat(prompt("digita la nota 1"))
var Nota2 = 3
var Nota3 = 4
var promedio = 0


promedio = (Nota1 + Nota2 + Nota3)/3
console.log("el promedio de notas es: "+ promedio)