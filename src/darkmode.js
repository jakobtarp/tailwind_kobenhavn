export function darkMode() {
  const root = document.querySelector("html");
  const btn = document.querySelector("#toggle-btn");

  function toggleTheme() {
    root.classList.toggle("dark");
  }

  btn.addEventListener("click", toggleTheme);
}
