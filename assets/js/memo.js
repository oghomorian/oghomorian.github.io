document.addEventListener("DOMContentLoaded", () => {
  const pageKey = location.pathname;
  const memoCells = document.querySelectorAll(".memo-container");

  memoCells.forEach((cell, index) => {
    const key = `${pageKey}-memo-${index}`;
    const textarea = document.createElement("textarea");
    textarea.placeholder = "...";
    textarea.style.width = "100%";
    textarea.style.overflow = "hidden";
    textarea.rows = 1;
    textarea.value = localStorage.getItem(key) || "";

    cell.appendChild(textarea);

    const autoResize = () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    };

    autoResize();

    textarea.addEventListener("input", () => {
      localStorage.setItem(key, textarea.value);
      autoResize();
    });
  });
});

