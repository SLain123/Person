import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Welcome from '../components/Welcome';

const App: React.FC = () => {
    return (
        <>
            <Route path='*' component={Header} />
            <Route path='/' component={Welcome} exact />
        </>
    );
};

export default App;
