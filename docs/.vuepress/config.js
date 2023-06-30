module.exports = {
    title: 'wcodeplus',
    description: '个人文章存档',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加网页标签图标)
    ],
    base: '/',
    themeConfig: {
        nav: [ // 导航栏配置
            {
                text: 'java',
                link: '/java/',
                items: [
                    { text: 'JVM', link: '/' },
                    { text: '并发编程', link: '/' }
                ]
            },
            { text: '书籍', link: '/books/' }
        ]
    }
};
