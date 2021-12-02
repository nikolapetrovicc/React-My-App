import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import ThemeContext from './context/ThemeContext';
import CreateCharacterPage from './pages/CreateCharacterPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AuthContext from './context/AuthContext';

function App() {

  const themeHook = useState('dark');

  //Navbar moramo unutar Router-a jer koristimo linkove ali iznad Switch-a

  return (
    <div className="App">
      <AuthContext.Provider value={true}>
        <ThemeContext.Provider value={themeHook}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/create-character">
                <CreateCharacterPage />
              </Route>
              <ProtectedRoute path="/protected">
                <h2>This is a protected route</h2>
              </ProtectedRoute>
              <Route path="*">
                <h3>Stranica koju ste trazili ne postoji...</h3>
              </Route>
            </Switch>
          </Router>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
