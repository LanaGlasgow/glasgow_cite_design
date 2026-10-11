document.querySelector(".signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "You're in!";
  button.disabled = true;
});
