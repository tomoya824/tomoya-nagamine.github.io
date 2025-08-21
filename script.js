// script.js

// ===== 状態（学生多めダミーユーザー付き）=====
const state = {
  me: null,
  users: [
     // --- 英語学習 20人 ---
  { name:"アヤ", goal:"英語学習", skills:["英会話","TOEIC","単語"] },
  { name:"リク", goal:"英語学習", skills:["リスニング","発音","留学準備"] },
  { name:"ユウキ", goal:"英語学習", skills:["IELTS","作文","文法"] },
  { name:"サラ", goal:"英語学習", skills:["TOEFL","会話","単語"] },
  { name:"ケント", goal:"英語学習", skills:["英会話","シャドーイング","発音"] },
  { name:"ミホ", goal:"英語学習", skills:["TOEIC","単語","リスニング"] },
  { name:"マナ", goal:"英語学習", skills:["発音","会話","作文"] },
  { name:"トモヤ", goal:"英語学習", skills:["リスニング","単語","会話"] },
  { name:"ナナ", goal:"英語学習", skills:["留学準備","作文","TOEIC"] },
  { name:"ハル", goal:"英語学習", skills:["TOEFL","単語","作文"] },
  { name:"ミク", goal:"英語学習", skills:["英会話","文法","発音"] },
  { name:"アオイ", goal:"英語学習", skills:["リーディング","Listening","単語"] },
  { name:"ユイ", goal:"英語学習", skills:["シャドーイング","作文","TOEIC"] },
  { name:"タカシ", goal:"英語学習", skills:["TOEFL","文法","リスニング"] },
  { name:"サクラ", goal:"英語学習", skills:["発音","留学準備","作文"] },
  { name:"ケイタ", goal:"英語学習", skills:["英会話","リーディング","単語"] },
  { name:"ミサキ", goal:"英語学習", skills:["文法","TOEIC","会話"] },
  { name:"ダイスケ", goal:"英語学習", skills:["TOEFL","リスニング","単語"] },
  { name:"アヤネ", goal:"英語学習", skills:["IELTS","作文","リーディング"] },
  { name:"シュン", goal:"英語学習", skills:["会話","単語","Listening"] },

  // --- 起業 20人 ---
  { name:"ケイ", goal:"起業", skills:["マーケ","営業","Pitch"] },
  { name:"モモ", goal:"起業", skills:["資金計画","法務","人脈"] },
  { name:"ジン", goal:"起業", skills:["スタートアップ","PMF","リーン"] },
  { name:"タク", goal:"起業", skills:["営業","チームビルディング","Pitch"] },
  { name:"ユナ", goal:"起業", skills:["SNSマーケ","営業","顧客開発"] },
  { name:"カズマ", goal:"起業", skills:["経営戦略","資金調達","法務"] },
  { name:"リョウ", goal:"起業", skills:["Pitch","営業","SNSマーケ"] },
  { name:"ナオキ", goal:"起業", skills:["リーンキャンバス","Pitch","人脈"] },
  { name:"ハルカ", goal:"起業", skills:["Startup","マーケ","営業"] },
  { name:"ミナ", goal:"起業", skills:["チーム作り","資金計画","Pitch"] },
  { name:"ショウ", goal:"起業", skills:["営業","顧客開発","リーン"] },
  { name:"アヤカ", goal:"起業", skills:["マーケ","SNS運用","Pitch"] },
  { name:"コウタ", goal:"起業", skills:["資金調達","法務","経営"] },
  { name:"ユキ", goal:"起業", skills:["顧客開発","Pitch","マーケ"] },
  { name:"タケル", goal:"起業", skills:["人脈","Pitch","スタートアップ"] },
  { name:"ヒナ", goal:"起業", skills:["マーケ","SNS","顧客開発"] },
  { name:"ソウタ", goal:"起業", skills:["営業","Pitch","経営"] },
  { name:"アカネ", goal:"起業", skills:["資金調達","Pitch","SNSマーケ"] },
  { name:"ユウト", goal:"起業", skills:["リーン","PMF","営業"] },
  { name:"ミキ", goal:"起業", skills:["SNSマーケ","顧客開発","Pitch"] },

  // --- データ分析 20人 ---
  { name:"ユメ", goal:"データ分析", skills:["Python","SQL","可視化"] },
  { name:"レオ", goal:"データ分析", skills:["R","統計","回帰"] },
  { name:"ハナ", goal:"データ分析", skills:["Pandas","EDA","可視化"] },
  { name:"カズ", goal:"データ分析", skills:["NumPy","機械学習","前処理"] },
  { name:"エリ", goal:"データ分析", skills:["統計","回帰","可視化"] },
  { name:"タケシ", goal:"データ分析", skills:["Python","Matplotlib","EDA"] },
  { name:"アリサ", goal:"データ分析", skills:["統計","SQL","データ整形"] },
  { name:"ユウト", goal:"データ分析", skills:["DeepLearning","Python","EDA"] },
  { name:"ミカ", goal:"データ分析", skills:["R","回帰","Pandas"] },
  { name:"ショウ", goal:"データ分析", skills:["可視化","NumPy","機械学習"] },
  { name:"ナナミ", goal:"データ分析", skills:["SQL","Python","EDA"] },
  { name:"リョウタ", goal:"データ分析", skills:["統計","可視化","回帰"] },
  { name:"マイ", goal:"データ分析", skills:["Python","データ整形","可視化"] },
  { name:"タダシ", goal:"データ分析", skills:["EDA","NumPy","機械学習"] },
  { name:"ミユ", goal:"データ分析", skills:["統計","回帰","SQL"] },
  { name:"コウジ", goal:"データ分析", skills:["Python","可視化","EDA"] },
  { name:"サトシ", goal:"データ分析", skills:["R","統計","データ整形"] },
  { name:"ユカ", goal:"データ分析", skills:["回帰","機械学習","EDA"] },
  { name:"ヒロシ", goal:"データ分析", skills:["SQL","Python","可視化"] },
  { name:"アヤ", goal:"データ分析", skills:["統計","回帰","EDA"] },

  // --- プログラミング 20人 ---
  { name:"ショウ", goal:"プログラミング", skills:["JavaScript","React","Git"] },
  { name:"ナオ", goal:"プログラミング", skills:["C++","アルゴリズム","競技プログラミング"] },
  { name:"ユリ", goal:"プログラミング", skills:["Java","Spring","MySQL"] },
  { name:"ハルカ", goal:"プログラミング", skills:["Swift","iOS","Xcode"] },
  { name:"タカフミ", goal:"プログラミング", skills:["Python","Flask","API"] },
  { name:"ミユ", goal:"プログラミング", skills:["HTML","CSS","JavaScript"] },
  { name:"リョウ", goal:"プログラミング", skills:["Rust","WebAssembly","Git"] },
  { name:"トモコ", goal:"プログラミング", skills:["C#","Unity","ゲーム開発"] },
  { name:"リサ", goal:"プログラミング", skills:["PHP","Laravel","SQL"] },
  { name:"カイ", goal:"プログラミング", skills:["Go","Docker","Kubernetes"] },
  { name:"ユイ", goal:"プログラミング", skills:["JavaScript","Node.js","MongoDB"] },
  { name:"タツヤ", goal:"プログラミング", skills:["C","C++","アルゴリズム"] },
  { name:"ミホ", goal:"プログラミング", skills:["Ruby","Rails","SQL"] },
  { name:"アキラ", goal:"プログラミング", skills:["Python","AI","TensorFlow"] },
  { name:"ノゾミ", goal:"プログラミング", skills:["HTML","CSS","Bootstrap"] },
  { name:"シュン", goal:"プログラミング", skills:["Java","Android","Kotlin"] },
  { name:"ハル", goal:"プログラミング", skills:["Git","GitHub","CI/CD"] },
  { name:"ユカリ", goal:"プログラミング", skills:["React","Next.js","TypeScript"] },
  { name:"ケイタ", goal:"プログラミング", skills:["Python","Django","API"] },
  { name:"アヤナ", goal:"プログラミング", skills:["C++","競技プログラミング","アルゴリズム"] },

  // --- デザイン 20人 ---
  { name:"サラ", goal:"デザイン", skills:["UI/UX","Figma","Photoshop"] },
  { name:"レン", goal:"デザイン", skills:["イラスト","Webデザイン","Canva"] },
  { name:"ユカ", goal:"デザイン", skills:["Photoshop","Illustrator","色彩"] },
  { name:"リサ", goal:"デザイン", skills:["ポスター","広告","バナー"] },
  { name:"ジュン", goal:"デザイン", skills:["UI/UX","Figma","AdobeXD"] },
  { name:"マイ", goal:"デザイン", skills:["ロゴ","パッケージ","色彩"] },
  { name:"アオイ", goal:"デザイン", skills:["イラスト","広告","Photoshop"] },
  { name:"カレン", goal:"デザイン", skills:["Figma","AdobeXD","UI/UX"] },
  { name:"トモミ", goal:"デザイン", skills:["Webデザイン","配色","タイポグラフィ"] },
  { name:"ミキ", goal:"デザイン", skills:["広告","ポスター","色彩"] },
  { name:"ナツキ", goal:"デザイン", skills:["ロゴ","色彩","パッケージ"] },
  { name:"ヒロミ", goal:"デザイン", skills:["UI/UX","Illustrator","Photoshop"] },
  { name:"ユウ", goal:"デザイン", skills:["イラスト","Webデザイン","配色"] },
  { name:"サキ", goal:"デザイン", skills:["UI","UX","AdobeXD"] },
  { name:"マコト", goal:"デザイン", skills:["配色","広告","ポスター"] },
  { name:"チヒロ", goal:"デザイン", skills:["ロゴ","イラスト","色彩"] },
  { name:"ヒナ", goal:"デザイン", skills:["UI/UX","AdobeXD","Photoshop"] },
  { name:"アキ", goal:"デザイン", skills:["Webデザイン","タイポグラフィ","色彩"] },
  { name:"タカシ", goal:"デザイン", skills:["UI","配色","広告"] },
  { name:"ユリ", goal:"デザイン", skills:["ロゴ","ポスター","Photoshop"] },
],
};
// ===== 実績フィールド付与（初期化）=====
function seedAchievements(){
  const now = Date.now();
  state.users.forEach(u=>{
    // 既に設定済みならスキップ
    if (u.xp != null) return;
    // 0〜1000の経験値・活動量を仮付与
    u.xp = Math.floor(200 + Math.random()*800);         // 経験値
    u.messagesSent = Math.floor(Math.random()*150);     // 送信数
    u.groupsJoined = Math.floor(Math.random()*8);       // 参加グループ
    u.endorsements = (u.skills||[]).reduce((m,s)=>{ m[s]=Math.floor(Math.random()*10); return m; }, {});
    // 直近30日以内のランダム活動
    u.lastActive = now - Math.floor(Math.random()*30)*24*60*60*1000;
  });
}
seedAchievements();
// ===== 重み設定（必要に応じて調整）=====
const WEIGHTS = {
  goal: 2.0,       // 目的一致
  skill: 1.0,      // スキル類似
  achieve: 1.2,    // 実績（xp/活動/承認）
  recency: 0.6     // 最終活動の新しさ
};
// ===== ユーティリティ =====
function norm(str){ return (str || "").toLowerCase().trim(); }
function parseSkills(text){
  return (text||"").split(/[,、\s]+/).map(s=>s.trim()).filter(Boolean);
}
function jaccard(aArr,bArr){
  const a=new Set((aArr||[]).map(norm)), b=new Set((bArr||[]).map(norm));
  const inter=[...a].filter(x=>b.has(x)).length;
  const uni=new Set([...a,...b]).size || 1;
  return inter/uni;
}
// 目的の正規化（同義語まとめ）
const GOAL_CANON = [
  { key: "英語学習", tokens: [
    "英語","英会話","toeic","toefl","ielts","留学",
    "スピーキング","リスニング","リーディング","ライティング",
    "英検","英語勉強","語学学習","海外","esl"
  ]},
  { key: "起業", tokens: [
    "起業","スタートアップ","ビジネス","経営","pitch","資金",
    "アントレ","ベンチャー","事業","会社立ち上げ","社長",
    "企業","ビジネスプラン"
  ]},
  { key: "データ分析", tokens: [
    "データ分析","統計","データ","分析","eda","機械学習",
    "データサイエンス","AI","予測","データ処理","bigdata"
  ]},
  { key: "プログラミング", tokens: [
    "プログラミング","開発","コーディング","アプリ","エンジニア",
    "coding","ソフトウェア","web開発","システム","アルゴリズム",
    "python","java","javascript","C言語","ハッカソン"
  ]},
  { key: "デザイン", tokens: [
    "デザイン","ui","ux","figma","グラフィック","イラスト",
    "プロダクトデザイン","webデザイン","ブランディング","photoshop",
    "クリエイティブ","アート","設計"
  ]},
];
function canonGoal(s){
  const g = norm(s);
  if (!g) return "";
  for (const cat of GOAL_CANON){
    if (cat.tokens.some(t => g.includes(norm(t)))) return cat.key;
  }
  return g; // マッチしなければそのまま
}
function matchScore(me, other){
  if (!other || !me || me.name === other.name) return 0;

  // 目的一致 0..1
  const gMe = norm(me.goal), gOt = norm(other.goal);
  const goalScore = !gMe ? 0 : (gMe===gOt ? 1 : (gOt.includes(gMe)||gMe.includes(gOt) ? 0.5 : 0));

  // スキル類似 0..1
  const skillScore = jaccard(me.skills, other.skills);

  // 実績・活動 0..1
  const ach = achievementScore(other);
  const rec = recencyScore(other);

  // 総合
  return (
    WEIGHTS.goal    * goalScore +
    WEIGHTS.skill   * skillScore +
    WEIGHTS.achieve * ach +
    WEIGHTS.recency * rec
  );
}
function getTopMatches(me, users, topN=12){
  return users
    .map(u=>({user:u, score:matchScore(me,u)}))
    .filter(x=>x.score>0 && x.user.name!==me?.name)
    .sort((a,b)=>b.score-a.score)
    .slice(0, topN);
}
// 0〜1正規化ヘルパ
function norm01(v, min, max){ return max===min ? 0 : Math.max(0, Math.min(1, (v-min)/(max-min))); }

