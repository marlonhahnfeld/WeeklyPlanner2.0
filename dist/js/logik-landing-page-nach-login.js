const sideBarMenu = document.getElementById("Menu-Field");
const dropdownButton = document.getElementById("Dropdown-Button");
const dropdownMenu = document.getElementById("User-Dropdown-Menu");

function showUserMenu() {
  dropdownMenu.classList.toggle("hidden");
}

function showSideMenu() {
  sideBarMenu.classList.toggle("hidden");
}