const header = document.querySelector(".site-header");
const nav = document.getElementById("site-nav");
const navToggle = document.querySelector(".nav-toggle");
const filters = document.querySelectorAll(".filter");
const items = document.querySelectorAll("[data-tags]");
const count = document.getElementById("work-count");
const empty = document.getElementById("filter-empty");
const copyButton = document.getElementById("copy-email");
const sections = document.querySelectorAll("main section[id]");
const email = "hugoguerra205@gmail.com";

function onScroll() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);

  const marker = window.scrollY + header.offsetHeight + 32;
  let current = "";
  sections.forEach((section) => {
    if (section.offsetTop <= marker) current = section.id;
  });

  nav.querySelectorAll("a").forEach((link) => {
    const active = link.getAttribute("href") === `#${current}`;
    if (active) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

function closeNav() {
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.textContent = "Menu";
}

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.textContent = open ? "Close" : "Menu";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNav();
});

function applyFilter(key) {
  let visible = 0;

  items.forEach((item) => {
    const tags = item.dataset.tags.split(" ");
    const show = key === "all" || tags.includes(key);
    item.hidden = !show;
    if (show && item.classList.contains("project")) visible += 1;
  });

  filters.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === key));
  });

  const names = {
    sql: "SQL",
    python: "Python",
    r: "R",
    excel: "Excel",
    powerbi: "Power BI",
  };
  const label = visible === 1 ? "1 project" : `${visible} projects`;
  count.textContent = key === "all" ? label : `${label} · ${names[key]}`;
  empty.hidden = visible !== 0;
}

filters.forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = "Copied";
  } catch {
    copyButton.textContent = email;
  }
  window.setTimeout(() => {
    copyButton.textContent = "Copy email";
  }, 1800);
});

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
