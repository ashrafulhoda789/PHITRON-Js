/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const oddEven = (array) => {
    let even = [];
    let odd = [];
    for(let i = 0; i < array.length; i++){
        const element = array[i];
        if(element%2 == 0){
            even.push(element);
        }
        else{
            odd.push(element);
        }
    }

    return odd;
};

const result = oddEven(numbers);
console.log(result); */

const checkFriends = (array) =>{
    let biggestName = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element.length > biggestName.length){
            biggestName = element;
        }
    }

    return biggestName;
}

const friends = ["Rohim", "Karim", "Jabbar", "Salam", "Preo", "Bangladesh"];
const bigFriends = checkFriends(friends);
console.log(bigFriends);
