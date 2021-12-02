import React from 'react'

const CharacterForm = ({ name, setName, location, setLocation, created, setCreated }) => {



    return (
        <div className="search-params">
            <form>
                <label htmlFor="name">
                    Name
                    <input type="text" name="name" id="name" value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    ></input>
                </label>

                <label htmlFor="location">
                    Location
                    <input type="text" name="location" id="location" value={location}></input>
                </label>

                <label htmlFor="created">
                    Created
                    <input type="text" name="created" id="created" value={created}></input>
                </label>
            </form>
        </div >
    )
}

export default CharacterForm
