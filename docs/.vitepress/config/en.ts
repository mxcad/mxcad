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
            ]},
            { text: 'guide', link: '/en/docs/1.Start/1.BriefIntroduction' },
            { text: 'API document', link: '/en/api/README' },
            { text: "mxdraw document", items: [{
                text: "github",
                link: "https://github.com/mxcad/mxdraw"
            },{
                text: "gitee",
                link: "https://gitee.com/mxcadx/mxdrawx"
            }] }
        ]
    }
}