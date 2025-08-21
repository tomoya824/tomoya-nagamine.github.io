## ファイル構成

```text
tomoya824.github.io/
├─ index.html                # エントリーポイント。断片HTML/CSSを読み込み後、app.jsを起動
├─ scripts/
│  ├─ app.js                 # アプリ初期化・ナビゲーション・ログイン/ログアウト処理
│  ├─ core/
│  │  ├─ dom.js             # DOMユーティリティ：getViews, show, setActiveNav
│  │  └─ state.js           # アプリ状態・推薦ロジック・LocalStorage保存/復元
│  └─ views/
│     ├─ ai.js              # 「AIおすすめ」ビューの描画・操作
│     ├─ chat.js            # チャットビューの初期化・送受信（デモ応答）
│     ├─ home.js            # マイページ：プロフィール保存/反映
│     └─ profile-modal.js   # プロフィール詳細モーダルの開閉/接続導線
├─ styles/
│  ├─ base.css              # 共通スタイル
│  ├─ ai.css                # AIおすすめ用スタイル
│  ├─ chat.css              # チャット用スタイル
│  ├─ home.css              # マイページ用スタイル
│  └─ modal.css             # モーダル用スタイル
└─ views/
   ├─ ai.html               # AIおすすめビュー断片（id="view-ai"）
   ├─ chat.html             # チャットビュー断片（id="view-chat"）
   ├─ home.html             # マイページ断片（id="view-home"）
   └─ profile-modal.html    # プロフィール詳細モーダル断片
```

## 主要ファイルの役割

- `index.html`
  - `data-include` で `views/*.html` を取得し、必要な CSS（`data-css`）を動的に `<head>` へ追加。
  - すべての読み込み完了後に `scripts/app.js` を ES Modules としてロードして起動。
- `scripts/app.js`
  - アプリ全体の初期化、ログイン/ログアウト、ナビゲーション（`getViews`/`show`/`setActiveNav`）の制御。
  - 各ビューの初期化関数を呼び出し、状態に応じた初期表示を切り替え。
- `scripts/core/state.js`
  - `state`（ユーザー/自分の情報）と疑似実績の初期化、ローカル保存（`save`）/復元（`load`）。
  - 推薦スコア計算（`matchScore`, `getTopMatches`）、グルーピング（`makeGroupsByGoal`）等のロジック。
- `scripts/core/dom.js`
  - ビューDOMの取得（`getViews`）、ビュー表示切替（`show`）、ナビ活性化（`setActiveNav`）。
- `scripts/views/home.js`
  - 目的/スキルの保存（`initHome`）と入力欄への反映（`fillHomeFromState`）。
- `scripts/views/ai.js`
  - おすすめ個人/グループのリスト描画（`renderAI`）。プロフィールモーダル/チャット起動導線を提供。
- `scripts/views/chat.js`
  - チャットの初期化、送信処理、デモ応答の表示。送信時に実績を更新して保存。
- `scripts/views/profile-modal.js`
  - モーダルの開閉、対象ユーザーの表示、接続ボタンでチャットへ遷移。

## 動作環境と実行方法

- ビルド不要、静的ホスティングでそのまま動作（ES Modulesに対応したモダンブラウザ前提）。
- ローカルで確認する方法（例）：

```bash
# Pythonの簡易HTTPサーバーを使う例（Mac標準Python3）
ブラウザで http://localhost:8000 を開く
```

※ ファイルを直接ダブルクリックで開くと、`fetch` による断片読み込みがCORS制約で失敗する場合があります。ローカルサーバー経由を推奨します。

## 拡張/開発のヒント

- 新しいビューを追加するには：
  1) `views/xxx.html` と対応する CSS を `styles/xxx.css` に作成。
  2) `index.html` の `<main>` に `<div data-include="views/xxx.html" data-css="styles/xxx.css"></div>` を追加。
  3) 振る舞いが必要なら `scripts/views/xxx.js` を作成し、必要に応じて `scripts/app.js` から初期化を呼び出す。
  4) ナビボタンを増やす場合は、`index.html` の `<header>` にボタンを追加し、`data-target` にビューIDを設定。

## データ保存

- ブラウザの LocalStorage（キー: `iverse_state_v1`）を使用。`state.me` と `state.users` を保存/復元します。

## ライセンス

- プロジェクトのライセンスが未指定のため、必要に応じて追記してください。 
