import React from 'react';

import '../src/styles.css'

import ThemeContext, { ThemeContextProvider } from './Context/ThemeContext';
import ChangeThema from './Components/ChangeThema';
import Footer from './Components/Footer';
import { LanguageContextProvide } from './Context/LanguageContext';
import ChangeLang from './Components/ChangeLang';

import { useContext } from 'react';



const Container = () => {

    const { theme } = useContext(ThemeContext);

    console.log(theme)
    return (
        <div className={`container ${theme}`} >

            <ChangeThema />
            <hr />
            <ChangeLang />

            <Footer />

        </div>
    )
}

export default Container