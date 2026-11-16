import { profile } from "./config.js";
const base = import.meta.env.BASE_URL;
const url = (path) => base + path;
const navItems = [["Home","index.html"],["About","about.html"],["Projects","projects.html"],["Skills","skills.html"],["Contact","contact.html"]];

export function renderHeader() {
  const current = location.pathname.split("/").pop() || "index.html";
  const links = navItems.map(([label,path]) => `<a class="nav-link ${current===path?"active":""}" href="${url(path)}" ${current===path?'aria-current="page"':""}>${label}</a>`).join("");
  document.querySelector("#site-header").innerHTML = `<header class="site-header"><div class="container nav-wrap"><a class="brand" href="${url("index.html")}"><span class="brand-mark">L.</span>${profile.brand}</a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span></button><nav class="primary-nav" id="primary-nav" aria-label="Main navigation">${links}<a class="nav-cta" href="${url("contact.html")}">Let's talk ↗</a></nav></div></header>`;
  const toggle=document.querySelector(".menu-toggle"), nav=document.querySelector(".primary-nav");
  toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!open));toggle.setAttribute("aria-label",open?"Open navigation":"Close navigation");nav.classList.toggle("is-open",!open);});
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{toggle.setAttribute("aria-expanded","false");nav.classList.remove("is-open");}));
}
export function renderFooter() {
  document.querySelector("#site-footer").innerHTML=`<footer class="site-footer"><div class="container footer-inner"><a class="brand" href="${url("index.html")}"><span class="brand-mark">L.</span>${profile.brand}</a><p>Designed & built with curiosity. <span>✳</span> ${new Date().getFullYear()}</p><a class="back-top" href="#top">Back to top ↑</a></div></footer>`;
}
