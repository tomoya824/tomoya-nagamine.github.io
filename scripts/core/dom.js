// scripts/core/dom.js
export function getViews(){
  return {
    login: document.getElementById("view-login"),
    home: document.getElementById("view-home"),
    ai: document.getElementById("view-ai"),
    chat: document.getElementById("view-chat"),
  };
}
export function show(el){
  document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden"));
  el.classList.remove("hidden");
}
export function setActiveNav(targetId){
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
  document.querySelector(`.nav-btn[data-target="${targetId}"]`)?.classList.add("active");
} 