import React, { useState } from 'react'
import CharacterCard from '../../components/CharacterCard'
import CharacterForm from '../../components/CharacterForm'

const CreateCharacterPage = () => {
    const [name, setName] = useState("Nikola Petrovic");
    const [location, setLocation] = useState("Beograd");
    const [created, setCreated] = useState("30 August 1994");


    return (
        <div>
            <CharacterForm
                name={name}
                setName={setName}
                location={location}
                setLocation={setLocation}
                created={setLocation}
                setCreated={setCreated}
            />
            <CharacterCard
                name={name}
                setName={setName}
                location={location}
                setLocation={setLocation}
                created={setLocation}
                setCreated={setCreated}
            />
        </div>
    )
}

export default CreateCharacterPage
