function toyStore(input) {

    let priceForTrip = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);
    let price = 0;
    price = (puzzle * 2.60) + (doll * 3) + (bear * 4.10) + (minion * 8.20) + (truck * 2);

    if (puzzle + doll + bear + minion + truck > 50) {

        price -= price * 0.25;
    }

    let profit = price - (price * 0.1);

    if (profit > priceForTrip) {

        let leftMoney = profit - priceForTrip;
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);

    } else {

        let noMoney = priceForTrip - profit;
        console.log(`Not enough money! ${noMoney.toFixed(2)} lv needed.`);

    }



}

toyStore(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])

