function shopping(input){

    let budget = Number(input[0]).toFixed(2);
    let cards= Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

   let priceForCards = cards*250;
   let priceForProcessors=processors*(priceForCards*0.35);
   let priceForRam = ram*(priceForCards*0.1);
   let fullPrice= priceForCards+priceForProcessors+priceForRam;

   if(cards>=processors){

    fullPrice-=fullPrice*0.15;

   }

   if(budget>=fullPrice){

    console.log(`You have ${(budget-fullPrice).toFixed(2)} leva left!`);

   }else{

    console.log(`Not enough money! You need ${(fullPrice-budget).toFixed(2)} leva more!`);

   }


}
shopping(["920.45",
"3",
"1",
"1"])

