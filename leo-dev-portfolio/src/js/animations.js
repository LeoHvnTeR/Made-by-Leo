export function initAnimations(){
 const items=document.querySelectorAll(".reveal");
 if(matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver" in window)){items.forEach(x=>x.classList.add("is-visible"));return;}
 const observer=new IntersectionObserver((entries,obs)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");obs.unobserve(entry.target);}}),{threshold:.12,rootMargin:"0px 0px -30px 0px"});
 items.forEach((item,i)=>{item.style.setProperty("--delay",`${(i%4)*85}ms`);observer.observe(item);});
}
