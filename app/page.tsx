import useTranslate from "next-translate/useTranslation";
import Section from "./components/Section";
import Header from "./components/Header";
import Icon from "./components/Icon";
import Paragraph from "./components/Paragraph";
import Skill from "./components/Skill";

//icons
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJava } from 'react-icons/di';
import { SiJavascript, SiSass, SiTailwindcss, SiStyledcomponents, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiMongodb, SiMysql, SiFigma } from 'react-icons/si';
import Project from "./components/Project";

export default function Home(){
  const {t} = useTranslate("common");

  return <main className="w-full max-w-3xl mx-auto">
    <Section id="home">
      <Header />
      <div className="flex flex-col justify-center items-center h-[80vh] gap-8 md:flex-row">
        <Icon />
        
        <div className="text-center">
          <h1 className="text-blue-800 font-bold text-3xl mt-4">Esdras Silva</h1>
          <h2 className="text-gray-800">{t('profission')}</h2>
        </div>

      </div>
    </Section>

    <Section id="about">
      <h2 className="font-bold text-xl text-stone-800">{t('about-title')}</h2>
      <Paragraph>{t('about-content-1')}</Paragraph>
      <Paragraph>{t('about-content-2')}</Paragraph>
      <Paragraph>{t('about-content-3')}</Paragraph>
    </Section>

    <Section id="skills" classes="py-16 md:py-4">
      <h2 className="text-xl text-stone-800 font-semibold mb-4">{t('skills-title')}</h2>
      <ul className="w-full flex flex-row flex-wrap gap-4">
        <Skill title="Figma" icon={<SiFigma/>}/>
        <Skill title="HTML5" icon={<AiFillHtml5/>}/>
        <Skill title="CSS3" icon={<DiCss3/>}/>
        <Skill title="SASS" icon={<SiSass/>}/>
        <Skill title="Tailwindcss" icon={<SiTailwindcss/>}/>
        <Skill title="Styled-components" icon={<SiStyledcomponents/>}/>
        <Skill title="Javascript ES6+" icon={<SiJavascript/>}/>
        <Skill title="Typescript" icon={<SiTypescript/>}/>
        <Skill title="React.js" icon={<SiReact/>}/>
        <Skill title="Next.js" icon={<SiNextdotjs/>}/>
        <Skill title="Redux Toolkit" icon={<SiRedux/>}/>
        <Skill title="Basic Java" icon={<DiJava/>}/>
        <Skill title="Basic Mongodb" icon={<SiMongodb/>}/>
        <Skill title="Basic MySQL" icon={<SiMysql/>}/>
      </ul>
    </Section>

    <Section id="projects" classes="py-16">
      <h2 className="text-xl text-stone-800 font-semibold mb-4">{t('projects-title')}</h2>
      <ul className="w-full flex flex-row flex-wrap gap-4">
        <Project title="Aquaritum" description="Share and listen to music. It was built with nextjs, typescript, Sanity.io and tailwindcss" githublink="https://github.com/EsdrasLimaSilva/aquarium" demolink="https://aquariumm.vercel.app/" />
        <Project title="Sisgo" description="My personal blog about technology built with Nextjs, Typescript, SASS modules and Mongodb" githublink="https://github.com/EsdrasLimaSilva/aquarium" demolink="https://aquariumm.vercel.app/" />
        <Project title="Gaffy" description="Find free games to play. This is a platform built with React and Tailwindcss, consuming the FreeToGame API" githublink="https://github.com/EsdrasLimaSilva/aquarium" demolink="https://aquariumm.vercel.app/" />
        <Project title="Countinfo" description="Just a static website made from a challenge in FrontendMentor built with MaterialUI" githublink="https://github.com/EsdrasLimaSilva/aquarium" demolink="https://aquariumm.vercel.app/" />
      </ul>
    </Section>
  </main>
}