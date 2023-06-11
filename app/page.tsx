import useTranslate from "next-translate/useTranslation";
import Section from "./components/Section";
import Header from "./components/Header";

export default function Home(){
  const {t} = useTranslate("common");

  return <>
    <Section id="home">
      <Header />
      <h1>Esdras Silva</h1>
      <h2>{t('profission')}</h2>
    </Section>
  </>
}