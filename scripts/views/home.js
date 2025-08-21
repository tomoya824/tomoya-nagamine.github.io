// scripts/views/home.js
import { state, parseSkills, save } from "../core/state.js";

export function initHome(onSaved){
  const btn = document.getElementById("save-me");
  btn?.addEventListener("click", ()=>{
    const goal   = document.getElementById("my-goal").value.trim();
    const skills = parseSkills(document.getElementById("my-skills").value);
    if (!state.me){ alert("ログインしてください。"); return; }

    state.me.goal = goal;
    state.me.skills = skills;

    const idx = state.users.findIndex(u=>u.name===state.me.name);
    if (idx<0) state.users.push({ name: state.me.name, goal, skills });
    else state.users[idx] = { name: state.me.name, goal, skills };

    save();
    onSaved?.();
  });
}

export function fillHomeFromState(){
  if (!state.me) return;
  const nameEl = document.getElementById("me-name");
  const goalEl = document.getElementById("my-goal");
  const skillsEl = document.getElementById("my-skills");
  if (nameEl) nameEl.textContent = state.me.name || "未ログイン";
  if (goalEl) goalEl.value = state.me.goal || "";
  if (skillsEl) skillsEl.value = (state.me.skills||[]).join(", ");
}
