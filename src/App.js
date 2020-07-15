import React, { Fragment } from 'react';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Contexts
import AuthContextProvider from './contexts/AuthContext';

// Misc
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Container } from 'reactstrap';
import Routes from './Routes';

function App() {
  return (
    <Fragment>
      <Router>
        <AuthContextProvider>
            <Navigation />
            <Container className="mt-4">
              <Switch>
                { Routes }
              </Switch>
            </Container>
            <Footer />
        </AuthContextProvider>
      </Router>
    </Fragment>
  );
}

export default App;