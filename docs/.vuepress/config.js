module.exports = {
    title: 'SRC Web Team Tools & Tech',
    description: 'Documentation on all our technologies we use',
    head:[
        ['link', { rel: "shortcut icon", href: "/favicon.ico"}]
    ],
    // comment line below for local
    // UNCOMMENT LINE BEFORE RUNNING BUILD SCRIPT!!!
    base: '/src-tools-tech/',
    themeConfig:{
        nav: [
            { text: 'Home', link: '/' },
            { text: ' CU Boulder Github', link: 'https://github.com/CuBoulder' }
        ],
        repo: 'CuBoulder/src-tools-tech',
        repoLabel: 'Contribute!',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Edit this page!',
        logo: '/cu-logo.png',
        searchPlaceholder: 'Search...',
        sidebar: [
            '/',
            '/html',
            '/css',
            '/javascript',
            '/browser',
            '/http',
            '/drupal8',
            '/wordpress',
            '/passwords',
            '/devops',
            '/caching',
            '/databases',
            '/versioncontrol',
            '/php',
            '/python',
            '/webservers',
            '/cloudhosting',
            '/pantheon',
            '/containers',
            '/lando',
            '/ide',
            '/packagemanagers',
            '/cli',
            '/logging',
            '/resources'
        ]
    }
}