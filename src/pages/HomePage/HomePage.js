import React, { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import CharacterCard from '../../components/CharacterCard';
import styles from './homePage.module.css';
import withLoader from '../../HOC/withLoader';
import Loader from '../../components/Loader';

//probaaaaaaaaaaaaaaaaaaaaaaaaaa

const HomePage = ({ setLoading }) => {
    //prvo je state, a drugo je funkcija koja setuje taj state
    const [characters, setCharacters] = useState([]);

    //pravimo funkciju fetch
    const fetchCharacters = useCallback(async () => {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11');
        setCharacters(data);
        setLoading(false);
    }, [setCharacters, setLoading]);
    //potreban nam je niz karaktera i za to korismo gore iznad useState, da cuva state
    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <div>
            {/* {characters.length === 0 && <Loader />} */}
            <div className={styles.hero}>
                <h1 className={styles['hero-title']}>
                    Rick And Morty App
                </h1>
            </div>
            <div className="showcase">
                {characters.map(({ id, name, species, status, location, image, created }) => (

                    <CharacterCard
                        id={id}
                        name={name}
                        species={species}
                        status={status}
                        location={location}
                        image={image}
                        created={created}
                    />
                ))}
            </div>
        </div>
    )
}

export default withLoader(HomePage, 'Loading');
