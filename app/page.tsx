import useTranslate from "next-translate/useTranslation";
import Link from "next/link";

export default function Home(){
  const {t} = useTranslate("common");

  return <>
  <h1>{t('title')}</h1>
  <div className="flex flex-col [&>a]:text-blue-500 [&>a]:underline">
    <Link href="/?lang=pt">português</Link>
    <Link href="/?lang=en">english</Link>
  </div>
  </>
}