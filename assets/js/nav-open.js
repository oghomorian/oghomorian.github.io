document.addEventListener("DOMContentLoaded", function () {
  const link = document.querySelector('.site-nav a[href="/current/"]');
  const navItem = link?.closest(".nav-list-item");
  const subList = navItem?.querySelector("ul.nav-list");
  const expander = navItem?.querySelector("button.nav-list-expander");

  if (subList) subList.style.display = "block";
  if (expander) {
    expander.disabled = true;
    expander.setAttribute("aria-pressed", "true");
    expander.style.cursor = "default";
    expander.style.opacity = "0.5";
    expander.addEventListener("click", e => e.preventDefault());
  }
});

