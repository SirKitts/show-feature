export default {
  base: '/show-feature/', // 👈 Add this line
  title: 'Show Feature',
  description: 'Smart feature toggling for CLI, Vue, React, and Web Components',
  themeConfig: {
    nav: [
      { text: 'CLI', link: '/cli' },
      { text: 'HTML', link: '/html' },
      { text: 'Vue', link: '/vue' },
      { text: 'React', link: '/react' },
      { text: 'Playground', link: '/playground' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'CLI', link: '/cli' },
          { text: 'HTML', link: '/html' },
          { text: 'Vue', link: '/vue' },
          { text: 'React', link: '/react' },
          { text: 'Playground', link: '/playground' }
        ]
      }
    ]
  }
};
