interface Search {
  label: string
  keys: string[]
  page: number
}
export const searchList: Search[] = [
  {
    label: 'Profile',
    keys: ['bio', 'overview', 'background'],
    page: 0,
  },
  {
    label: 'Skill',
    keys: [
      'Abilities',
      'Expertise',
      'Competencies',
      'Proficiencies',
      'Capabilities',
    ],
    page: 1,
  },
  {
    label: 'Work',
    keys: [
      'Work Style',
      'Projects',
      'Job',
      'Pieces',
      'Creations',
      'Examples',
      'Portfolio Items',
    ],
    page: 2,
  },
  {
    label: 'Resume',
    keys: ['cv', 'career summary', 'professional history', 'employment record'],
    page: 3,
  },
  {
    label: 'Contact address',
    keys: [
      'get in touch',
      'reach out',
      'connect',
      'contact information',
      'inquiries',
    ],
    page: 0,
  },
  {
    label: 'About me',
    keys: ['about', 'me', 'introduction', 'personal statement'],
    page: 0,
  },
  {
    label: 'Programming',
    keys: [
      'coding',
      'software development',
      'software engineering',
      'application development',
    ],
    page: 1,
  },
  {
    label: 'Language',
    keys: ['scripting', 'technologies'],
    page: 1,
  },
  {
    label: 'Framework',
    keys: ['library', 'toolkit', 'architecture', 'system'],
    page: 1,
  },
  { label: 'Design tool', keys: ['graphics tool', 'creative tool'], page: 1 },

  {
    label: 'Development',
    keys: ['engineering', 'construction', 'build', 'implementation'],
    page: 1,
  },
  {
    label: 'Grafana',
    keys: [
      'dashboard',
      'visualization tool',
      'analytics platform',
      'reporting tool',
    ],
    page: 2,
  },
  {
    label: 'Chart',
    keys: [
      'graph',
      'diagram',
      'plot',
      'visualization',
      'figure',
      'data representation',
    ],
    page: 2,
  },
]
