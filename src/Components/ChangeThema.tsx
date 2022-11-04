import React, { useContext } from 'react'
import ThemaContext from '../Context/ThemeContext'

const ChangeThema = () => {
    const { theme, toggleTheme } = useContext(ThemaContext);

    console.log()
    return (
        <div>
            Active theme: {theme}
            <button onClick={() => toggleTheme()}>Change Thema</button>
        </div>
    )
}

export default ChangeThema