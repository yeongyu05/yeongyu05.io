// .vitepress/config.js
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const mdDir = path.resolve(rootDir, "docs");

export default {
    title: "연규의 blog",
    description: "A VitePress site",
    srcDir: mdDir,
    themeConfig: {
        sidebar: getSidebar(),
        nav: getNav()
    },vite:{
        ssr:{
          format:"cjs",
        }
      },

}

function getSidebar() {
    return {
        "/": [
            {
                text: 'TIL📖',
                collapsible: true,
                items: [
                    { text: '2022년07월', link: '/TIL/202207/202207' },
                    { text: '2022년07월18일', link: '/TIL/202207/20220718' },
                    { text: '2022년07월19일', link: '/TIL/202207/20220719' },
                    { text: '2022년07월20일', link: '/TIL/202207/20220720' },
                    { text: '2022년07월21일', link: '/TIL/202207/20220721' },
                    { text: '2022년07월22일', link: '/TIL/202207/20220722' },
                    { text: '2022년07월23일', link: '/TIL/202207/20220723' },
                    { text: '2022년07월24일', link: '/TIL/202207/20220724' },
                    { text: '2022년07월25일', link: '/TIL/202207/20220725' },
                    { text: '2022년07월26일', link: '/TIL/202207/20220726' },
                    { text: '2022년07월27일', link: '/TIL/202207/20220727' },
                    { text: '2022년07월28일', link: '/TIL/202207/20220728' },
                    { text: '2022년07월29일', link: '/TIL/202207/20220729' },
                    { text: '2022년07월30일', link: '/TIL/202207/20220730' },
                    { text: '2022년07월31일', link: '/TIL/202207/20220731' },
                ]
            },
            {
                text: 'TIL📖',
                collapsible: true,
                items: [
                    { text: '2022년08월', link: '/TIL/202208/202208' },
                    { text: '2022년08월01일', link: '/TIL/202208/20220801' },
                    { text: '2022년08월02일', link: '/TIL/202208/20220802' },
                    { text: '2022년08월03일', link: '/TIL/202208/20220803' },
                    { text: '2022년08월04일', link: '/TIL/202208/20220804' },
                    { text: '2022년08월05일', link: '/TIL/202208/20220805' },
                    { text: '2022년08월06일', link: '/TIL/202208/20220806' },
                    { text: '2022년08월07일', link: '/TIL/202208/20220807' },
                    { text: '2022년08월08일', link: '/TIL/202208/20220808' },
                    { text: '2022년08월09일', link: '/TIL/202208/20220809' },
                    { text: '2022년08월10일', link: '/TIL/202208/20220810' },
                    { text: '2022년08월11일', link: '/TIL/202208/20220811' },
                    { text: '2022년08월12일', link: '/TIL/202208/20220812' },
                    { text: '2022년08월13일', link: '/TIL/202208/20220813' },
                    { text: '2022년08월14일', link: '/TIL/202208/20220814' },
                    { text: '2022년08월15일', link: '/TIL/202208/20220815' },
                    { text: '2022년08월16일', link: '/TIL/202208/20220816' },
                    { text: '2022년08월17일', link: '/TIL/202208/20220817' },
                    { text: '2022년08월18일', link: '/TIL/202208/20220818' },
                    { text: '2022년08월19일', link: '/TIL/202208/20220819' },
                    { text: '2022년08월20일', link: '/TIL/202208/20220820' },
                    { text: '2022년08월21일', link: '/TIL/202208/20220821' },
                    { text: '2022년08월22일', link: '/TIL/202208/20220822' },
                    { text: '2022년08월23일', link: '/TIL/202208/20220823' },
                    { text: '2022년08월24일', link: '/TIL/202208/20220824' },
                    { text: '2022년08월25일', link: '/TIL/202208/20220825' },
                    { text: '2022년08월26일', link: '/TIL/202208/20220826' },
                    { text: '2022년08월27일', link: '/TIL/202208/20220827' },
                    { text: '2022년08월28일', link: '/TIL/202208/20220828' },
                    { text: '2022년08월29일', link: '/TIL/202208/20220829' },
                    { text: '2022년08월30일', link: '/TIL/202208/20220830' },
                    { text: '2022년08월31일', link: '/TIL/202208/20220831' },
                ]
            },
            {
                text: 'TIL📖',
                collapsible: true,
                items: [
                    { text: '2022년09월', link: '/TIL/202209/202209' },
                    { text: '2022년09월01일', link: '/TIL/202209/20220901' },
                    { text: '2022년09월02일', link: '/TIL/202209/20220902' },
                    { text: '2022년09월03일', link: '/TIL/202209/20220903' },
                    { text: '2022년09월04일', link: '/TIL/202209/20220904' },
                    { text: '2022년09월05일', link: '/TIL/202209/20220905' },
                    { text: '2022년09월06일', link: '/TIL/202209/20220906' },
                    { text: '2022년09월07일', link: '/TIL/202209/20220907' },
                    { text: '2022년09월08일', link: '/TIL/202209/20220908' },
                    { text: '2022년09월09일', link: '/TIL/202209/20220909' },
                    { text: '2022년09월10일', link: '/TIL/202209/20220910' },
                    { text: '2022년09월11일', link: '/TIL/202209/20220911' },
                    { text: '2022년09월12일', link: '/TIL/202209/20220912' },
                    { text: '2022년09월13일', link: '/TIL/202209/20220913' },
                    { text: '2022년09월14일', link: '/TIL/202209/20220914' },
                ]
            },
        ]
    }
}

function getNav() {
    return [
        {
            text: 'Menu',
            items: [
                {
                    text: 'TIL',
                    link: "/TIL/202207/202207",
                    activeMatch: "/TIL/",
                },
                { 
                    text: 'TIL',
                    link: "/TIL/202208/202208",
                    activeMatch: "/TIL/",
                },
                { 
                    text: 'TIL',
                    link: "/TIL/202209/202209",
                    activeMatch: "/TIL/",
                },
                {
                    text: '회고',
                    link: "/TIL/202207/20220722",
                    link: "/TIL/202207/20220729",
                    link: '/TIL/202208/20220805',
                    link: '/TIL/202208/20220812',
                    link: '/TIL/202208/20220819',
                    link: '/TIL/202208/20220826',
                    link: '/TIL/202209/20220902',
                    link: '/TIL/202209/20220909',
                    activeMatch: "/TIL/",
                },
            ]
        }
    ]
}
