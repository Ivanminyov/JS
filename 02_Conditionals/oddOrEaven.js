function oddOrEaven(input){

    let num=Number(input[0]);
    let odd=num%2;

    if(odd===0){
        console.log("even");
    }else{
        console.log("odd");
    }


}

oddOrEaven(["5"])