import useTranslate from "next-translate/useTranslation";
import Section from "./components/Section";
import Header from "./components/Header";
import Icon from "./components/Icon";
import Paragraph from "./components/Paragraph";

export default function Home(){
  const {t} = useTranslate("common");

  return <>
    <Section id="home">
      <Header />
      <main className="flex flex-col justify-center items-center h-[80vh] gap-8 md:flex-row">
        <Icon />
        
        <div>
          <h1 className="text-orange-600 font-bold text-3xl mt-4">Esdras Silva</h1>
          <h2 className="text-gray-800">{t('profission')}</h2>
        </div>

      </main>
    </Section>
    <Section id="about">
      <h2 className="font-bold text-xl text-orange-600">{t('about-title')}</h2>
      <Paragraph>{t('about-content-1')}</Paragraph>
      <Paragraph>{t('about-content-2')}</Paragraph>
      <Paragraph>{t('about-content-3')}</Paragraph>
    </Section>
  </>
}