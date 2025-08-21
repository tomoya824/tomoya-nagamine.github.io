// scripts/views/chat.js
import { state, save } from "../core/state.js";
import { getViews, show, setActiveNav } from "../core/dom.js";

let chatPartnerEl, chatLogEl, chatTextEl, chatSendBtn;
let currentPartner = null;

export function initChat(){
  chatPartnerEl = document.getElementById("chat-partner");
  chatLogEl = document.getElementById("chat-log");
  chatTextEl = document.getElementById("chat-text");
  chatSendBtn = document.getElementById("chat-send");

  chatSendBtn?.addEventListener("click", sendChat);
  chatTextEl?.addEventListener("keydown", e=>{ if(e.key==="Enter") sendChat(); });
}

export function startChatWith(user){
  currentPartner = user;
  const views = getViews();
  show(views.chat);
  setActiveNav("view-chat");
  chatPartnerEl.textContent = user.name;
  chatLogEl.innerHTML = "";
  pushMsg(`はじめまして、${state.me?.name ?? "あなた"}さん！よろしくお願いします。`, "them");
}

function pushMsg(text, who="them"){
  const div=document.createElement("div");
  div.className="chat-msg";
  if (who==="me") div.classList.add("me");
  div.textContent = text;
  chatLogEl.appendChild(div);
  chatLogEl.scrollTop = chatLogEl.scrollHeight;
}

function sendChat(){
  const t = chatTextEl.value.trim();
  if (!t) return;
  pushMsg(t, "me");
  chatTextEl.value = "";

  if (state.me){
    const me = state.users.find(u=>u.name===state.me.name);
    if (me){
      me.messagesSent = (me.messagesSent||0) + 1;
      me.xp = (me.xp||0) + 2;
      me.lastActive = Date.now();
      save();
    }
  }

  setTimeout(()=>pushMsg("いいですね！次にいつ話せますか？", "them"), 600);
}
