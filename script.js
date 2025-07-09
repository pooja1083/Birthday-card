/* ---------- existing heart generator ---------- */
const heartsContainer = document.getElementById("hearts");
for (let i = 0; i < 20; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDelay = Math.random() * 5 + "s";
  const shades = ["#f8bbd0", "#f48fb1", "#f06292"];
  heart.style.background = shades[Math.floor(Math.random() * shades.length)];
  heartsContainer.appendChild(heart);
}

/* ---------- NEW: rose‑petal generator ---------- */
const petalsContainer = document.getElementById("petals");
for (let i = 0; i < 30; i++) {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  // Random start X position
  petal.style.left = Math.random() * 100 + "%";

  // Stagger animation start & vary speed
  petal.style.animationDelay = Math.random() * 8 + "s";
  petal.style.animationDuration = 6 + Math.random() * 4 + "s";

  // Alternate a few slightly different colors for depth
  const petalColors = ["#e91e63", "#d81b60", "#f06292"];
  petal.style.background = petalColors[Math.floor(Math.random() * petalColors.length)];

  petalsContainer.appendChild(petal);
}