// 実績スコア：xp・messages・groups・endorsements の総合
function achievementScore(u, population = state.users){
  const xs = population;
  const xpMax = Math.max(...xs.map(x=>x.xp||0), 1);
  const msgMax = Math.max(...xs.map(x=>x.messagesSent||0), 1);
  const grpMax = Math.max(...xs.map(x=>x.groupsJoined||0), 1);
  const endSum = s => Object.values(s||{}).reduce((a,b)=>a+b,0);
  const endMax = Math.max(...xs.map(x=>endSum(x.endorsements||{})), 1);

  const sXp  = (u.xp||0) / xpMax;
  const sMsg = (u.messagesSent||0) / msgMax;
  const sGrp = (u.groupsJoined||0) / grpMax;
  const sEnd = endSum(u.endorsements||{}) / endMax;

  // 実績の内訳比率（合計1になるように）
  return 0.45*sXp + 0.25*sMsg + 0.20*sGrp + 0.10*sEnd;
}

// 活動の新しさスコア（直近0日=1.0、30日=0.0）
function recencyScore(u){
  const days = (Date.now() - (u.lastActive||0)) / (24*60*60*1000);
  return 1 - Math.max(0, Math.min(1, days/30));
}
// ===== 保存/復元 =====
const STORAGE_KEY = "iverse_state_v1";

