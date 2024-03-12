let heroName = "Owen Higgins";
let wins = 96;
let defeats = 10;
let balance = balanceCalc(wins, defeats);
let rank = getRank(balance);
const message = `O Herói ${ heroName } tem saldo de ${ balance } vitórias, e está no nível ${ rank }.`;

function balanceCalc(win, defeat) {
    let calc = win - defeat;
    return calc;
};

function getRank (wins) {
    if (wins < 10) {
        return "Ferro"
    } else if (wins >= 11 && wins <= 20) {
        return "Bronze"
    } else if (wins >= 21 && wins <= 50) {
        return "Prata"
    } else if (wins >= 51 && wins <= 80) {
        return "Ouro"
    } else if (wins >= 81 && wins <= 90) {
        return "Diamante"
    } else if (wins >= 91 && wins <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
};

console.log(message);