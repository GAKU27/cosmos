# 🌌 Cosmic Particle Art

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

マウスの動きに反応する美しいインタラクティブ粒子アートジェネレーター

<p align="center">
  <strong>✨ <a href="https://GAKU27.github.io/cosmic-particle-art/">デモを見る</a> ✨</strong>
</p>

---

## 📸 スクリーンショット

![Cosmic Particle Art Preview](docs/preview.png)

---

## ✨ 特徴

### 🎨 5つの美しいテーマ
- **宇宙** - パープル・バイオレット系の神秘的な雰囲気
- **オーロラ** - エメラルドグリーン・ミント系の幻想的な輝き
- **夕焼け** - オレンジ・イエロー系の温かな色合い
- **海洋** - ブルー・アクア系の爽やかな印象
- **ネオン** - マゼンタ・シアン系の未来的なビジュアル

### 🎮 インタラクティブ機能
- **マウス追従**: カーソルの動きに粒子がリアルタイムで反応
- **クリックバースト**: クリックで粒子が爆発的に生成
- **粒子接続**: 近くの粒子同士が美しいラインで接続
- **物理シミュレーション**: リアルな引力・反発効果

### ⚙️ カスタマイズ可能
- 粒子数: 20〜300個
- 粒子サイズ: 1〜8px
- 速度: 0.2〜3.0倍
- 接続距離: 50〜300px

### 📸 その他の機能
- スクリーンショット保存
- FPSカウンター表示
- レスポンシブデザイン

---

## 🚀 クイックスタート

### オンラインで試す

[デモページ](https://GAKU27.github.io/cosmic-particle-art/)をクリックするだけで、すぐに体験できます！

### ローカルで実行

```bash
# リポジトリをクローン
git clone https://github.com/GAKU27/cosmic-particle-art.git

# ディレクトリに移動
cd cosmic-particle-art

# ブラウザでindex.htmlを開く
# Windowsの場合:
start index.html

# macOSの場合:
open index.html

# Linuxの場合:
xdg-open index.html
```

または、任意のWebブラウザで `index.html` を直接開いてください。

---

## 🎯 使い方

1. **起動**: ブラウザで `index.html` を開く
2. **開始**: ウェルカム画面で「体験を始める」をクリック
3. **操作**:
   - マウスを動かして粒子を操作
   - クリックでバーストエフェクトを生成
   - スライダーでパラメーターを調整
   - テーマボタンで色を変更
4. **保存**: スクリーンショットボタンで作品を保存

---

## 🛠️ 技術スタック

- **HTML5**: セマンティックな構造
- **CSS3**: グラスモーフィズム、グラデーション、アニメーション
- **JavaScript (Vanilla)**: Canvas API、物理シミュレーション
- **Google Fonts**: Orbitron、Inter

### 主要な技術

- **Canvas API**: 高性能な描画エンジン
- **requestAnimationFrame**: 滑らかな60FPSアニメーション
- **CSS Variables**: 動的なテーマ切り替え
- **Glassmorphism**: モダンなUIデザイン

---

## 📁 プロジェクト構成

```
cosmic-particle-art/
│
├── index.html          # メインHTMLファイル
├── particle-art.css    # スタイルシート
├── particle-art.js     # メインJavaScript
├── README.md           # このファイル
├── LICENSE             # MITライセンス
└── docs/
    └── preview.png     # プレビュー画像
```

---

## 🎨 デザインシステム

### カラーパレット

#### 宇宙テーマ (デフォルト)
```css
--primary-color: #7c3aed;
--secondary-color: #a78bfa;
--accent-color: #c084fc;
```

#### その他のテーマ
詳細は `particle-art.css` のCSS変数定義を参照してください。

### タイポグラフィ
- **ディスプレイ**: Orbitron (未来的なフォント)
- **本文**: Inter (読みやすいサンセリフ)

---

## 🌟 今後の機能予定

- [ ] タッチデバイス対応の強化
- [ ] カスタムカラーピッカー
- [ ] アニメーションGIF出力
- [ ] 粒子の形状カスタマイズ
- [ ] BGM/効果音の追加
- [ ] SNS共有機能

---

## 🤝 コントリビューション

プルリクエストを歓迎します！大きな変更の場合は、最初にIssueを作成して変更内容を議論してください。

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

---

## 📄 ライセンス

このプロジェクトは [MIT License](LICENSE) の下でライセンスされています。

---

## 👨‍💻 作成者

**Your Name**

- GitHub: [@your-username](https://github.com/your-username)
- Website: [your-website.com](https://your-website.com)

---

## 🙏 謝辞

- デザインインスピレーション: 宇宙と自然の美しさ
- フォント: [Google Fonts](https://fonts.google.com/)
- アイコン: Unicode絵文字

---

## 📊 ブラウザサポート

- ✅ Chrome (推奨)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE (非対応)

---

<p align="center">
Made with ❤️ and ✨ JavaScript
</p>

<p align="center">
⭐ このプロジェクトが気に入ったら、スターをつけてください！
</p>
