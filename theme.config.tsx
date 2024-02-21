import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
	logo: <span>Artisanal Futures</span>,
	project: {
		link: "https://github.com/ahunnii/artisanal-futures",
	},
	chat: {
		link: "https://discord.com",
	},
	docsRepositoryBase: "https://github.com/ahunnii/artisanal-futures-documentation",
	footer: {
		text: <p>© {new Date().getFullYear()} Artisanal Futures Docs. All rights reserved. </p>,
	},
};

export default config;
