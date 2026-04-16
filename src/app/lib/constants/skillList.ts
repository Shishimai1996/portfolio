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
        src: `${BASE_PATH}/assets/image/html-5.png`,
        tabIndex: 0,
        date: "2022-08-01",
        alt: "HTML",
        style: 50,
      },
      {
        src: `${BASE_PATH}/assets/image/css-3.png`,
        tabIndex: 1,
        date: "2022-08-01",
        alt: "CSS",
        style: 50,
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
        src: `${BASE_PATH}/assets/image/programing.png`,
        tabIndex: 4,
        date: "2023-02-01",
        alt: "React.js",
        style: 50,
      },
      {
        src: `${BASE_PATH}/assets/image/nextjs.png`,
        tabIndex: 5,
        date: "2023-03-01",
        alt: "Next.js",
        style: 50,
      },
      {
        src: `${BASE_PATH}/assets/image/nodejs.png`,
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
      {
        src: `${BASE_PATH}/assets/image/nest.svg`,
        tabIndex: 8,
        date: "2024-01-01",
        alt: "nest.js",
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
        tabIndex: 9,
        date: "2022-10-01",
        alt: "Figma",
        style: 40,
      },
    ],
  },
  {
    id: "development",
    title: "developmentTool",
    items: [
      {
        src: `${BASE_PATH}/assets/image/vscode.png`,
        tabIndex: 10,
        date: "2022-08-01",
        alt: "Visual Studio Code",
        style: 50,
      },
      {
        src: `${BASE_PATH}/assets/image/logo.png`,
        tabIndex: 11,
        date: "2022-08-01",
        alt: "Github",
        style: 50,
      },
      {
        src: `${BASE_PATH}/assets/image/jira.webp`,
        tabIndex: 12,
        date: "2022-08-01",
        alt: "Jira",
        style: 50,
      },
    ],
  },
];
