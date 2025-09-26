document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("filter-placeholder");

  // Map filter values to messages
  const dietMessages = {
    "all": "Showing all recipes.",
    "vegetarian": "Showing only vegetarian recipes.",
    "vegan": "Showing only vegan recipes.",
    "gluten-free": "Showing only gluten-free recipes.",
    "dairy-free": "Showing only dairy-free recipes."
  };

  const sortMessages = {
    "desc": "Sorted by time: longest to shortest.",
    "asc": "Sorted by time: shortest to longest."
  };

  // Function to update the placeholder message
  function updateMessage() {
    const dietInput = document.querySelector('input[name="diet"]:checked'); 
    const sortInput = document.querySelector('input[name="sort-time"]:checked');
    const diet = dietInput ? dietInput.value : null; 
    const sort = sortInput ? sortInput.value : null;

    let dietMsg = diet ? dietMessages[diet] : "";
    let sortMsg = sort ? sortMessages[sort] : ""; 

    // Use <div> for separation and add margin for spacing
    placeholder.innerHTML = `
      <div style="margin-bottom: 20px;">${dietMsg}</div>
      <div>${sortMsg}</div>
    `;
  }

  // Add event listeners to all filter and sort radio buttons
  document.querySelectorAll('input[name="diet"], input[name="sort-time"]').forEach(input => {
    input.addEventListener("change", updateMessage);
  });

  // Set initial message
  updateMessage();
});