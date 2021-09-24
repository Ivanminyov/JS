function figures(input){

    let shape=input[0];

    if(shape==="square"){

        let a=Number(input[1]);
        let result=Math.pow(a,2);
        console.log(result.toFixed(3));

    }else if(shape==="rectangle"){

            let a=Number(input[1]);
            let b=Number(input[2]);
            let result=a*b

            console.log(result.toFixed(3));
    }else if(shape==="circle"){

        let r = Number(input[1]);
        let result= Math.PI*(Math.pow(r,2))
        console.log(result.toFixed(3));
    }else if(shape==="triangle"){

        let a=Number(input[1]);
        let ha=Number(input[2]);
        let face=(a*ha)/2;
        console.log(face.toFixed(3));
    }

}

figures(["triangle",
"4.5",
"20"])

