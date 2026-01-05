# 🚀 GitHub公開手順

このドキュメントは、Cosmic Particle ArtをGitHubにアップロードして公開する手順を説明します。

---

## 📋 前提条件

- GitHubアカウントを持っていること
- Gitがインストールされていること（まだの場合は以下を参照）

### Gitのインストール確認

```powershell
git --version
```

このコマンドでバージョンが表示されればOKです。表示されない場合は[Git公式サイト](https://git-scm.com/)からダウンロードしてインストールしてください。

---

## 🌐 GitHubリポジトリの作成

### 1. GitHubで新しいリポジトリを作成

1. [GitHub](https://github.com/)にログイン
2. 右上の「+」ボタンから「New repository」を選択
3. 以下の情報を入力:
   - **Repository name**: `cosmic-particle-art`
   - **Description**: `マウスの動きに反応する美しいインタラクティブ粒子アートジェネレーター`
   - **Public** を選択（一般公開する場合）
   - **Initialize this repository with a README** は **チェックしない**
4. 「Create repository」をクリック

---

## 📤 コードのアップロード

### 方法1: Gitコマンドを使用（推奨）

プロジェクトディレクトリ (`cosmic-particle-art`) で以下のコマンドを実行:

```powershell
# Gitリポジトリの初期化
cd "C:\Users\GAKU\OneDrive\ドキュメント\新しいフォルダー\cosmic-particle-art"
git init

# Gitの設定（初回のみ）
git config user.name "あなたの名前"
git config user.email "your-email@example.com"

# ファイルをステージング
git add .

# コミット
git commit -m "Initial commit: Cosmic Particle Art v1.0.0"

# リモートリポジトリを追加（your-usernameを実際のGitHubユーザー名に置き換えてください）
git remote add origin https://github.com/your-username/cosmic-particle-art.git

# メインブランチの名前をmainに変更
git branch -M main

# GitHubにプッシュ
git push -u origin main
```

### 方法2: GitHub Desktopを使用

1. [GitHub Desktop](https://desktop.github.com/)をダウンロード・インストール
2. GitHub Desktopを開き、GitHubアカウントでサインイン
3. 「File」→「Add local repository」を選択
4. `cosmic-particle-art`フォルダを選択
5. 「Publish repository」をクリック

### 方法3: Webインターフェースから直接アップロード

1. GitHubのリポジトリページを開く
2. 「uploading an existing file」をクリック
3. すべてのファイルをドラッグ&ドロップ
4. 「Commit changes」をクリック

---

## 🌍 GitHub Pagesで公開

### 1. GitHub Pagesを有効化

1. GitHubのリポジトリページを開く
2. 「Settings」タブをクリック
3. 左メニューから「Pages」を選択
4. 「Source」で「main」ブランチを選択
5. フォルダは「/ (root)」を選択
6. 「Save」をクリック

### 2. 公開URLの確認

数分後、`https://your-username.github.io/cosmic-particle-art/` でアクセス可能になります。

---

## ✅ 確認事項

プッシュ後、以下を確認してください:

- ✅ すべてのファイルがGitHubにアップロードされている
- ✅ README.mdが正しく表示されている
- ✅ プレビュー画像が表示されている
- ✅ GitHub Pagesのサイトが正常に動作している

---

## 🔧 README.mdの更新

README.md内の以下の部分を実際のURLに置き換えてください:

- `your-username` → 実際のGitHubユーザー名
- デモページURL
- プロフィールリンク

```markdown
# 編集例
- [デモを見る](https://your-username.github.io/cosmic-particle-art/)
↓
- [デモを見る](https://john-doe.github.io/cosmic-particle-art/)
```

---

## 🎯 次のステップ

### リポジトリの説明を追加

GitHubリポジトリページで:
1. ⚙️（歯車アイコン）をクリック
2. Descriptionを追加
3. Topicsを追加（例: `particle-system`, `canvas-api`, `javascript`, `interactive-art`）

### ソーシャルシェア

- Twitter、Reddit、Hacker Newsなどで共有
- Qiitaなどで技術記事を書く
- CodePenやJSFiddleにも展開

---

## ❓ トラブルシューティング

### Gitが認識されない
→ Gitをインストールしてから、PowerShellを再起動してください

### 認証エラーが出る
→ GitHub Personal Access Tokenを使用してください
1. GitHub Settings → Developer settings → Personal access tokens
2. 新しいトークンを生成
3. `repo`スコープを選択
4. パスワードの代わりにトークンを使用

### プッシュできない
→ リモートURLを確認してください
```powershell
git remote -v
```

---

## 📞 サポート

問題が発生した場合は、GitHubのIssueで質問してください！

Happy coding! ✨
