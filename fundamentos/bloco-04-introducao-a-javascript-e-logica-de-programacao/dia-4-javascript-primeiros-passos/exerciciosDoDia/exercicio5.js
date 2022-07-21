const a = 50;
const b = 100;
const c = 90;

if (a < 0 || b < 0 || c < 0) {
    console.log ("Erro, angulo inválido");
} else if (a + b + c == 180){
    console.log (true);
} else {
    console.log (false);
}
