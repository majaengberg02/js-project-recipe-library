document.addEventListener("DOMContentLoaded", () => {
  // Function to filter and sort recipes, then render them
  function filterAndSortRecipes() {
    const dietInput = document.querySelector('input[name="diet"]:checked');
    const sortInput = document.querySelector('input[name="sort-time"]:checked');
    const diet = dietInput ? dietInput.value : "all";
    const sort = sortInput ? sortInput.value : "desc";

    // Filter
    let filtered = recipes;
    if (diet !== "all") {
      filtered = recipes.filter(recipe => recipe.diets.includes(diet));
    }

    // Sort
    if (sort === "asc") {
      filtered = filtered.slice().sort((a, b) => a.readyInMinutes - b.readyInMinutes);
    } else {
      filtered = filtered.slice().sort((a, b) => b.readyInMinutes - a.readyInMinutes);
    }

    renderRecipes(filtered);
  }

  // Add event listeners to all filter and sort radio buttons
  document.querySelectorAll('input[name="diet"], input[name="sort-time"]').forEach(input => {
    input.addEventListener("change", filterAndSortRecipes);
  });

  // Render recipes initially
  filterAndSortRecipes();
});


// Mockup data recipes
const recipes = [
  {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "red lentils",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "cumin",
      "paprika",
      "vegetable broth",
      "olive oil",
      "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
  },
  {
    id: 2,
    title: "Vegetarian Pesto Pasta",
    image: "./chicken.webp",
    readyInMinutes: 25,
    servings: 2,
    sourceUrl: "https://example.com/vegetarian-pesto-pasta",
    diets: ["vegetarian"],
    cuisine: "Italian",
    ingredients: [
      "pasta",
      "basil",
      "parmesan cheese",
      "garlic",
      "pine nuts",
      "olive oil",
      "salt",
      "black pepper"
    ],
    pricePerServing: 3.0,
    popularity: 92
  },
  {
    id: 3,
    title: "Gluten-Free Chicken Stir-Fry",
    image: "./chicken.webp",
    readyInMinutes: 20,
    servings: 3,
    sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
    diets: ["gluten-free"],
    cuisine: "Asian",
    ingredients: [
      "chicken breast",
      "broccoli",
      "bell pepper",
      "carrot",
      "soy sauce (gluten-free)",
      "ginger",
      "garlic",
      "sesame oil",
      "cornstarch",
      "green onion",
      "sesame seeds",
      "rice"
    ],
    pricePerServing: 4.0,
    popularity: 78
  },
  {
    id: 4,
    title: "Dairy-Free Tacos",
    image: "./chicken.webp",
    readyInMinutes: 15,
    servings: 2,
    sourceUrl: "https://example.com/dairy-free-tacos",
    diets: ["dairy-free"],
    cuisine: "Mexican",
    ingredients: [
      "corn tortillas",
      "ground beef",
      "taco seasoning",
      "lettuce",
      "tomato",
      "avocado"
    ],
    pricePerServing: 2.8,
    popularity: 88
  },
  {
    id: 5,
    title: "Middle Eastern Hummus",
    image: "./chicken.webp",
    readyInMinutes: 10,
    servings: 4,
    sourceUrl: "https://example.com/middle-eastern-hummus",
    diets: ["vegan", "gluten-free"],
    cuisine: "Middle Eastern",
    ingredients: [
      "chickpeas",
      "tahini",
      "garlic",
      "lemon juice",
      "olive oil"
    ],
    pricePerServing: 1.5,
    popularity: 95
  },
  {
    id: 6,
    title: "Quick Avocado Toast",
    image: "./chicken.webp",
    readyInMinutes: 5,
    servings: 1,
    sourceUrl: "https://example.com/quick-avocado-toast",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "bread",
      "avocado",
      "lemon juice",
      "salt"
    ],
    pricePerServing: 2.0,
    popularity: 90
  },
  {
    id: 7,
    title: "Beef Stew",
    image: "./chicken.webp",
    readyInMinutes: 90,
    servings: 5,
    sourceUrl: "https://example.com/beef-stew",
    diets: [],
    cuisine: "European",
    ingredients: [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "beef broth",
      "red wine",
      "bay leaves",
      "thyme",
      "salt",
      "black pepper",
      "butter",
      "flour",
      "celery",
      "mushrooms"
    ],
    pricePerServing: 5.5,
    popularity: 80
  }
]

// Function to render recipe cards
function renderRecipes(recipesArray) {
  const container = document.querySelector('.recipe-card-container');
  container.innerHTML = ""; // Clear previous cards

  recipesArray.forEach(recipe => {
    const card = document.createElement('article');
    card.className = 'recipe-card';

    card.innerHTML = `
      <img class="recipe-images" src="${recipe.image}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
      <hr>
      <h4>Ready in: ${recipe.readyInMinutes} min | Servings: ${recipe.servings}</h4>
      <h4>Cuisine: ${recipe.cuisine}</h4>
      <hr>
      <h4>Ingredients</h4>
      <ul>
        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>
      <p><a href="${recipe.sourceUrl}" target="_blank">View Recipe</a></p>
    `;

    container.appendChild(card);
  });
}