import { projects, skillGroups } from "./config.js";
function card(p,i) {
 const art=p.image?`<img src="${p.image}" alt="${p.title} preview" loading="lazy">`:`<div class="placeholder"><span>0${i+1}</span><small>${p.category.toUpperCase()} / PROJECT</small></div>`;
 const action=p.link?`<a href="${p.link}" target="_blank" rel="noreferrer">View project ↗</a>`:`<span class="muted">${p.detail}</span>`;
 return `<article class="project-card reveal" data-category="${p.category}"><div class="project-art">${art}<b>${p.category}</b></div><div class="project-info"><h3>${p.title}</h3><p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div><div class="project-bottom">${action}</div></div></article>`;
}
export function renderFeaturedProjects(){const el=document.querySelector("#featured-projects");if(el)el.innerHTML=projects.filter(p=>p.featured).slice(0,3).map(card).join("");}
export function renderAllProjects(){
 const target=document.querySelector("#all-projects"), filters=document.querySelector("#project-filters");if(!target)return;
 const categories=["All",...new Set(projects.map(p=>p.category))];
 filters.innerHTML=categories.map((c,i)=>`<button class="filter-button ${i===0?"active":""}" data-filter="${c}" aria-pressed="${i===0}">${c}</button>`).join("");
 const draw=c=>{target.innerHTML=projects.filter(p=>c==="All"||p.category===c).map(card).join("");target.querySelectorAll(".reveal").forEach(e=>e.classList.add("is-visible"));};
 draw("All");filters.addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;filters.querySelectorAll("button").forEach(x=>{x.classList.toggle("active",x===b);x.setAttribute("aria-pressed",String(x===b));});draw(b.dataset.filter);});
}
export function renderHomeStack(){const el=document.querySelector("#home-stack");if(el)el.innerHTML=skillGroups.flatMap(g=>g.skills).slice(0,12).map(s=>`<span>${s} <i>↗</i></span>`).join("");}
export function renderSkillGroups(){const el=document.querySelector("#skill-groups");if(el)el.innerHTML=skillGroups.map((g,i)=>`<section class="skill-group reveal"><small>0${i+1}</small><div><h2>${g.title}</h2><p>${g.description}</p><div class="skill-pills">${g.skills.map(s=>`<span>${s}</span>`).join("")}</div></div></section>`).join("");}
