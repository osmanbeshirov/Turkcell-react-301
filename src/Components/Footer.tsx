import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

const Footer = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div>
            <hr />
            Footer
            Active thema: {theme}
        </div>
    )
}

export default Footer