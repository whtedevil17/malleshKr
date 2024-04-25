function showDetails() {
  var details = document.getElementById("details");
  var button = document.querySelector("button");

  if (details.style.display === "none") {
    details.style.display = "block";
    button.textContent = "Hide Details";
  } else {
    details.style.display = "none";
    button.textContent = "Show More Details";
  }
}

