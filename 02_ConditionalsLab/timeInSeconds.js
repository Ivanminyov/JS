function timeInSecons(input){

        let firstTime= Number(input[0]);
        let secondTime= Number(input[1]);
        let thirdTime= Number(input[2]);
        let totalTime = firstTime+secondTime+thirdTime;
        let timeInMinutes= Math.floor(totalTime/60);
        let timeInSecons= totalTime%60;

        if(timeInSecons<10){

                console.log(`${timeInMinutes}:0${timeInSecons}`);
        }else{
            console.log(`${timeInMinutes}:${timeInSecons}`)
        }
        
}

timeInSecons(["22", "7", 
"34"])

