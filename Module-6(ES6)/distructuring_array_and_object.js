
// Object Distructuring
const person = {
    name: "Jamshed",
    age: 10,
    friends: ["Karim", "Rahim", "Jabbar"]
};

// const age = person.age;
const {friends, age} = person; //In object distructuring, we don't need to maintain sequence.

console.log("Friends: ", friends);
console.log("Age: ", age);


// Array Distructuring
const names = ["Jamshed", 23, "I am Ashraful Hoda Jamshed. I wanna be a Software Enginner"];

const [name, ages, dream] = names // In array distructuring, we have to maintain sequence. 
console.log(name);
console.log(ages);
console.log(dream);