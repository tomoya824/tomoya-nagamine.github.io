// scripts/views/ai.js
import { state, getTopMatches, canonGoal, makeGroupsByGoal } from "../core/state.js";
import { startChatWith } from "./chat.js";
import { openProfileModal } from "./profile-modal.js";

let aiList;

export function initAI(){
  aiList = document.getElementById("ai-list");
}

export function renderAI(){
  if (!aiList) aiList = document.getElementById("ai-list");
  aiList.innerHTML = "";
  if (!state.me || !state.me.goal){
    aiList.innerHTML = `<div class="hint">まずはマイページで「目的」と「スキル」を保存してください。</div>`;
    return;
  }

  const personal = getTopMatches(state.me, state.users, 50).slice(0,5);
  if (personal.length){
    const sec = document.createElement("div");
    sec.style.gridColumn = "1 / -1";
    sec.innerHTML = `<h3>あなたにおすすめの個人</h3>`;
    aiList.appendChild(sec);

    personal.forEach(({user,score})=>{
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
        <div class="score-pill">${score.toFixed(2)}</div>
        <div class="avatar">${(user.name||"?").slice(0,1)}</div>
        <div class="body">
          <div class="head">
            <div class="user-name"> ${user.name}</div>
          </div>
          <div class="user-goal">目的：<span class="badge">${canonGoal(user.goal)}</span></div>
          <div class="meta">${(user.skills||[]).map(s=>`<span class="skill">${s}</span>`).join("")}</div>
          <div style="margin-top:8px;">
            <button class="connect" type="button">つながる</button>
          </div>
        </div>
      `;
      card.addEventListener("click",(e)=>{ if(!e.target.classList.contains("connect")) openProfileModal(user); });
      card.querySelector(".connect").addEventListener("click",(e)=>{ e.stopPropagation(); startChatWith(user); });
      aiList.appendChild(card);
    });
  }

  const groups = makeGroupsByGoal(state.me, state.users, 3);
  if (groups.length){
    const sec = document.createElement("div");
    sec.style.gridColumn = "1 / -1";
    sec.innerHTML = `<h3>おすすめグループ（目的一致）</h3>`;
    aiList.appendChild(sec);

    groups.forEach((g, i)=>{
      const div = document.createElement("div");
      div.className = "group-card";
      div.innerHTML = `
        <h4>👥 ${g.goal} チーム #${i+1}（${g.members.length}人）</h4>
        <div class="member">${g.members.map(m=>m.name).join("、")}</div>
        <div class="meta">例スキル：${(g.members[0]?.skills||[]).slice(0,3).map(s=>`<span class="skill">${s}</span>`).join("")}</div>
        <button class="connect" type="button">このグループで参加</button>
      `;
      div.querySelector(".connect").addEventListener("click", ()=>{
        alert("🎉 グループに参加しました！（デモ）");
      });
      aiList.appendChild(div);
    });
  }
}
