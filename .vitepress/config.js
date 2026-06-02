const base = process.env.BASE_PATH || '/'

export default {
  title: 'Global Equality Lab',
  description: 'An open-source strategy laboratory for discovering scalable paths to global equality.',
  base,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Mission', link: '/' },
      { text: 'Concept Evolution', link: '/concept-evolution' },
      { text: 'Debate Log', link: '/debate-log' }
    ],
    sidebar: [
      {
        text: 'Laboratory',
        items: [
          { text: 'Mission', link: '/' },
          { text: 'Concept Evolution', link: '/concept-evolution' },
          { text: 'Debate Log', link: '/debate-log' }
        ]
      }
    ],
    socialLinks: []
  }
}
