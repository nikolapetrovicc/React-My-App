import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext';
import { Link } from 'react-router-dom'


//useContext hook koristimo u komponenti na dnu, a moramo da importujemo i ThemeContext koji smo napravili

const CharacterCard = ({
    //ovde definisemo propove
    id = 1,
    name = 'Nikola Petrovic',
    image,
    status = 'Alive',
    location = 'Earth',
    species = 'Human',
    created = '30 Avgust 1994.',
}) => {

    const [theme, setTheme] = useContext(ThemeContext);

    const themeClass = theme === 'dark' ? 'character-card-dark' : 'character-card-light'

    return (
        <article className={`character-card ${themeClass}`}
            onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }}
        >
            <div className="image-wrapper">
                <img src={image} alt="Character" />
            </div>

            <div className="content-wrapper">
                <section>
                    <Link to={`/character/${id}`}>
                        <h2>{name}</h2>
                    </Link>
                    <span className="status">
                        <span className="status-icon"></span>
                        {status} - {species}
                    </span>
                </section>

                <section>
                    <span className="text-gray">Last know location</span>
                    <h5>{location.name}</h5>
                </section>

                <section>
                    <span className="text-gray">Created:</span>
                    <h5>{created}</h5>
                </section>
            </div>
        </article>
    )
}

export default CharacterCard
