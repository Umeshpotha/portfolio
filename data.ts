import { RiComputerLine } from "react-icons/ri";
import { lang, Project, Skill } from "./type";
import { MdOutlineInsights } from "react-icons/md";
import { DiGoogleAnalytics } from "react-icons/di";
import { CgWebsite } from "react-icons/cg";
import { TbApi } from "react-icons/tb";
import { FaSquareJs } from "react-icons/fa6";
import { VscRobot } from "react-icons/vsc";
import { BsCircleFill } from "react-icons/bs";

export const skills: Skill[] = [
  {
    title: "Data Science",
    about:
      "My works include <b>Data Preprocessing</b>, <b>Machine Learning</b> and <b>Deep Learning</b> with a strong foundation in Statistics  ",
    Icon: MdOutlineInsights,
  },
  {
    title: "Data Analytics",
    about:
      "I have a good Experience in working with tools like <b>SpreadSheets</b> , <b>Tableau</b> and other Bussiness Intelligence tools",
    Icon: DiGoogleAnalytics,
  },
  {
    title: "Frontend Web Development",
    about:
      "I have an Insightful experience in making Frontend within the web applications using <b> React </b> , <b>TailwindCSS</b> and <b>Type Script</b>",
    Icon: FaSquareJs,
  },
  {
    title: "API Development",
    about:
      " I have developed Many Api's using Flask and Rest APIs, and I am comfortable in using </b> PostMan</b>",
    Icon: TbApi,
  },
  {
    title: " Generative Ai",
    about:
      " Currently I am learning Gen Ai and i am comfortable with Natural language Processing and lang chain",
    Icon: VscRobot,
  },
  {
    title: "Programming",
    about:
      " I have a great Experience working with <b>Python</b> , <b>Java</b> and <b> Java Script </b>",
    Icon: RiComputerLine,
  },
];

export const languages: lang[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Kotlin",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Scikit-learn",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "TensorFlow",
    level: "80",
  },
];

export const tools: lang[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Tableau",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Rapid Miner",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Spreadsheets",
    level: "95",
  },
];

export const projects: Project[] = [
  {id:1,
    name: "Keine Armut",
    description:
      "An android application which caters in eradicasting poverty this project is developed under Google Solutionn Challenge",
    image_path: "/images/KeineArmut.png",
    deployedurl:
      "https://drive.google.com/file/d/1-srObb5fim0E2A1Y_tvUPVDTXW5fKGTN/view",
    giturl: "https://github.com/chetankumarpulipati/KeineArmut",
    category: ["App", "DataScience"],
    TechStack: ["kotlin", "ML", "Api"],
  },
  {id:2,
    name: "Credit Cruise",
    description:
      "A web Application which makes the loan approval process simple and fast. This project is developed under Hack Bangalore ",
    image_path: "/images/creditcruise.png",
    deployedurl: "NA",
    giturl: "https://github.com/Umeshpotha/CreditCruise",
    category: ["Web", "DataScience"],
    TechStack: ["React", "MongoDB", "Node js", "Api"],
  },
  {id:3,
    name: "Loan Approval Api",
    description:
      "a machine learning model which predicts whether the application can proceeded or rejected",
    image_path: "/images/Designer.jpeg",
    deployedurl: "NA",
    giturl: "https://github.com/Umeshpotha/LoanApprovalPredictionAPI",
    category: ["Api", "Python", "DataScience"],
    TechStack: ["Flask", "Python", "ML"],
  },
  {id:4,
    name: "CV Information Reader",
    description:
      "The CV Information Extractor is a web application built using Flask designed to extract email addresses phone numbers and text content from uploaded files in PDF or DOCX formats. This project facilitates the extraction of valuable information from various types of documents aiding in tasks such as data mining document analysis and contact information retrieval.",
    image_path: "/images/cvinformationextractor.jpg",
    deployedurl: "https://cv-information-reader.onrender.com/",
    giturl: "https://github.com/Umeshpotha/Cv_Information_Reader",
    category: ["Web", "Python"],
    TechStack: ["Html", "CSS", "Flask"],
  },
  {id:5,
    name: "Global Land Surface Temperature",
    description:
      "We analysed the dataset climate changes on earth and the dataset is from kaggle.com. Since all the data in other datasets are not from the same date we removed rows upto 1855.",
    image_path: "/images/theme.png",
    deployedurl: "NA",
    giturl:
      "https://github.com/Umeshpotha/globallandsurfacetemperatures_analysis",
    category: ["Python"],
    TechStack: [
      "Pandas",
      "Numpy",
      "Seaborn",
      "Matplotlib",
      "datetime",
      "Matplotlib",
    ],
  },
  {id:6,
    name: "Calculator",
    description: "A Traditional Calculator developed using ",
    image_path: "/images/Calculator.png",
    deployedurl: "Run the python script to use",
    giturl: "https://github.com/Umeshpotha/Calculator",
    category: ["Python"],
    TechStack: ["Python"],
  },
  {id:7,
    name: "Software Automation Testing",
    description:
      "Testing The amazon application includes selenium and groovy test cases",
    image_path: "/images/download.png",
    deployedurl: "Not Available",
    giturl: "https://github.com/Umeshpotha/SoftwareAutomationTesting",
    category: ["Testing"],
    TechStack: ["Selenium", "Java", "Groovy"],
  },
];