function save(){
  // me と users を保存（表示用の一時値は除外）
  const data = { me: state.me, users: state.users };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
function load(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(!raw) return;
  try{
    const saved = JSON.parse(raw);
    // 既存ダミーと重複しないようにマージ（名前で一意）
    const byName = new Map(state.users.map(u=>[u.name, u]));
    (saved.users||[]).forEach(u=> byName.set(u.name, u));
    state.users = [...byName.values()];
    state.me = saved.me || null;
  }catch(e){ console.warn("restore failed", e); }
}

// 目的でまとめ & 目的一致グルーピング
function groupByGoal(users){
  const map = {};
  users.forEach(u=>{
    const g = norm(u.goal);
    if (!g) return;
    (map[g] ||= []).push(u);
  });
  return map;
}
// 自分の目的（同義語含む）に近い人だけでグループを作る
function makeGroupsByGoal(me, users, maxGroups=3){
  if (!me || !me.goal) return [];
  const meKey = canonGoal(me.goal);
  const others = users.filter(u => u.name !== me.name);

  // 同義語含めて同じカテゴリの人を抽出
  const same = others.filter(u => canonGoal(u.goal) === meKey);

  if (same.length < 2) return []; // 最低3人（自分+2）に満たなければ出さない

  // スキル近い順に並べる
  const ranked = [...same].sort(
    (a,b) => jaccard(me.skills||[], b.skills||[]) - jaccard(me.skills||[], a.skills||[])
  );

  // グルーピング：自分 + 上位4人で1グループを複数作成（最大3）
  const groups = [];
  const chunk = 4; // 自分を含めて最大5人
  for (let i=0; i<ranked.length && groups.length<maxGroups; i += chunk){
    const members = [me, ...ranked.slice(i, i+chunk)].filter(Boolean);
    if (members.length >= 3) groups.push({ goal: meKey, members });
  }
  return groups;
}

// ===== 画面参照 =====
const headerEl = document.getElementById("app-header");
const views = {
  login: document.getElementById("view-login"),
  home: document.getElementById("view-home"),
  ai: document.getElementById("view-ai"),
  chat: document.getElementById("view-chat"),
};
function show(el){ document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden")); el.classList.remove("hidden"); }

// ===== モーダル参照 =====
const modalEl = document.getElementById("profile-modal");
const pmName = document.getElementById("pm-name");
const pmGoal = document.getElementById("pm-goal");
const pmSkills = document.getElementById("pm-skills");
const pmConnect = document.getElementById("pm-connect");
const pmClose = document.getElementById("pm-close");
let modalTarget = null;

function openProfileModal(u){
  modalTarget = u;
  pmName.textContent = u.name;
  pmGoal.textContent = u.goal || "—";
  pmSkills.innerHTML = (u.skills||[]).map(s=>`<span class="skill">${s}</span>`).join("");
  modalEl.classList.remove("hidden");
}
function closeProfileModal(){ modalTarget=null; modalEl.classList.add("hidden"); }
pmClose.addEventListener("click", closeProfileModal);
modalEl.addEventListener("click", (e)=>{ if(e.target===modalEl) closeProfileModal(); });
pmConnect.addEventListener("click", ()=>{ if(modalTarget){ startChatWith(modalTarget); closeProfileModal(); show(views.chat); }});

// ===== チャット =====
const chatPartnerEl = document.getElementById("chat-partner");
const chatLogEl = document.getElementById("chat-log");
const chatTextEl = document.getElementById("chat-text");
const chatSendBtn = document.getElementById("chat-send");
let currentPartner = null;

function startChatWith(u){
  currentPartner = u;
  show(views.chat);
   // ★ タブ切替（メッセージをアクティブ）
   document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
   document.querySelector('.nav-btn[data-target="view-chat"]')?.classList.add("active");
  chatPartnerEl.textContent = u.name;
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

  // ★ 実績を加算（デモ用：送信で活動値アップ）
  if (state.me){
    const me = state.users.find(u=>u.name===state.me.name);
    if (me){
      me.messagesSent = (me.messagesSent||0) + 1;
      me.xp = (me.xp||0) + 2;            // 少しだけ経験値
      me.lastActive = Date.now();        // 最終活動更新
    }
  }

  setTimeout(()=>pushMsg("いいですね！次にいつ話せますか？", "them"), 600);
}
chatSendBtn.addEventListener("click", sendChat);
chatTextEl.addEventListener("keydown", e=>{ if(e.key==="Enter") sendChat(); });

// ===== AIおすすめ描画（個人＋グループ）=====
const aiList = document.getElementById("ai-list");
function renderAI(){
  aiList.innerHTML = "";
  if (!state.me || !state.me.goal){
    aiList.innerHTML = `<div class="hint">まずはマイページで「目的」と「スキル」を保存してください。</div>`;
    return;
  }

  // 個人おすすめ（上位5）
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

  // 目的一致のおすすめグループ（最大3）
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

// ===== 初期化（イベント登録）=====
window.addEventListener("DOMContentLoaded", () => {
  const loginBtn  = document.getElementById("login-btn");
  const nameInput = document.getElementById("login-name");
  const passInput = document.getElementById("login-pass");
  window.addEventListener("DOMContentLoaded", () => {
    load(); // ← 最初に復元
  
    // 既存のイベント登録…（省略）
  
    // ログインクリック内の最後に追加
    // save();
  
    // プロフィール保存ボタン内の最後に追加
    // save();
  
    // 画面遷移時やAI描画時は不要。念のためタブ閉じ前にも保存
    window.addEventListener("beforeunload", save);
    // すでに保存データを復元して自動でマイページ表示する場合
if (state.me) {
  headerEl.classList.remove("hidden");
  document.getElementById("me-name").textContent = state.me.name || "未ログイン";
  show(views.home);

  // ★ 復元時もタブをマイページに
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
  document.querySelector('.nav-btn[data-target="view-home"]')?.classList.add("active");
　}
  });
  
  // Enterでログイン
  [nameInput, passInput].forEach(el=>{
    el?.addEventListener("keydown", e=>{ if(e.key==="Enter") loginBtn.click(); });
  });

  // ログイン（パスワードはダミー・名前のみ必須）
  loginBtn.addEventListener("click", ()=>{
    const name = (nameInput?.value || "").trim();
    if (!name){ alert("ユーザー名を入力してください。"); return; }
    state.me = { name, goal:"", skills:[] };

    // 自分を users に（未登録なら）追加
    if (!state.users.find(u=>u.name===name)) {
      state.users.push({ name, goal:"", skills:[] });
    }

    headerEl.classList.remove("hidden");
    document.getElementById("me-name").textContent = name;
    show(views.home);
    // ログイン処理の成功直後（show(views.home); の直前か直後）に追加
　　document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
　　document.querySelector('.nav-btn[data-target="view-home"]')?.classList.add("active");
　　show(views.home);  // ← 既存
  });

  // プロフィール保存
document.getElementById("save-me").addEventListener("click", ()=>{
  const goal   = document.getElementById("my-goal").value.trim();
  const skills = parseSkills(document.getElementById("my-skills").value);
  if (!state.me){ alert("ログインしてください。"); return; }

  state.me.goal = goal;
  state.me.skills = skills;

  const idx = state.users.findIndex(u=>u.name===state.me.name);
  if (idx<0) state.users.push({ name: state.me.name, goal, skills });
  else state.users[idx] = { name: state.me.name, goal, skills };

  // 保存後にAIへ
  if (typeof save === "function") save(); 
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
  document.querySelector('.nav-btn[data-target="view-ai"]')?.classList.add("active");
  renderAI();
  show(views.ai);
  window.scrollTo({ top: 0, behavior: "smooth" }); // ← localStorage対応してる場合だけ
  }); 
 // ナビ
document.querySelectorAll(".nav-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const target = btn.dataset.target;
    // アクティブ表示
    document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    show(document.getElementById(target));
    if (target === "view-ai") renderAI();
    if (target === "view-home" && state.me){
      document.getElementById("me-name").textContent = state.me.name || "未ログイン";
      document.getElementById("my-goal").value = state.me.goal || "";
      document.getElementById("my-skills").value = (state.me.skills||[]).join(", ");
    }
    // 画面先頭へ軽くスクロール
    window.scrollTo({ top:0, behavior:"smooth" });
  });
});
  // ログアウト
  document.getElementById("btn-logout").addEventListener("click", ()=>{
    state.me = null;
    headerEl.classList.add("hidden");
    show(views.login);
      // ★ ログアウトしたらタブのアクティブを全部解除
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  if (typeof save === "function") save();
  });

  // 初期表示
  show(views.login);
});
