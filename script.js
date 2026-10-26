document.querySelector(".signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "You're in!";
  button.disabled = true;
});

const menuButton = document.querySelector(".menu-button");
const menuClose = document.querySelector(".menu-close");
const siteMenu = document.querySelector(".site-menu");
const menuLinks = document.querySelectorAll(".site-menu-links a");
siteMenu.inert = true;

const setMenuOpen = (isOpen) => {
  document.body.classList.toggle("menu-open", isOpen);
  siteMenu.classList.toggle("is-open", isOpen);
  siteMenu.inert = !isOpen;
  siteMenu.setAttribute("aria-hidden", String(!isOpen));
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  if (isOpen) {
    menuClose.focus();
  } else {
    menuButton.focus();
  }
};

menuButton.addEventListener("click", () => {
  setMenuOpen(!siteMenu.classList.contains("is-open"));
});

menuClose.addEventListener("click", () => setMenuOpen(false));
menuLinks.forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteMenu.classList.contains("is-open")) {
    setMenuOpen(false);
  }
});
