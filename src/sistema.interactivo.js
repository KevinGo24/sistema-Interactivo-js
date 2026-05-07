const name = String(prompt('digite su nombre: '))
const age = Number(prompt('digite su edad: '))
// Hacemos condicionbal para validar la edad 
if (age <= 18) {
    // Mostramos una alerta cuando la edad es igual a 0 
    alert('¡Sigue aprendiendo y disfrutando del código!')
}else{
    alert( 'su nombre es :' + name + ' ' + 'su edad es: ' +  age + '¡Prepárate para grandes oportunidades en el mundo de la programación!"')
}