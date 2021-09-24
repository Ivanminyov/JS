function literature(input){

    let pages=Number(input[0]);
    let pagerPerHour= Number(input[1]);
    let days = Number(input[2]);

    let time = ((pages/pagerPerHour)/days);

    console.log(time);

}

literature(["212","20","2"])