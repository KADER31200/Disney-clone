const translations = {
  fr: {
    pageTitle:    "Disney+ Clone",
    langLabel:    "Langue :",
    heroTitle:    "Des classiques incontournables, des nouveautés et des originaux Disney+.",
    heroBtn:      "Commencer",
    heroSubtext:  "À partir de 5,99 € par mois. Sans frais supplémentaires. Sans engagement*\.\nProfitez de 12 mois au prix de 10 mois avec un abonnement Premium ou Standard annuel.",
    heroFootnote: "* La résiliation prend effet à la fin de la période d’abonnement en cours. Abonnement requis. 5,99 €/mois pour Standard avec pub.",
    footerText:   "© 2025 Disney et ses sociétés affiliées. Tous droits réservés."
  },
  en: {
    pageTitle:    "Disney+ Clone",
    langLabel:    "Language:",
    heroTitle:    "All the classics, new releases, and Disney+ Originals.",
    heroBtn:      "Get Started",
    heroSubtext:  "From €5.99/month. No hidden fees. No commitment*\.\nEnjoy 12 months for the price of 10 with an annual Premium or Standard plan.",
    heroFootnote: "* Cancellation takes effect at the end of the current billing period. Subscription required. €5.99/month for Standard with ads.",
    footerText:   "© 2025 Disney and its affiliated companies. All rights reserved."
  },
  de: {
    pageTitle:    "Disney+ Klon",
    langLabel:    "Sprache:",
    heroTitle:    "Unverzichtbare Klassiker, Neuheiten und Disney+ Originals.",
    heroBtn:      "Loslegen",
    heroSubtext:  "Ab 5,99 € pro Monat. Keine Zusatzkosten. Keine Bindung*\.\nGenießen Sie 12 Monate zum Preis von 10 Monaten mit einem Premium- oder Standard-Jahresabo.",
    heroFootnote: "* Die Kündigung erfolgt am Ende der aktuellen Laufzeit. Abo erforderlich. 5,99 €/Monat für Standard mit Werbung.",
    footerText:   "© 2025 Disney und angeschlossene Unternehmen. Alle Rechte vorbehalten."
  },
  es: {
    pageTitle:    "Disney+ Clon",
    langLabel:    "Idioma:",
    heroTitle:    "Clásicos imprescindibles, estrenos y Originals de Disney+.",
    heroBtn:      "Comenzar",
    heroSubtext:  "Desde 5,99 € al mes. Sin cargos ocultos. Sin compromiso*\.\nDisfruta 12 meses al precio de 10 con suscripción anual Premium o Standard.",
    heroFootnote: "* La cancelación se efectúa al final del periodo de facturación actual. Suscripción requerida. 5,99 €/mes en Standard con anuncios.",
    footerText:   "© 2025 Disney y sus empresas afiliadas. Todos los derechos reservados."
  }
};

// Récupère la langue choisie (localStorage > navigateur)
function getLanguage() {
  let lang = localStorage.getItem('lang') || navigator.language.slice(0,2) || 'fr';
  if (!translations[lang]) lang = 'fr';
  return lang;
}

const lang = getLanguage();
localStorage.setItem('lang', lang);
document.documentElement.lang = lang;

// Initialise le sélecteur
window.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('lang-select');
  if (select) {
    select.value = lang;
    select.addEventListener('change', e => {
      localStorage.setItem('lang', e.target.value);
      window.location.reload();
    });
  }

  // Applique les traductions
  document.querySelectorAll('[data-i18n-key]').forEach(el => {
    const key = el.getAttribute('data-i18n-key');
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
});
