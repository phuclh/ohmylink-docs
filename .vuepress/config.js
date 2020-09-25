module.exports = {
    title: "Oh My Link",
    description: "Oh My Link Documentation",
    base: '/',

    head: [
        [
            'link',
            {
                href:
                    'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i',
                rel: 'stylesheet',
                type: 'text/css',
            },
        ],
    ],

    themeConfig: {
        logo: '/assets/img/logo.png',
        displayAllHeaders: true,
        activeHeaderLinks: false,
        searchPlaceholder: 'Press / to search',
        lastUpdated: false, // string | boolean
        sidebarDepth: 0,

        repo: '',

        docsRepo: 'phuclh/ohmylink-docs',
        editLinks: true,
        editLinkText: 'Help us improve this page!',

        nav: [
            { text: 'Home', link: 'https://ohmylink.app/', target: '_self' },
            { text: 'Dashboard', link: 'https://ohmylink.app/app', target: '_self' },
        ],

        sidebar: {
            '/vi/': require('./vi')
        },
    },
}
