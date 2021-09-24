function time(input){

    let hour= Number(input[0]);
    let minutes = Number(input[1]);
    let time=(hour*60)+minutes+15;

    let newHour=Math.floor(time/60);
    let newMinutes = time%60;

    if(newHour>=24){
        newHour=0;
    }

    if(newMinutes<10){

        console.log(`${newHour}:0${newMinutes}`);
    }else{
        console.log(`${newHour}:${newMinutes}`);
    }

}

time(["23", "59"])