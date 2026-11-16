import { profile } from "./config.js";
import { renderHeader, renderFooter } from "./components.js";
import { renderFeaturedProjects, renderAllProjects, renderHomeStack, renderSkillGroups } from "./projects.js";
import { initAnimations } from "./animations.js";
renderHeader();renderFooter();renderFeaturedProjects();renderAllProjects();renderHomeStack();renderSkillGroups();
// Keep root-style internal links working under a GitHub Pages repository path.
const basePath = import.meta.env.BASE_URL;
document.querySelectorAll('a[href^="/"]').forEach(link => {
  const path = link.getAttribute("href");
  if (!path.startsWith(basePath)) link.setAttribute("href", basePath + path.replace(/^\/+/, ""));
});
const email=document.querySelector("#email-link");if(email){email.href=`mailto:${profile.email}`;email.textContent=`${profile.email} ↗`;}
const socials=document.querySelector("#social-links");if(socials){const links=[["GitHub",profile.github],["LinkedIn",profile.linkedin]].filter(([,u])=>u&&!u.includes("yourusername"));socials.innerHTML=links.length?links.map(([n,u])=>`<a href="${u}" target="_blank" rel="noreferrer">${n} ↗</a>`).join(""):`<span class="hint">Add social URLs in src/js/config.js.</span>`;}
initAnimations();
const bar=document.createElement("div");bar.className="scroll-progress";document.body.append(bar);
addEventListener("scroll",()=>{const max=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${max>0?scrollY/max:0})`;},{passive:true});
