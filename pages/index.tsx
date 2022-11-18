import Head from "next/head";
import { ChangeEvent, useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [language, setLanguage] = useState("english");

  function handleLanguageChange(e: ChangeEvent<HTMLSelectElement>) {
    setLanguage(e.target.value);
  }

  return (
    <>
      <Head>
        <title>Portifolio | Esdras Silva</title>
      </Head>
      <main>
        {/* Page's header */}
        <header className="flex fle-row justify-between items-center bg-gray py-4 px-8 gap-4">
          {/* social and control */}
          <span className="flex flex-row">
            <select
              name="languages"
              id="languages"
              className="mr-8 px-5 rounded-md bg-darkblue text-white outline-none"
              defaultValue="english"
              onChange={(e) => handleLanguageChange(e)}
            >
              <option value="Portuguese">PT-BR</option>
              <option value="english">EN-US</option>
            </select>
            <span className="flex flex-row gap-4">
              <img src="./linkedin-icon.png" alt="linkedin-icon" width="30px" />
              <img src="./github-icon.png" alt="github-icon" width="30px" />
            </span>
          </span>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-row gap-8 text-lg font-bold text-darkblue">
              <li>
                <a href="#home-section">
                  {language == "english" ? "home" : "início"}
                </a>
              </li>
              <li>
                <a href="#about-section">
                  {language === "english" ? "about me" : "sobre mim"}
                </a>
              </li>
              <li>
                <a href="#skills-section">
                  {language === "english" ? "skills" : "habilidades"}
                </a>
              </li>
              <li>
                <a href="#projects-section">
                  {language == "english" ? "projects" : "projetos"}
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <section
          id="home-section"
          className="flex min-h-screen flex-row justify-center items-center gap-64"
        >
          <span>
            <h1 className="text-5xl w-[450px] leading-[56px]">
              {language === "english" ? "Hi i'm " : `Olá, me chamo `}
              <strong className="text-blue">Esdras Silva</strong>
            </h1>
            <h2 className="text-md font-extralight text-2xl">
              {language === "english"
                ? "Front-end developer"
                : "Desenvolvedor front-end"}
            </h2>
          </span>

          <img
            src="./perfil.png"
            alt="#"
            width={200}
            className="rounded-full"
          />
        </section>

        {/* About me Section */}
        <section
          id="about-section"
          className="flex min-h-screen flex-col justify-start items-start gap-28 bg-blue px-12 py-8 text-white"
        >
          <h3 className="text-3xl">
            {language === "english" ? "About me" : "Sobre mim"}
          </h3>

          <div className="max-w-3xl mx-auto text-justify text-xl flex flex-col gap-8 leading-8">
            <p>
              {language == "english"
                ? "Hi, glad to see you here! My name is Esdras Silva I am a front-end developer and I study systems analysis and development at the Federal Institute of Science and Technology of Paraíba"
                : "Oi, prazer em conhecer você. Meu nome é Esdras Silva, sou desenvolvedor front-end e faço análise e desenvolvimento de sistemas pelo Instituto Federal de Ciência e Tecnologia da Paraíba."}
            </p>

            <p>
              {language == "english"
                ? "I fell in love with the world of programming while doing control and automation engineering. I decided to leave the course to seek a central focus of studies, and that's when I found front-end development about a year and a half ago."
                : "Eu me apaixonei pela programação enquanto fazia engenharia de controle e automação pela faculdade já citada. Decidi abandonar o curso para procurar um foco central de estudos, e foi então que encontrei o desenvolvmento front-end, há mais ou menos um ano e meio atrás."}
            </p>

            <p>
              {language === "english"
                ? " Since then, I've been honing my skills in bringing beautiful and functional interfaces to life."
                : "Desde então, venho aprimorando minhas habilidades em dar vida a interfaces bonitas e funcionais."}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills-section"
          className=" flex min-h-screen flex-col justify-start items-start gap-28 px-12 py-8 text-dark-blue"
        >
          <h3 className="text-3xl text-darkblue">
            {language === "english" ? "Skills" : "Habilidades"}
          </h3>

          <div className="max-w-3xl mx-auto text-justify text-xl flex flex-col gap-8 leading-8">
            <ul
              id="skills-list"
              className="grid grid-cols-3 p-2 gap-11 gap-x-20"
            >
              <li className="">HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>styled-components</li>
              <li>Typescript</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects-section"
          className=" flex min-h-screen flex-col justify-start items-start gap-28 px-12 py-8 pb-32 text-dark-blue"
        >
          <h3 className="text-3xl text-darkblue">
            {language === "english" ? "Projects" : "Projetos"}
          </h3>

          <div className="flex flex-row w-full gap-4 justify-center">
            <Card
              bannerSource="./picture-aquarium.png"
              projectTitle="Aquarium"
              projectDescription={
                language == "english"
                  ? "Listen and share music for free"
                  : "Ouça e compartilhe músicas de graça"
              }
              icons={[
                "./next-icon.png",
                "./redux-icon.png",
                "tailwind-icon.png",
                "./typescript-icon.png",
                "firebase-icon.png",
              ]}
              projectUrl="https://aquariumm.vercel.app/"
              linkText={language === "english" ? "visit" : "visitar"}
            />

            <Card
              bannerSource="./picture-gaffy.png"
              projectTitle="GAFFY"
              projectDescription={
                language == "english"
                  ? "Find amazing games to play for free!"
                  : "Encontre jogos incríveis para jogar de graça!"
              }
              icons={[
                "./next-icon.png",
                "./redux-icon.png",
                "tailwind-icon.png",
              ]}
              projectUrl="https://gaffyy.netlify.app/"
              linkText={language === "english" ? "visit" : "visitar"}
            />

            <Card
              bannerSource="./picture-countinfo.png"
              projectTitle="Countinfo"
              projectDescription={
                language === "english"
                  ? "Let's learn about the countries"
                  : "Vamos aprender sobre os países"
              }
              icons={[
                "./next-icon.png",
                "./redux-icon.png",
                "tailwind-icon.png",
                "./typescript-icon.png",
                "material-icon.png",
              ]}
              projectUrl="https://countinfo.vercel.app/"
              linkText={language === "english" ? "visit" : "visitar"}
            />
          </div>
        </section>
      </main>
    </>
  );
}
