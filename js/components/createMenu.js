export default function createMenu(){
    const container = document.querySelector(".menu-container");

    container.innerHTML = `<nav class="navbar">
    <div class="logo-border">
    <a href="/index.html">C.</a>
    </div>
  <ul class="nav-menu">
    <li class="nav-item">
      <a href="/index.html" class="nav-link">HOME</a>
    </li>
        <li class="nav-item">
      <a href="/all-products.html" class="nav-link">ABOUT</a>
    </li>
    <li class="nav-item">
        <a href="/cart.html"  class="nav-link">PROJECTS</a>
      </li>
      <li class="nav-item">
      <a href="/cart.html"  class="nav-link">CONTACT</a>
    </li>
  </ul>
  <div class="hamburger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</nav>`;


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
}