function degreese(input){
    
    let radians=Number(input[0]);
    let degreese= radians*(180 / Math.PI);

    console.log(degreese);

}
degreese(["3.1416"])