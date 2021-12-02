import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const ProtectedRoute = ({ children, path }) => {

    const auth = useContext(AuthContext);

    return (
        <Route path={path}>
            {auth === true ? children : <Redirect to="/not-found" />}
        </Route>
    )
}

export default ProtectedRoute
