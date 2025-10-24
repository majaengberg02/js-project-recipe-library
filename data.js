function getRecipes() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api.spoonacular.com/recipes/random?apiKey=24c0ad763b794214b472e5a5e70fac09&number=20&includeNutrition=false", false);
  xhttp.send();

  if (xhttp.status === 200) {
    const respObj = JSON.parse(xhttp.responseText);
    return { recipes: respObj.recipes, error: null };
  } else if (xhttp.status === 402) {
    return { recipes: [], error: "Daily quota reached. Please try again tomorrow." };
  } else {
    return { recipes: [], error: "Something went wrong. Please try again later." };
  }
}