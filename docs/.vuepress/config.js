module.exports = {
    // 站点配置
    base: '/feng-blog/',
    lang: 'zh-CN',
    title: 'Feng-blog',
    description: 'Vue 驱动的静态网站生成器',
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',

      navbar: require('./navbar'),
      sidebar: require('./sidebar')
    },
  }