import { defineConfig } from 'astro/config';

// GitHub Pages 用の設定。
// 独自ドメインを使う場合は `base` を削除し、`site` をそのドメインに変更する。
export default defineConfig({
  site: 'https://hirokishingu.github.io',
  base: '/peratango-lp',
  trailingSlash: 'ignore',
});
