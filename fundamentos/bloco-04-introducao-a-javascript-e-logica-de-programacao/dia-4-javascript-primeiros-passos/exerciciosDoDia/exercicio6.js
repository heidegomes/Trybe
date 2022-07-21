const pecaXadrez = "Peao";

switch (pecaXadrez.toLowerCase()) {
    case "rei":
    console.log("Todas as direções, 1 casa por vez.")
        break;
    case "rainha":
    console.log("Todas as direções, qualquer número de casas por vez.")
        break;
    case "cavalo":
        console.log("Em L, 2 casas na horizontal ou vertical mais 1 formando angulo de 0°.")
        break;
    case "torre":
        console.log("Em linha reta, na horizontal e na vertical")
        break;
    case "bispo":
        console.log("Em linha reta, na diagonal")
        break;   
    case "peão":
        console.log("Somente para frente, uamcasa por vez.")
        break;  
    default:
        console.log("Peça inválida.")
        break;
}