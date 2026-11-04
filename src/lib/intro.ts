// Home intro: shared by the root layout (server) and IntroReveal (client), so it lives in a
// plain module (a constant imported from a "use client" file would become a client reference).

export const INTRO_CLASS = "intro-pending";
export const INTRO_SEEN_KEY = "levexa-intro-seen";

// Runs in <head> before the page paints. On the first Home visit of a browser session it adds
// INTRO_CLASS to <html>, which keeps the page veiled (globals.css) until the intro takes over.
// "?intro" in the address forces a replay. If the intro never starts (JS error, very slow
// hydration), the timeout shows the page anyway, so content can never stay hidden.
export const INTRO_INIT_SCRIPT = `try{var d=document.documentElement,l=location;if(l.pathname==="/"&&(l.search.indexOf("intro")>-1||!sessionStorage.getItem("${INTRO_SEEN_KEY}"))&&!matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("${INTRO_CLASS}");setTimeout(function(){d.classList.remove("${INTRO_CLASS}")},4500)}}catch(e){}`;
