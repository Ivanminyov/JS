function depozit(input){

    let sum=Number(input[0]);
    let time =Number(input[1]);
    let percentage =(Number(input[2])/100); 

    let profit= sum+time*((sum*percentage)/12);

    console.log(profit);
    console.log


}

depozit(["200","3","5.7"])