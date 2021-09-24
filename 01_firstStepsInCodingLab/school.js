function schoolSupplies(input){

    let pen=Number(input[0]);
    let markers=Number(input[1]);
    let cleaner = Number(input[2]);
    let discount=Number(input[3]);

    let sum = (pen*5.80)+(markers*7.20)+(cleaner*1.20);
    let finalSum= sum-(sum*(discount/100));
    console.log(finalSum);
}

schoolSupplies(["2","3","4","25"])