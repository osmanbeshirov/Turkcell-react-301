import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext<any>('');

interface Props {
    children: React.ReactNode
}



export const LanguageContextProvide: React.FC<Props> = ({ children }) => {

    const [lang, changeLang] = useState('tr');

    const toggleLang = () => {
        changeLang(lang === 'tr' ? 'eng' : 'tr')
    }



    const values = {
        lang,
        changeLang
    }


    return <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>
}

export const useLang = () => {
    const context = useContext(LanguageContext);

    if (context === undefined) {
        throw new Error("useLang must be with in a LanguageProvider");
    }

    return context;
}

export default LanguageContext;