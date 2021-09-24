function lunchbreak(input){

    let name=input[0];
    let epTime=Number(input[1]);
    let breakTime=Number(input[2]);
    let timeForLunch=breakTime/8;
    let timeForRelax= breakTime/4;
    let fullTime=timeForLunch+timeForRelax+epTime;

    if(breakTime>=fullTime){

   console.log(`You have enough time to watch ${name} and left with ${breakTime-fullTime} minutes free time.`);

    }else{

            console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(fullTime-breakTime)} more minutes.`);
    }



}

lunchbreak(["Teen Wolf",
"48",
"60"])


