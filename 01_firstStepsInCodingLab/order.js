function order(input){

    let chicken=Number(input[0]);
    let fish = Number(input[1]);
    let veg = Number(input[2]);

    let totalpricre= (((chicken*10.35)+(fish*12.40)+(veg*8.15))*1.2)+2.5;
    console.log(totalpricre);
}

order(["2","4","3"]);