// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.duyuanxianren.com',
	integrations: [mdx(), sitemap()],
	output: 'static',
	i18n: {
		defaultLocale: 'zh-CN',
		locales: ['zh-CN'],
	},
});
