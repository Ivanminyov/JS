function movie(input){

    let budget = Number(input[0]);
    let statists= Number(input[1]);
    let price= Number(input[2]);
    let decors= budget*0.1;

    if(statists>150){
        price-=price*0.1;
    }

    fullPrice= (statists*price)+decors

    if(budget>=fullPrice){

        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget-fullPrice).toFixed(2)} leva left.`);

    }else{

        console.log("Not enough money!");
        console.log(`Wingard needs ${(fullPrice-budget).toFixed(2)} leva more.`);
    }


}
movie(["15437.62",
"186",
"57.99"])

