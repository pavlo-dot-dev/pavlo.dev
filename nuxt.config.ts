// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
                dir: "ltr",
            },
            title: "PAVLO.DEV",
            link: [
                {
                    href: "https://fonts.googleapis.com",
                    rel: "preconnect",
                },
                {
                    href: "https://fonts.gstatic.com",
                    rel: "preconnect",
                    crossorigin: "",
                },
                {
                    href: "https://fonts.googleapis.com/css2?family=Arimo:wght@500;600;700&family=Oswald:wght@600&display=swap",
                    rel: "stylesheet",
                },
                {
                    href: "/assets/css/normalize.css",
                    rel: "stylesheet",
                    type: "text/css",
                },
                {
                    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
                    rel: "stylesheet",
                },
                {
                    href: "/assets/css/global.css",
                    rel: "stylesheet",
                    type: "text/css",
                },
                {
                    href: "/apple-touch-icon.png",
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                }
            ],
        },
    },
    css: ["@/assets/css/app.scss"],
    modules: [
        '@nuxtjs/i18n',
    ],
    i18n: {
        vueI18n: './i18n.config.ts',
        locales: ['en', 'ru', 'ua'],
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        }
    }
})
