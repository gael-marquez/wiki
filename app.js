(function () {
  const grid = document.getElementById("resourceGrid");
  const filterBar = document.getElementById("filterBar");
  const searchInput = document.getElementById("searchInput");
  const countLabel = document.getElementById("countLabel");
  const emptyState = document.getElementById("emptyState");

  const subFilterBar = document.getElementById("subFilterBar");

  let activeCategory = "Todos";
  let activeSub = null;
  let searchTerm = "";

  // Normaliza texto para búsquedas sin distinguir mayúsculas ni acentos.
  function norm(s) {
    return (s || "").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  const categoryStyles = {
    "Síntomas": { bg: "bg-purple-100", text: "text-purple-800", ring: "ring-purple-200" },
    "Diagnóstico": { bg: "bg-violet-100", text: "text-violet-800", ring: "ring-violet-200" },
    "Educación básica": { bg: "bg-fuchsia-100", text: "text-fuchsia-800", ring: "ring-fuchsia-200" },
    "Mapeo": { bg: "bg-pink-100", text: "text-pink-800", ring: "ring-pink-200" },
    "Asociación de enfermedades": { bg: "bg-rose-100", text: "text-rose-800", ring: "ring-rose-200" },
    "Endometrioma": { bg: "bg-amber-100", text: "text-amber-800", ring: "ring-amber-200" },
    "Miomectomía": { bg: "bg-yellow-100", text: "text-yellow-800", ring: "ring-yellow-200" },
    "Infertilidad": { bg: "bg-sky-100", text: "text-sky-800", ring: "ring-sky-200" },
    "Cirugía Robótica": { bg: "bg-teal-100", text: "text-teal-800", ring: "ring-teal-200" },
    "Cirugía reconstructiva": { bg: "bg-emerald-100", text: "text-emerald-800", ring: "ring-emerald-200" },
    "Cirugía abierta": { bg: "bg-indigo-100", text: "text-indigo-800", ring: "ring-indigo-200" },
    "Cirugía y recuperación": { bg: "bg-purple-100", text: "text-purple-800", ring: "ring-purple-200" },
    "Recurrencia": { bg: "bg-violet-100", text: "text-violet-800", ring: "ring-violet-200" },
    "Tratamiento": { bg: "bg-fuchsia-100", text: "text-fuchsia-800", ring: "ring-fuchsia-200" },
    "Prolapso": { bg: "bg-pink-100", text: "text-pink-800", ring: "ring-pink-200" },
    "Kegel": { bg: "bg-rose-100", text: "text-rose-800", ring: "ring-rose-200" },
    "Fisioterapia": { bg: "bg-amber-100", text: "text-amber-800", ring: "ring-amber-200" },
    "Sistema nervioso": { bg: "bg-yellow-100", text: "text-yellow-800", ring: "ring-yellow-200" },
    "Adherencias": { bg: "bg-sky-100", text: "text-sky-800", ring: "ring-sky-200" },
    "Alimentación": { bg: "bg-teal-100", text: "text-teal-800", ring: "ring-teal-200" },
    "Suplementación": { bg: "bg-emerald-100", text: "text-emerald-800", ring: "ring-emerald-200" },
    "Microbiota": { bg: "bg-indigo-100", text: "text-indigo-800", ring: "ring-indigo-200" },
    "Analítica": { bg: "bg-purple-100", text: "text-purple-800", ring: "ring-purple-200" },
    "Infección vaginal": { bg: "bg-violet-100", text: "text-violet-800", ring: "ring-violet-200" },
    "Funcional": { bg: "bg-fuchsia-100", text: "text-fuchsia-800", ring: "ring-fuchsia-200" },
    "Dolor": { bg: "bg-pink-100", text: "text-pink-800", ring: "ring-pink-200" },
    "En vivo": { bg: "bg-rose-100", text: "text-rose-800", ring: "ring-rose-200" },
    "Vejiga": { bg: "bg-amber-100", text: "text-amber-800", ring: "ring-amber-200" },
    "Faja": { bg: "bg-yellow-100", text: "text-yellow-800", ring: "ring-yellow-200" },
    "Reemplazo hormonal": { bg: "bg-sky-100", text: "text-sky-800", ring: "ring-sky-200" },
    "Menopausia": { bg: "bg-teal-100", text: "text-teal-800", ring: "ring-teal-200" },
    "Estudios Científicos": { bg: "bg-emerald-100", text: "text-emerald-800", ring: "ring-emerald-200" },
    "Neuropelveología": { bg: "bg-indigo-100", text: "text-indigo-800", ring: "ring-indigo-200" },
    "Guías clínicas": { bg: "bg-purple-100", text: "text-purple-800", ring: "ring-purple-200" },
    "Incontinencia": { bg: "bg-violet-100", text: "text-violet-800", ring: "ring-violet-200" }
  };

  // Macro-categorías: agrupan las categorías específicas para que el filtro
  // sea más cómodo (sobre todo en celular). La tarjeta sigue mostrando su
  // categoría específica como etiqueta.
  const macroGroups = [
    { name: "Educación básica",      cats: ["Educación básica", "Asociación de enfermedades", "Estudios Científicos", "Guías clínicas", "En vivo"] },
    { name: "Síntomas y dolor",      cats: ["Síntomas", "Dolor", "Sistema nervioso", "Infección vaginal"] },
    { name: "Diagnóstico y mapeo",   cats: ["Diagnóstico", "Mapeo", "Analítica", "Neuropelveología", "Endometrioma"] },
    { name: "Cirugía y recuperación",cats: ["Cirugía y recuperación", "Cirugía Robótica", "Cirugía reconstructiva", "Cirugía abierta", "Miomectomía", "Recurrencia", "Adherencias"] },
    { name: "Suelo pélvico",         cats: ["Fisioterapia", "Kegel", "Prolapso", "Faja", "Incontinencia", "Vejiga"] },
    { name: "Tratamiento médico",    cats: ["Tratamiento", "Funcional"] },
    { name: "Hormonas y fertilidad", cats: ["Menopausia", "Reemplazo hormonal", "Infertilidad"] },
    { name: "Nutrición y microbiota",cats: ["Alimentación", "Suplementación", "Microbiota"] }
  ];

  const categoryToMacro = {};
  macroGroups.forEach(g => g.cats.forEach(c => { categoryToMacro[c] = g.name; }));

  function macroOf(category) {
    return categoryToMacro[category] || "Otros";
  }

  function getMacros() {
    const present = new Set(resources.map(r => macroOf(r.category)));
    const ordered = macroGroups.map(g => g.name).filter(n => present.has(n));
    if (present.has("Otros")) ordered.push("Otros");
    return ordered;
  }

  // Sub-categorías específicas presentes dentro de un macro-filtro.
  function getSubcategories(macro) {
    const group = macroGroups.find(g => g.name === macro);
    if (!group) return [];
    const present = new Set(resources.map(r => r.category));
    return group.cats.filter(c => present.has(c));
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
    const categories = ["Todos", ...getMacros()];
    filterBar.innerHTML = "";
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.category = cat;
      btn.textContent = cat;
      btn.className = filterButtonClasses(cat === activeCategory);
      btn.addEventListener("click", () => {
        activeCategory = cat;
        activeSub = null;
        renderFilters();
        renderSubFilters();
        renderGrid();
      });
      filterBar.appendChild(btn);
    });
  }

  function filterButtonClasses(isActive) {
    const base = "whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-semibold transition-colors duration-150 border";
    if (isActive) {
      return base + " bg-brand-lilac text-white border-brand-lilac shadow-sm";
    }
    return base + " bg-white text-slate-600 border-slate-200 hover:bg-brand-lilacLight hover:border-purple-200";
  }

  function makeSubChip(label, isActive) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    const base = "whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-colors border";
    b.className = base + (isActive
      ? " bg-brand-lilacDark text-white border-brand-lilacDark"
      : " bg-white text-slate-500 border-slate-200 hover:bg-brand-lilacLight hover:border-purple-200");
    return b;
  }

  // Segunda fila de filtros: las categorías específicas dentro del macro activo.
  function renderSubFilters() {
    if (!subFilterBar) return;
    const subs = activeCategory === "Todos" ? [] : getSubcategories(activeCategory);
    if (subs.length <= 1) {
      subFilterBar.style.display = "none";
      subFilterBar.innerHTML = "";
      return;
    }
    subFilterBar.style.display = "flex";
    subFilterBar.innerHTML = "";

    const label = document.createElement("span");
    label.className = "flex-shrink-0 self-center text-xs font-medium text-slate-400 mr-1";
    label.textContent = "Específico:";
    subFilterBar.appendChild(label);

    const allChip = makeSubChip("Todas", activeSub === null);
    allChip.addEventListener("click", () => { activeSub = null; renderSubFilters(); renderGrid(); });
    subFilterBar.appendChild(allChip);

    subs.forEach(sub => {
      const chip = makeSubChip(sub, activeSub === sub);
      chip.addEventListener("click", () => {
        activeSub = (activeSub === sub) ? null : sub;
        renderSubFilters();
        renderGrid();
      });
      subFilterBar.appendChild(chip);
    });
  }

  function platformColor(name) {
    switch (name) {
      case "Instagram": return "text-pink-600";
      case "Facebook":  return "text-blue-600";
      case "YouTube":   return "text-red-600";
      case "TikTok":    return "text-slate-700";
      default:          return "text-slate-400";
    }
  }

  function renderGrid() {
    const term = norm(searchTerm.trim());
    const filtered = resources.filter(r => {
      const inMacro = activeCategory === "Todos" || macroOf(r.category) === activeCategory;
      const inSub = !activeSub || r.category === activeSub;
      const matchesSearch = !term ||
        norm(r.title).includes(term) ||
        norm(r.category).includes(term) ||
        norm(macroOf(r.category)).includes(term) ||
        (r.doctor && norm(r.doctor).includes(term));
      return inMacro && inSub && matchesSearch;
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

  function applyMacroFilter(macro, sub) {
    activeCategory = macro;
    activeSub = sub || null;
    searchInput.value = "";
    searchTerm = "";
    renderFilters();
    renderSubFilters();
    renderGrid();
    const repo = document.getElementById("repositorio");
    if (repo) repo.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function buildCard(resource, index) {
    const card = document.createElement("article");
    card.className = "bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col p-5 fade-in-up";
    card.style.animationDelay = Math.min(index, 12) * 25 + "ms";

    const style = categoryStyles[resource.category] || { bg: "bg-slate-100", text: "text-slate-700", ring: "ring-slate-200" };
    const platformName = detectPlatform(resource.url);

    const badge = document.createElement("button");
    badge.type = "button";
    badge.className = "inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold ring-1 ring-inset cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-lilac transition " + style.bg + " " + style.text + " " + style.ring;
    badge.textContent = resource.category;
    badge.title = "Filtrar por “" + resource.category + "”";
    badge.setAttribute("aria-label", "Filtrar por " + resource.category);
    badge.addEventListener("click", function () {
      applyMacroFilter(macroOf(resource.category), resource.category);
    });

    const title = document.createElement("h3");
    title.className = "text-base font-semibold text-slate-800 mt-3 leading-snug";
    title.textContent = resource.title;

    let doctorLine = null;
    if (resource.doctor) {
      doctorLine = document.createElement("span");
      doctorLine.className = "inline-flex items-center gap-1 text-xs text-slate-400 mt-1";
      doctorLine.innerHTML =
        '<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>' +
        '<span></span>';
      doctorLine.querySelector("span").textContent = resource.doctor;
    }

    const platform = document.createElement("span");
    platform.className = "inline-flex items-center gap-1.5 text-xs font-medium mt-2 " + platformColor(platformName);
    platform.innerHTML =
      '<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>' +
      '<span>' + platformName + '</span>';

    const spacer = document.createElement("div");
    spacer.className = "flex-1";

    const action = document.createElement("a");
    if (resource.url) {
      action.href = resource.url;
      action.target = "_blank";
      action.rel = "noopener noreferrer";
      action.className = "mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-lilac text-white text-sm font-semibold hover:bg-brand-lilacDark transition-colors";
      action.innerHTML = 'Ver contenido <span aria-hidden="true">&rarr;</span>';
    } else {
      action.className = "mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 text-slate-400 text-sm font-semibold cursor-not-allowed";
      action.textContent = "Sin enlace disponible";
      action.setAttribute("aria-disabled", "true");
      action.addEventListener("click", e => e.preventDefault());
    }

    card.appendChild(badge);
    card.appendChild(title);
    if (doctorLine) card.appendChild(doctorLine);
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
  renderSubFilters();
  renderGrid();
})();
