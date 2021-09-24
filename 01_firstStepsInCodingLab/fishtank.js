function fishtank(input){

    let lenght=Number(input[0]);
    let width=Number(input[1]);
    let height=Number(input[2]);
    let percent=Number(input[3]);

    let volume = (lenght*height*width)*0.001;
    let fullVolume = volume -(volume*(percent/100));

    console.log(fullVolume);
    

}
fishtank(["85","75","47","17"])