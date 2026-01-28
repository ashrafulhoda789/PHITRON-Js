function monthlySavings(array, cost){
    let tax = 0;
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        if(array[i] >= 3000){
            tax += array[i] * 20 / 100;
        }
    }

    let savings = sum - (tax + cost);
    
    if(savings < 0){
        return "earn more";
    }
    else{
        return savings;
    }
}

const payments = [900, 2700, 3400];
const livingCost = 10000;

const result = monthlySavings(payments, livingCost);
console.log(result);