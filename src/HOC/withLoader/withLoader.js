import React, { useState } from 'react';
import Loader from '../../components/Loader';

//nije react element, funkcija koja vraca funkciju
//ovo nece vracati komponentu, ovo ce biti neka funkcija, vratice funkciju
//kako koristmo HOC
//prvo importujemo HOC u HomePage
//da ne bismo imali <div> mi stavljamo React.Fragment
//Kraca sintaksa za     React.Fragment      je    <> </>
//Poruka koju cemo da prikazemo

const withLoader = (WrappedComponent, message) => {
    return (props) => {
        const [isLoading, setIsLoading] = useState(true);

        return (
            <>
                {isLoading && <Loader message={message} />}
                <WrappedComponent {...props} setLoading={(isLoadingDone) => setIsLoading(isLoadingDone)} />
            </>

        );
    }
}

export default withLoader
