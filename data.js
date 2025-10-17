
function getRecipes() {

  // Calling the API
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api.spoonacular.com/recipes/random?apiKey=24c0ad763b794214b472e5a5e70fac09&number=16&includeNutrition=false", false);
  xhttp.send();

  // Checking for response
  if (xhttp.status == 200) {
  // response ok
  resp = xhttp.responseText;
  respObj = JSON.parse(resp);
  return respObj.recipes
}
  // Daily quota reached message
  if (xhttp.status == 402) {
  card.innerHTML = "<p>Daily quota reached. Please try agan tomorrow.</p>";
  return [];
}
  // Other error message
  else {
  card.innerHTML = "<p>Something went wrong. Please try again later.</p>";
  return [];
}
}