import en from "@/locales/en.json";
import pt from "@/locales/pt.json";

import { ReactNode, createContext, useState } from "react";

interface TranslateProps {
    dictionary: typeof en;
    changeDict: (lang: "en" | "pt") => void;
    lang: string;
}

export const TranslateContext = createContext<undefined | TranslateProps>(
    undefined
);

export default function TranslateProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [dictionary, setDictionary] = useState(en);
    const [lang, setLang] = useState<"en" | "pt">("en");

    const changeDict = (lang: "en" | "pt") => {
        if (lang === "en") {
            setDictionary(en);
            setLang("en");
        } else if (lang == "pt") {
            setDictionary(pt);
            setLang("pt");
        }
    };

    return (
        <TranslateContext.Provider value={{ dictionary, changeDict, lang }}>
            {children}
        </TranslateContext.Provider>
    );
}
