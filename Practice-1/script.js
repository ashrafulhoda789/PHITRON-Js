function searchMeals() {
    const query = document.getElementById('searchInput').value.trim();
    const mealsDiv = document.getElementById('meals');
    const mealDetails = document.getElementById('meal-details');

   
    mealsDiv.style.display = 'grid';
    mealDetails.style.display = 'none';
    mealDetails.innerHTML = "";
    mealsDiv.innerHTML = "";

    if (!query) return;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => res.json())
        .then(data => {
            if (data.meals) {
                data.meals.forEach(meal => {
                    const mealDiv = document.createElement('div');
                    mealDiv.className = "meal";
                    mealDiv.innerHTML = `
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <h3>${meal.strMeal}</h3>
                    `;
                    mealDiv.onclick = () => showMealDetails(meal.idMeal);
                    mealsDiv.appendChild(mealDiv);
                });
            } else {
                mealsDiv.innerHTML = "<h2>Not Found</h2>";
            }
    });
}

function showMealDetails(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];
            const mealDetails = document.getElementById('meal-details');
            const mealsDiv = document.getElementById('meals');

            mealsDiv.style.display = 'none';
            mealDetails.style.display = 'block';
            mealDetails.innerHTML = "";

            let ingredients = "";
            for (let i = 1; i <= 20; i++) {
                if (meal[`strIngredient${i}`]) {
                    ingredients += `<li>${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}</li>`;
                }
            }

            const div = document.createElement("div");
            div.classList.add("meal-card");

            div.innerHTML = `
                <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}">
                <h3>Ingredients</h3>
                <ul>${ingredients}</ul>
                <h3>Instructions</h3>
                <p>${meal.strInstructions}</p>
            `;

            mealDetails.appendChild(div);
    });
}
