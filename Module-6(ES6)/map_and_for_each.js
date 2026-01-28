const products = [
    {id:1, name: "Xiaomi", description: "This is Xiaomi", Price: 30000, Color: "White"},
    {id:2, name: "Iphone", description: "This is Iphone", Price: 80000, Color: "Golden"},
    {id:3, name: "Xiaomi", description: "This is Xiaomi", Price: 30000, Color: "White"},
    {id:4, name: "Iphone", description: "This is Iphone", Price: 95000, Color: "Gray"},
    {id:5, name: "Xiaomi", description: "This is Xiaomi", Price: 21000, Color: "White"},
]

// map
const sum = products.map(pd=> pd.id*2);
console.log(sum);

// foreach
const result = products.forEach(pd => {
    console.log(pd.id);
});
console.log(result);