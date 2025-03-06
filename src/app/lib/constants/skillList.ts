import figma from "@assets/image/figma.svg";
import react from "@assets/image/react.jpg";
import html from "@assets/image/html.png";
import css from "@assets/image/css.png";
import express from "@assets/image/express.png";
import github from "@assets/image/github.png";
import javascript from "@assets/image/javascript.png";
import next from "@assets/image/next.png";
import node from "@assets/image/node.png";
import typescript from "@assets/image/typescript.png";
import vscode from "@assets/image/vscode.png";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
interface ISkillList {
  id: string;
  title: string;
  items: {
    src: string;
    tabIndex: number;
    date: string;
    alt: string;
    style: number;
  }[];
}
export const skillList: ISkillList[] = [
  {
    id: "language",
    title: "programmingLanguage",
    items: [
      {
        src: `${BASE_PATH}/assets/image/html.png`,
        tabIndex: 0,
        date: "2022-08-01",
        alt: "HTML",
        style: 50,
      },
      {
        src: `${BASE_PATH}/assets/image/css.png`,
        tabIndex: 1,
        date: "2022-08-01",
        alt: "CSS",
        style: 40,
      },
      {
        src: `${BASE_PATH}/assets/image/javascript.png`,
        tabIndex: 2,
        date: "2022-08-01",
        alt: "Javascript",
        style: 50,
      },
      {
        src: `${BASE_PATH}/assets/image/typescript.png`,
        tabIndex: 3,
        date: "2023-02-01",
        alt: "Typescript",
        style: 50,
      },
    ],
  },
  {
    id: "framework",
    title: "frameWork",
    items: [
      {
        src: `${BASE_PATH}/assets/image/react.jpg`,
        tabIndex: 4,
        date: "2023-02-01",
        alt: "React.js",
        style: 50,
      },
      {
        src: `${BASE_PATH}/assets/image/next.png`,
        tabIndex: 5,
        date: "2023-03-01",
        alt: "Next.js",
        style: 50,
      },
      {
        src: `${BASE_PATH}/assets/image/node.png`,
        tabIndex: 6,
        date: "2023-03-01",
        alt: "Node.js",
        style: 50,
      },
      {
        src: `${BASE_PATH}/assets/image/express.png`,
        tabIndex: 7,
        date: "2024-01-01",
        alt: "Express.js",
        style: 50,
      },
    ],
  },
  {
    id: "design",
    title: "designTool",
    items: [
      {
        src: `${BASE_PATH}/assets/image/figma.svg`,
        tabIndex: 8,
        date: "2022-10-01",
        alt: "Figma",
        style: 50,
      },
    ],
  },
  {
    id: "development",
    title: "developmentTool",
    items: [
      {
        src: `${BASE_PATH}/assets/image/vscode.png`,
        tabIndex: 9,
        date: "2022-08-01",
        alt: "Visual Studio Code",
        style: 50,
      },
      {
        src: `${BASE_PATH}/assets/image/github.png`,
        tabIndex: 10,
        date: "2022-08-01",
        alt: "Github",
        style: 50,
      },
    ],
  },
];
