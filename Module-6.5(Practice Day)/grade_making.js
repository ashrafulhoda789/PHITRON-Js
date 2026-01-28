let result = 80;

if(result >= 80 && result <= 100){
    console.log("A+");
}
else if(result >= 70 && result < 80){
    console.log("A");
}
else if(result >= 60 && result < 70){
    console.log("A-");
}
else if(result >= 50 && result < 60){
    console.log("B");
}
else if(result >= 40 && result < 50){
    console.log("C");
}
else if(result >= 33 && result < 40){
    console.log("D");
}
else if(result < 33 && result >= 0){
    console.log("Fail");
}
else{
    console.log("Invalid");
}