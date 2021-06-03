import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import LangChanger from '../components/LangChanger';
import Projects from '../features/projects';

const App: React.FC = () => {
    return (
        <>
            <Route path='*' component={Header} />
            <Route path='*' component={LangChanger} />
            <Route path='/' component={Welcome} exact />
            <Route path='/works' component={Projects} exact />
        </>
    );
};

export default App;
