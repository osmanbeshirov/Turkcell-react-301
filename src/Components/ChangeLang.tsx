import React, { useContext } from 'react'
import LanguageContext from '../Context/LanguageContext'

const ChangeLang = () => {
    const { lang, changeLang } = useContext(LanguageContext)
    return (
        <div>Active Lang: {lang}

            <button onClick={() => changeLang('eng')}>ENG</button>
            <button onClick={() => changeLang('tr')}>TR</button>
            <button onClick={() => changeLang('deu')}>DEU</button>
        </div>
    )
}

export default ChangeLang