// scripts/app.js
import { state, load, save } from "./core/state.js";
import { getViews, show, setActiveNav } from "./core/dom.js";
import { initProfileModal } from "./views/profile-modal.js";
import { initChat, startChatWith } from "./views/chat.js";
import { initAI, renderAI } from "./views/ai.js";
import { initHome, fillHomeFromState } from "./views/home.js";

function initApp(){
  const headerEl = document.getElementById("app-header");
  const loginBtn  = document.getElementById("login-btn");
  const nameInput = document.getElementById("login-name");
  const passInput = document.getElementById("login-pass");

  load();
  window.addEventListener("beforeunload", save);

  initProfileModal();
  initChat();
  initAI();
  initHome(()=>{ setActiveNav("view-ai"); renderAI(); const views=getViews(); show(views.ai); window.scrollTo({ top:0, behavior:"smooth" }); });

  if (state.me){
    headerEl.classList.remove("hidden");
    fillHomeFromState();
    setActiveNav("view-home");
    const views = getViews();
    show(views.home);
  } else {
    const views = getViews();
    show(views.login);
  }

  [nameInput, passInput].forEach(el=>{ el?.addEventListener("keydown", e=>{ if(e.key==="Enter") loginBtn.click(); }); });

  loginBtn.addEventListener("click", ()=>{
    const name = (nameInput?.value || "").trim();
    if (!name){ alert("ユーザー名を入力してください。"); return; }
    state.me = { name, goal:"", skills:[] };
    if (!state.users.find(u=>u.name===name)) { state.users.push({ name, goal:"", skills:[] }); }
    headerEl.classList.remove("hidden");
    fillHomeFromState();
    setActiveNav("view-home");
    const views = getViews();
    show(views.home);
  });

  document.querySelectorAll(".nav-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const target = btn.dataset.target;
      setActiveNav(target);
      const views = getViews();
      show(document.getElementById(target));
      if (target === "view-ai") renderAI();
      if (target === "view-home" && state.me) fillHomeFromState();
      window.scrollTo({ top:0, behavior:"smooth" });
    });
  });

  document.getElementById("btn-logout").addEventListener("click", ()=>{
    state.me = null;
    headerEl.classList.add("hidden");
    const views = getViews();
    show(views.login);
    setActiveNav("");
    save();
  });
}

if (document.readyState === "loading"){
  window.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
} 