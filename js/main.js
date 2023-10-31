// Hello there!
//
// If you want to add my games to your site, please reach out at my email: echo-the-coder@tuta.io, or discord: 3kh0_#6969

console.warn(
  "%cNote!",
  "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "If you want to add my games to your site, please reach out at my email: joshgueen@gmail.com\nPlease do not just add them without asking me first! Thank you!"
);

function script(text) {
  console.log("%cScript Injection", "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px", text);
}

// ====================================
// SCRIPT INJECTION
// ====================================
const gogascript27 = document.createElement("script");
gogascript27.setAttribute("async", "");
gogascript27.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-98DP5VKS42");
const inlinegogascript843 = document.createElement("script");
inlinegogascript843.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-98DP5VKS42');`;
document.head.append(gogascript27, inlinegogascript843);
script("Injected script 1/1 (Google Tag Manager)");
