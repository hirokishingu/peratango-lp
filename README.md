# PeraTango LP

PeraTango の公式ランディングページ・サポート・プライバシーポリシーサイト。
[Astro](https://astro.build/) + TypeScript で構築し、GitHub Pages へデプロイします。

## 構成

```
src/
├── layouts/BaseLayout.astro   共通レイアウト
├── components/                Header / Hero / Features / Footer
└── pages/
    ├── index.astro            LP トップ
    ├── privacy.astro          プライバシーポリシー
    └── support.astro          サポート / FAQ
```

## ローカル開発

```bash
npm install
npm run dev        # http://localhost:4321 で確認
npm run typecheck  # Astro の型チェック
npm run build      # dist/ に本番ビルド
npm run preview    # 本番ビルドをローカル確認
```

## デプロイフロー

本リポジトリは **`deploy` ブランチへの push を契機に GitHub Pages へ公開** される仕組みです。`main` には自由にコミットでき、公開したいタイミングでのみ `deploy` を更新します。

### 初回セットアップ

1. リポジトリの **Settings → Pages** で **Source** を *GitHub Actions* に変更
2. `astro.config.ts` の `site` を自分の GitHub Pages URL に書き換える
   - 例: `https://hirokishingu.github.io`
3. `deploy` ブランチを作成して push

```bash
git checkout -b deploy
git push -u origin deploy
```

### 通常の公開フロー

```bash
# 1. main で開発
git checkout main
# ...編集・コミット...
git push origin main

# 2. 公開したくなったら deploy に反映
git checkout deploy
git merge main
git push origin deploy   # ← これで GitHub Actions が走り公開される
```

`deploy.yml` は `deploy` ブランチへの push と手動実行(workflow_dispatch)の両方で起動します。

## 独自ドメインを使う場合

1. `astro.config.ts` の `base: '/peratango-lp'` を削除
2. `site` を独自ドメインに変更
3. `public/CNAME` に独自ドメインを記載
