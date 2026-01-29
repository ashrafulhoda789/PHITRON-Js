const loadAllProduct = () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            displayProduct(data);
        });
}

const displayProduct = (products) => {
    const productContainer = document.getElementById("product-container");

    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <img class="card-img" src=${product.image} alt="">
            <h5>${product.title}</h5>
            <h3>Price: $${product.price}</h3>
            <p>${product.description.slice(0, 100)}</p>
            <button type="">Details</button>
            <button type="">Add To Cart</button>
        `;

        productContainer.appendChild(div);
    });
}

loadAllProduct();