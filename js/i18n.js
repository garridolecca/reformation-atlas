export let lang = "en";
export function setLang(newLang) { lang = newLang; }

const ui = {
  en: {
    appTitle: "The Reformation Atlas", appSubtitle: "Interactive Historical Atlas",
    splashVerse: '"The just shall live by faith."', splashVerseRef: "Romans 1:17",
    chipAll: "All Eras", chip1: "Pre-Reformation", chip2: "Lutheran", chip3: "Reformed", chip4: "Post-Reformation",
    btnTimeline: "Timeline", btnFigures: "Figures", btnNames: "Names",
    infoTitle: "About This Map", infoLegendTitle: "Four Eras", infoFeaturesTitle: "Features",
    infoFeature1: "30+ historical locations across Europe",
    infoFeature2: "Click any location to read detailed historical narratives",
    infoFeature3: "Filter by era to explore specific periods",
    infoFeature4: "Navigate between stops with Previous / Next buttons",
    infoFeature5: "Toggle between historical and modern place names",
    infoVerse: '"For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth." — Romans 1:16',
    donateTitle: "Support This Project",
    donateText: "This interactive map was built to preserve and share the rich heritage of the Protestant Reformation. If you find it helpful, consider supporting the project.",
    donateButton: "Donate", donateEmailLabel: "Feedback or questions?",
    sheetModernLabel: "Modern:", sheetRegionLabel: "Region:",
    showingHistorical: "Showing: Historical Names", showingModern: "Showing: Modern Names",
  },
  es: {
    appTitle: "Atlas de la Reforma", appSubtitle: "Atlas Histórico Interactivo",
    splashVerse: '"El justo por la fe vivirá."', splashVerseRef: "Romanos 1:17",
    chipAll: "Todas las Eras", chip1: "Pre-Reforma", chip2: "Luterana", chip3: "Reformada", chip4: "Post-Reforma",
    btnTimeline: "Cronología", btnFigures: "Figuras", btnNames: "Nombres",
    infoTitle: "Sobre Este Mapa", infoLegendTitle: "Cuatro Eras", infoFeaturesTitle: "Características",
    infoFeature1: "Más de 30 ubicaciones históricas en Europa",
    infoFeature2: "Haga clic en cualquier ubicación para leer narrativas detalladas",
    infoFeature3: "Filtre por era para explorar períodos específicos",
    infoFeature4: "Navegue entre paradas con los botones Anterior / Siguiente",
    infoFeature5: "Alterne entre nombres históricos y modernos",
    infoVerse: '"Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree." — Romanos 1:16',
    donateTitle: "Apoya Este Proyecto",
    donateText: "Este mapa interactivo fue creado para preservar y compartir la rica herencia de la Reforma Protestante.",
    donateButton: "Donar", donateEmailLabel: "¿Comentarios o preguntas?",
    sheetModernLabel: "Moderno:", sheetRegionLabel: "Región:",
    showingHistorical: "Mostrando: Nombres Históricos", showingModern: "Mostrando: Nombres Modernos",
  },
};

export function t(key) { return ui[lang]?.[key] || ui.en[key] || key; }

const eraTranslations = {
  en: {
    1: { name: "Pre-Reformation", shortName: "Pre-Reformation", dateRange: "1370–1517", description: "From Wycliffe to the eve of Luther's protest — early voices demanding reform." },
    2: { name: "Lutheran Reformation", shortName: "Lutheran", dateRange: "1517–1555", description: "Luther's 95 Theses ignite the Reformation, from Wittenberg to the Peace of Augsburg." },
    3: { name: "Reformed & Radical Reformation", shortName: "Reformed", dateRange: "1519–1598", description: "Zwingli, Calvin, Knox, and the Anabaptists extend reform across Europe." },
    4: { name: "Post-Reformation & Legacy", shortName: "Post-Reformation", dateRange: "1598–1689", description: "Westminster Assembly, Synod of Dort, and confessional consolidation." },
  },
  es: {
    1: { name: "Pre-Reforma", shortName: "Pre-Reforma", dateRange: "1370–1517", description: "Desde Wycliffe hasta la víspera de Lutero — voces tempranas exigiendo reforma." },
    2: { name: "Reforma Luterana", shortName: "Luterana", dateRange: "1517–1555", description: "Las 95 Tesis de Lutero encienden la Reforma, desde Wittenberg hasta la Paz de Augsburgo." },
    3: { name: "Reforma Reformada y Radical", shortName: "Reformada", dateRange: "1519–1598", description: "Zuinglio, Calvino, Knox y los anabautistas extienden la reforma por Europa." },
    4: { name: "Post-Reforma y Legado", shortName: "Post-Reforma", dateRange: "1598–1689", description: "La Asamblea de Westminster, el Sínodo de Dort y la consolidación confesional." },
  },
};

export function eraText(eraId, field) { return eraTranslations[lang]?.[eraId]?.[field] || eraTranslations.en[eraId]?.[field] || ""; }
const locationTranslations = { es: {} };
export function locationText(locId, field) { return locationTranslations[lang]?.[locId]?.[field] || null; }
export function eventText(locId, year, field) { return null; }