document.addEventListener("click", (e) => {
  if (e === null || e.target === null) return;

  let anchor;
  const indicator = document.querySelector("[data-indicator]");
  // @ts-expect-error
  if (e.target.matches("a")) {
    anchor = e.target;
  } else {
    // @ts-expect-error
    anchor = e.target.closest("a");
  }
  if (anchor != null) {
    // @ts-expect-error
    const allAnchors = [...document.querySelectorAll("a")];
    const index = allAnchors.indexOf(anchor);
    // @ts-expect-error
    indicator.style.setProperty("--position", index);
    document.querySelectorAll("a").forEach((elem) => {
      elem.classList.remove("active");
    });
    anchor.classList.add("active");
  }
});
