function repainting(input){

    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);

    let consumables= ((naylon+2)*1.50)+((paint+(paint*0.1))*14.50)+(razreditel*5)+0.40;
    let work= (consumables*(30/100))*hours;
    let fullprice=work+consumables

    console.log(fullprice)
}

repainting(["5","10","10","1" ])