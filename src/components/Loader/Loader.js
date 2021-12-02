import React from 'react'


//neka poruka koju prosledjujemo komonenti
const Loader = ({message}) => {
    return (
        <div className="loader">
            <div className="loading"></div>
            <h4>{message}</h4>
        </div>
    )
}

export default Loader
