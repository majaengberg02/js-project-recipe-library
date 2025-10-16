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

// Fetch recipes from data.js
 const recipes = getRecipes(); 

// Function to render recipe cards
function renderRecipes(recipesArray) {
  const container = document.querySelector('.recipe-card-container');
  container.innerHTML = ""; // Clear previous cards

  recipesArray.forEach(recipe => {
    const card = document.createElement('article');
    card.className = 'recipe-card';

    // Recipe card content
    let content = `
     <img class="recipe-images" src="${recipe.image}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
      <hr>
      <h4>Ready in: ${recipe.readyInMinutes} min | Servings: ${recipe.servings}</h4> 
    `;
    if (recipe.diets.length > 0) {
      content += `<h4>Diet: ${recipe.diets.join(', ')}</h4>`;
    }

    content += `<hr>
      <h4>Ingredients</h4>
      <ul>
        ${recipe.extendedIngredients.map(ing => `<li>${ing.name}</li>`).join('')}
      </ul>
      <p><a href="${recipe.sourceUrl}" target="_blank">View Recipe</a></p>
    `;
    
    card.innerHTML = content;

    container.appendChild(card);
  });
}