import { createContext, useState } from 'react';

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


export default LanguageContext;