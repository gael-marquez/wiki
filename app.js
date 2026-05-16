(function () {
  const grid = document.getElementById("resourceGrid");
  const filterBar = document.getElementById("filterBar");
  const searchInput = document.getElementById("searchInput");
  const countLabel = document.getElementById("countLabel");
  const emptyState = document.getElementById("emptyState");

  let activeCategory = "Todos";
  let searchTerm = "";

  const categoryStyles = {
    "Diagnóstico y Mapeo":                 { bg: "bg-purple-100",  text: "text-purple-800",  ring: "ring-purple-200" },
    "Adenomiosis / Endometriosis / Miomas":{ bg: "bg-yellow-100",  text: "text-yellow-800",  ring: "ring-yellow-200" },
    "Cirugía y Recuperación":              { bg: "bg-violet-100",  text: "text-violet-800",  ring: "ring-violet-200" },
    "Suelo Pélvico y Prolapsos":           { bg: "bg-amber-100",   text: "text-amber-800",   ring: "ring-amber-200" },
    "Síntomas Neurológicos y Sistémicos":  { bg: "bg-fuchsia-100", text: "text-fuchsia-800", ring: "ring-fuchsia-200" },
    "Hormonas / Endocrino / Menopausia":   { bg: "bg-yellow-100",  text: "text-yellow-900",  ring: "ring-yellow-200" },
    "Nutrición / Microbiota / Inflamación":{ bg: "bg-purple-100",  text: "text-purple-900",  ring: "ring-purple-200" }
  };

  function getCategories() {
    const seen = new Set();
    const ordered = [];
    resources.forEach(r => {
      if (!seen.has(r.category)) {
        seen.add(r.category);
        ordered.push(r.category);
      }
    });
    return ordered;
  }

  function detectPlatform(url) {
    if (!url) return "Sin enlace";
    if (url.includes("tiktok"))    return "TikTok";
    if (url.includes("instagram")) return "Instagram";
    if (url.includes("facebook"))  return "Facebook";
    if (url.includes("youtube") || url.includes("youtu.be")) return "YouTube";
    return "Enlace";
  }

  function renderFilters() {
    const categories = ["Todos", ...getCategories()];
    filterBar.innerHTML = "";
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.category = cat;
      btn.textContent = cat;
      btn.className = filterButtonClasses(cat === activeCategory);
      btn.addEventListener("click", () => {
        activeCategory = cat;
        renderFilters();
        renderGrid();
      });
      filterBar.appendChild(btn);
    });
  }

  function filterButtonClasses(isActive) {
    const base = "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 border";
    if (isActive) {
      return base + " bg-purple-600 text-white border-purple-600 shadow-sm";
    }
    return base + " bg-white text-slate-700 border-slate-200 hover:bg-purple-50 hover:border-purple-200";
  }

  function renderGrid() {
    const term = searchTerm.trim().toLowerCase();
    const filtered = resources.filter(r => {
      const matchesCategory = activeCategory === "Todos" || r.category === activeCategory;
      const matchesSearch = !term ||
        r.title.toLowerCase().includes(term) ||
        r.category.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });

    countLabel.textContent = filtered.length === 1
      ? "1 tema"
      : filtered.length + " temas";

    grid.innerHTML = "";

    if (filtered.length === 0) {
      emptyState.classList.remove("hidden");
      return;
    }
    emptyState.classList.add("hidden");

    filtered.forEach((r, i) => grid.appendChild(buildCard(r, i)));
  }

  function buildCard(resource, index) {
    const card = document.createElement("article");
    card.className = "bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col p-5 fade-in-up";
    card.style.animationDelay = Math.min(index, 12) * 25 + "ms";

    const style = categoryStyles[resource.category] || { bg: "bg-slate-100", text: "text-slate-700", ring: "ring-slate-200" };

    const badge = document.createElement("span");
    badge.className = "inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-medium ring-1 ring-inset " + style.bg + " " + style.text + " " + style.ring;
    badge.textContent = resource.category;

    const platform = document.createElement("span");
    platform.className = "text-xs text-slate-500 mt-3";
    platform.textContent = detectPlatform(resource.url);

    const title = document.createElement("h3");
    title.className = "text-base font-semibold text-slate-800 mt-2 leading-snug";
    title.textContent = resource.title;

    const spacer = document.createElement("div");
    spacer.className = "flex-1";

    const action = document.createElement("a");
    if (resource.url) {
      action.href = resource.url;
      action.target = "_blank";
      action.rel = "noopener noreferrer";
      action.className = "mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors";
      action.innerHTML = 'Ver contenido <span aria-hidden="true">&rarr;</span>';
    } else {
      action.className = "mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-400 text-sm font-medium cursor-not-allowed";
      action.textContent = "Sin enlace disponible";
      action.setAttribute("aria-disabled", "true");
      action.addEventListener("click", e => e.preventDefault());
    }

    card.appendChild(badge);
    card.appendChild(title);
    card.appendChild(platform);
    card.appendChild(spacer);
    card.appendChild(action);
    return card;
  }

  searchInput.addEventListener("input", e => {
    searchTerm = e.target.value;
    renderGrid();
  });

  renderFilters();
  renderGrid();
})();
