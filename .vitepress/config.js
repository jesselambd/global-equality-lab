const base = process.env.BASE_PATH || '/'

export default {
  title: 'Global Equality Lab',
  description: 'A public strategy process for choosing what organization to found to reduce global economic inequality.',
  base,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Start Here', link: '/start-here' },
      { text: 'Current Idea', link: '/plain-english-summary' },
      { text: 'Strategy Record', link: '/concept-evolution' },
      { text: 'Debate Log', link: '/debate-log' },
      { text: 'Open Questions', link: '/open-questions' },
      { text: 'Contribute', link: '/CONTRIBUTING' },
      { text: 'AI Onboarding', link: '/AI_ONBOARDING' }
    ],
    sidebar: [
      {
        text: 'Public Layer',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Start Here', link: '/start-here' },
          { text: 'Current Idea', link: '/plain-english-summary' },
          { text: 'Contribute', link: '/CONTRIBUTING' }
        ]
      },
      {
        text: 'Expert And AI Layer',
        items: [
          { text: 'Strategy Record', link: '/concept-evolution' },
          { text: 'Debate Log', link: '/debate-log' },
          { text: 'Open Questions', link: '/open-questions' },
          { text: 'Scoring Rubric', link: '/scoring-rubric' },
          { text: 'AI Onboarding', link: '/AI_ONBOARDING' },
          { text: 'AI Stress Test Prompt', link: '/prompts/ai-stress-test' },
          { text: 'Second-Round Rebuttal Prompt', link: '/prompts/second-round-rebuttal' },
          { text: 'Scoring Instructions Prompt', link: '/prompts/scoring-instructions' }
        ]
      }
    ],
    socialLinks: []
  }
}
