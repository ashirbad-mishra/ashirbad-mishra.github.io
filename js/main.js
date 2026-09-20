document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.querySelector(".menu-toggle");
 const nav=document.getElementById("siteNav");
 if(!toggle||!nav)return;
 toggle.addEventListener("click",()=>{
  const open=toggle.classList.toggle("is-open");
  nav.classList.toggle("is-open",open);
  toggle.setAttribute("aria-expanded",String(open));
  toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");
 });
 nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  toggle.classList.remove("is-open");
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded","false");
  toggle.setAttribute("aria-label","Open navigation");
 }));
 window.addEventListener("resize",()=>{
  if(window.innerWidth>720){toggle.classList.remove("is-open");nav.classList.remove("is-open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation");}
 });
});
