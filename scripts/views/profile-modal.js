// scripts/views/profile-modal.js
import { startChatWith } from "./chat.js";
import { getViews, show, setActiveNav } from "../core/dom.js";

let modalEl, pmName, pmGoal, pmSkills, pmConnect, pmClose, modalTarget;

export function initProfileModal(){
  modalEl = document.getElementById("profile-modal");
  pmName = document.getElementById("pm-name");
  pmGoal = document.getElementById("pm-goal");
  pmSkills = document.getElementById("pm-skills");
  pmConnect = document.getElementById("pm-connect");
  pmClose = document.getElementById("pm-close");
  modalTarget = null;

  pmClose?.addEventListener("click", closeProfileModal);
  modalEl?.addEventListener("click", (e)=>{ if(e.target===modalEl) closeProfileModal(); });
  pmConnect?.addEventListener("click", ()=>{ if(modalTarget){ startChatWith(modalTarget); closeProfileModal(); const views=getViews(); show(views.chat); setActiveNav("view-chat"); }});
}

export function openProfileModal(u){
  modalTarget = u;
  pmName.textContent = u.name;
  pmGoal.textContent = u.goal || "—";
  pmSkills.innerHTML = (u.skills||[]).map(s=>`<span class="skill">${s}</span>`).join("");
  modalEl.classList.remove("hidden");
}
export function closeProfileModal(){ modalTarget=null; modalEl.classList.add("hidden"); } 