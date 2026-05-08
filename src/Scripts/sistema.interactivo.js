let name = String(prompt('digite su nombre: '))
let age = Number(prompt('digite su edad: '))
// Hacemos condicionbal para validar la edad 
// 2. Validamos
if (age < 18){
    // Esto se ejecuta solo si la edad es exactamente 0
    alert('¡Sigue aprendiendo y disfrutando del código!');
} else {
    // Esto se ejecuta si es 18 o más
    alert(`Bienvenido, ${name}!  preparate para algo importante en este mundo de la programacion`);
}