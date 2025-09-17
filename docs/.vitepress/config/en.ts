import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    "dir": "en",
    themeConfig: {
        nav: [
            { text: 'OS', items: [
                {
                    text: "WEB CAD SDK",
                    link: "https://www.webcadsdk.com/"
                },
                {
                    text: "Dream CAD control",
                    link: "https://www.mxdraw.com/"
                },
                {
                    text: "CAD Dream drawing",
                    link: "https://www.mxdraw3d.com/"
                }
            ]},
            { text: 'guide', link: '/en/docs/1.Start/1.BriefIntroduction' },
            { text: 'API document', link: '/en/api/README' },
            { text: "mxdraw document", items: [{
                text: "github",
                link: "https://mxcad.github.io/mxdraw_docs"
            },{
                text: "gitee",
                link: "https://mxcadx.gitee.io/mxdraw_docs"
            }] }
        ]
    }
}