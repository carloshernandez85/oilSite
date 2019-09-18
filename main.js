//function expression to select elements
const selectElement = s => document.querySelector(s);

//open the menu on click
selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

//close the menu on click

selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});

// SCROLL, SCROLL, THE BUTTON, THE BUTTON, SCROLL SO SMOOTH LIKE THE 
// BUTTER ON THE MUFFIN 