function swimming(input){

    let recoredSec=Number(input[0]);
    let distance = Number(input[1]);
    let timeForMeter=Number(input[2]);
    let ivanTime= timeForMeter*distance;
    let test=Math.floor(distance/15);
    ivanslownes= test*12.5

    ivanFullTime=ivanTime+ivanslownes;
    let difference= Math.abs(recoredSec-ivanFullTime)

    if(ivanFullTime>=recoredSec){

        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);

    }else{

        console.log(`Yes, he succeeded! The new world record is ${ivanFullTime.toFixed(2)} seconds.`);
    }



}
swimming(["55555.67",
"3017",
"5.03"])
