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
        <header className="w-screen bg-gray text-darkblue px-2 py-4 flex flex-row justify-between fixed z-10 sm:text-xl sm:py-8 md:px-8">
          {/* social and control */}
          <span className="flex flex-row w-full justify-between items-center sm:w-fit sm:gap-4">
            <select
              name="languages"
              id="languages"
              defaultValue="english"
              onChange={(e) => handleLanguageChange(e)}
              className="outline-none bg-transparent border-none sm:text-md"
            >
              <option value="Portuguese">PT-BR</option>
              <option value="english">EN-US</option>
            </select>

            <span className="flex flex-row items-center gap-2">
              <a
                href="https://linkedin.com/in/esdras-silva-frontend"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./linkedin-icon.png"
                  alt="linkedin-icon"
                  width="30px"
                />
              </a>
              <a
                href="https://github.com/EsdrasLimaSilva"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./github-icon.png" alt="github-icon" width="30px" />
              </a>
            </span>
          </span>

          {/* Navigation */}
          <nav className="hidden sm:block">
            <ul className="flex flex-row gap-4 md:gap-8">
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

        {/* Home section */}
        <section
          id="home-section"
          className="min-h-screen flex flex-col items-center justify-center gap-12 sm:flex-row md:gap-32"
        >
          <span>
            <h1 className="text-3xl sm:text-4xl">
              {language === "english" ? "Hi i'm " : `Oi, sou `}
              <strong className="text-blue">Esdras Silva</strong>
            </h1>
            <h2 className="text-xl sm:text-2xl">
              {language === "english"
                ? "Front-end developer"
                : "Desenvolvedor front-end"}
            </h2>
          </span>

          <img src="./perfil.png" alt="#" width={200} className="rounded-3xl" />
        </section>

        {/* About me Section */}
        <section
          id="about-section"
          className="py-28 px-4 flex flex-col gap-16 text-justify text-white bg-blue min-h-screen"
        >
          <h3 className=" text-2xl sm:text-3xl">
            {language === "english" ? "About me" : "Sobre mim"}
          </h3>

          <div className="flex flex-col mx-auto items-center gap-8 text-md leading-7 max-w-5xl  sm:text-xl sm:leading-10">
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
          className="min-h-screen flex flex-col justity-center py-28 px-4 gap-16 sm:gap-32"
        >
          <h3 className="text-darkblue text-2xl sm:text-3xl">
            {language === "english" ? "Skills" : "Habilidades"}
          </h3>

          <div className="mx-auto">
            <ul
              id="skills-list"
              className="grid grid-cols-1 gap-8 mx-auto  [&>li]:bg-blue [&>li]:rounded-lg [&>li]:py-2 [&>li]:text-white [&>li]:text-center [&>li]:w-80 :bg-blue sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
            >
              <li>HTML</li>
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
          className="min-h-screen flex flex-col justity-center py-28 px-4 gap-16"
        >
          <h3 className="text-darkblue text-2xl sm:text-3xl">
            {language === "english" ? "Projects" : "Projetos"}
          </h3>

          <div className="flex flex-col gap-8 w-full items-center sm:flex-row sm:flex-wrap sm:justify-center">
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
