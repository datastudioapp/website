import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import compress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import AutoImport from "astro-auto-import";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: "https://starter.cosmicthemes.com",
    adapter: cloudflare(),
    redirects: {
        "/admin": "/keystatic",
    },
    // i18n configuration must match src/config/translations.json.ts
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    markdown: {
        shikiConfig: {
            // Shiki Themes: https://shiki.style/themes
            theme: "css-variables",
            wrap: true,
        },
    },
    integrations: [
        // example auto import component into mdx files
        AutoImport({
            imports: [
                // https://github.com/delucis/astro-auto-import
                "@/components/admonition/Admonition.astro",
            ],
        }),
        mdx(),
        react(),
        icon(),
        keystatic(),
        sitemap(),
        compress({
            HTML: true,
            JavaScript: true,
            CSS: false, // enabling this can cause issues
            Image: false, // astro:assets handles this. Enabling this can dramatically increase build times
            SVG: false, // astro-icon handles this
        }),
    ],

    vite: {
        plugins: [tailwindcss()],
        // stop inlining short scripts to fix issues with ClientRouter
        build: {
            assetsInlineLimit: 0,
        },
    },
});