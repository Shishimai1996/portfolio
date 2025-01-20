import figma from '../../image/figma.svg'
import react from '../../image/react.jpg'
import html from '../../image/html.png'
import css from '../../image/css.png'
import express from '../../image/express.png'
import github from '../../image/github.png'
import javascript from '../../image/javascript.png'
import next from '../../image/next.png'
import node from '../../image/node.png'
import typescript from '../../image/typescript.png'
import vscode from '../../image/vscode.png'

interface ISkillList {
  id: string
  title: string
  items: {
    src: string
    tabIndex: number
    date: string
    alt: string
    style: string
  }[]
}
export const skillList: ISkillList[] = [
  {
    id: 'language',
    title: 'programmingLanguage',
    items: [
      {
        src: html,
        tabIndex: 0,
        date: '2022-08-01',
        alt: 'HTML',
        style: '10%',
      },
      {
        src: css,
        tabIndex: 1,
        date: '2022-08-01',
        alt: 'CSS',
        style: '6.3%',
      },
      {
        src: javascript,
        tabIndex: 2,
        date: '2022-08-01',
        alt: 'Javascript',
        style: '7%',
      },
      {
        src: typescript,
        tabIndex: 3,
        date: '2023-02-01',
        alt: 'Typescript',
        style: '7%',
      },
    ],
  },
  {
    id: 'framework',
    title: 'frameWork',
    items: [
      {
        src: react,
        tabIndex: 4,
        date: '2023-02-01',
        alt: 'React.js',
        style: '9%',
      },
      {
        src: next,
        tabIndex: 5,
        date: '2023-03-01',
        alt: 'Next.js',
        style: '7%',
      },
      {
        src: node,
        tabIndex: 6,
        date: '2023-03-01',
        alt: 'Node.js',
        style: '7%',
      },
      {
        src: express,
        tabIndex: 7,
        date: '2024-01-01',
        alt: 'Express.js',
        style: '7%',
      },
    ],
  },
  {
    id: 'design',
    title: 'designTool',
    items: [
      {
        src: figma,
        tabIndex: 8,
        date: '2022-10-01',
        alt: 'Figma',
        style: '5%',
      },
    ],
  },
  {
    id: 'development',
    title: 'developmentTool',
    items: [
      {
        src: vscode,
        tabIndex: 9,
        date: '2022-08-01',
        alt: 'Visual Studio Code',
        style: '6%',
      },
      {
        src: github,
        tabIndex: 10,
        date: '2022-08-01',
        alt: 'Github',
        style: '7%',
      },
    ],
  },
]
