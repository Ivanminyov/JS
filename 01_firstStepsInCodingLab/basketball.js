function basketball(input){

    let tax=Number(input[0]);
    let sneecers= tax-(tax*0.4);
    let ekip = sneecers-(sneecers*0.2);
    let ball = ekip/4;
    let accessories = ball/5;

    let totalPrice = tax+sneecers+ekip+ball+accessories;
    console.log(totalPrice);



}
basketball(["365"])
