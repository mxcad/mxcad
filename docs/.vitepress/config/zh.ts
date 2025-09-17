
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    dir: "zh",
    themeConfig: {
        nav: [
            { text: '官网', items: [
                {
                    text: "梦想CAD控件",
                    link: "https://www.mxdraw.com/"
                },
                {
                    text: "CAD梦想画图",
                    link: "https://www.mxdraw3d.com/"
                }
            ]},
            { text: '指南', link: '/zh/docs/1.Start/1.BriefIntroduction' },
            { text: 'API文档', link: '/zh/api/README' },
            { text: "mxdraw文档", items: [{
                text: "github",
                link: "https://mxcad.github.io/mxdraw_docs"
            },{
                text: "gitee",
                link: "https://mxcadx.gitee.io/mxdraw_docs"
            },{
                text: "官网",
                link: "https://www.mxdraw3d.com/mxdraw_docs" 
            }] }
        ],
    }
}