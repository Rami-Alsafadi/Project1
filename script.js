const menuOperButton = document.querySelector("#menu-open-button");
const menucloseButton = document.querySelector("#menu-close-button");

menuOperButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menucloseButton.addEventListener("click", () => menuOperButton.click ());