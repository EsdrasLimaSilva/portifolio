"use client";

import Section from "./components/Section";
import Header from "./components/Header";
import Icon from "./components/Icon";
import Paragraph from "./components/Paragraph";
import Skill from "./components/Skill";

//icons
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJava } from "react-icons/di";
import {
    SiJavascript,
    SiSass,
    SiTailwindcss,
    SiStyledcomponents,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiMongodb,
    SiMysql,
    SiFigma,
    SiGithub,
    SiLinkedin,
} from "react-icons/si";
import Project from "./components/Project";
import { useContext } from "react";
import { TranslateContext } from "@/contexts/translateContext";
import Link from "next/link";

export default function Home() {
    const { dictionary: d, lang } = useContext(TranslateContext)!;

    return (
        <main className="w-full max-w-3xl mx-auto pb-80">
            <Section id="home">
                <Header />
                <div className="flex flex-col justify-center items-center h-[80vh] gap-8 md:flex-row">
                    <Icon />

                    <div className="text-center">
                        <h1 className="text-blue-800 font-bold text-3xl mt-4">
                            Esdras Silva
                        </h1>
                        <h2 className="text-gray-800">{d.profission}</h2>

                        <div className="flex flex-row text-4xl text-blue-700 gap-2 justify-center mt-4 [&>a:hover]:text-blue-600">
                            <Link
                                href="https://github.com/EsdrasLimaSilva"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SiGithub />
                            </Link>

                            <Link
                                href="https://linkedin/in/esdras-silva-frontend"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SiLinkedin />
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="about">
                <h2 className="font-bold text-xl text-stone-800">
                    {d["about-title"]}
                </h2>
                <Paragraph>{d["about-content-1"]}</Paragraph>
                <Paragraph>{d["about-content-2"]}</Paragraph>
                <Paragraph>{d["about-content-3"]}</Paragraph>
            </Section>

            <Section id="skills" classes="py-16 md:py-4">
                <h2 className="text-xl text-stone-800 font-semibold mb-4">
                    {d["skills-title"]}
                </h2>
                <ul className="w-full flex flex-row flex-wrap gap-4">
                    <Skill title="Figma" icon={<SiFigma />} />
                    <Skill title="HTML5" icon={<AiFillHtml5 />} />
                    <Skill title="CSS3" icon={<DiCss3 />} />
                    <Skill title="SASS" icon={<SiSass />} />
                    <Skill title="Tailwindcss" icon={<SiTailwindcss />} />
                    <Skill
                        title="Styled-components"
                        icon={<SiStyledcomponents />}
                    />
                    <Skill title="Javascript ES6+" icon={<SiJavascript />} />
                    <Skill title="Typescript" icon={<SiTypescript />} />
                    <Skill title="React.js" icon={<SiReact />} />
                    <Skill title="Next.js" icon={<SiNextdotjs />} />
                    <Skill title="Redux Toolkit" icon={<SiRedux />} />
                    <Skill title="Basic Java" icon={<DiJava />} />
                    <Skill title="Basic Mongodb" icon={<SiMongodb />} />
                    <Skill title="Basic MySQL" icon={<SiMysql />} />
                </ul>
            </Section>

            <Section id="projects" classes="py-16">
                <h2 className="text-xl text-stone-800 font-semibold mb-4">
                    {d["projects-title"]}
                </h2>
                <ul className="w-full flex flex-row flex-wrap gap-4">
                    <Project
                        title={d["project-1-title"]}
                        description={d["project-1-description"]}
                        githublink="https://github.com/EsdrasLimaSilva/sisgo"
                        demolink="https://sisgo.vercel.app/"
                    />

                    <Project
                        title={d["project-2-title"]}
                        description={d["project-2-description"]}
                        githublink="https://github.com/EsdrasLimaSilva/aquarium"
                        demolink="https://aquariumm.vercel.app/"
                    />

                    <Project
                        title={d["project-3-title"]}
                        description={d["project-3-description"]}
                        githublink="https://github.com/EsdrasLimaSilva/gaffy"
                        demolink="https://gaffyy.netlify.app/"
                    />
                </ul>
            </Section>
        </main>
    );
}
