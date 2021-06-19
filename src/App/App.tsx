import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import LangChanger from '../components/LangChanger';
import Projects from '../features/projects';
import About from '../features/about';

import classes from './App.module.scss';

const App: React.FC = () => {
    const routes = [
        { path: '/', name: 'Welcome', Component: Welcome },
        { path: '/works', name: 'Projects', Component: Projects },
        { path: '/about', name: 'About', Component: About },
    ];

    const RouteList = routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
            {({ match }) => (
                <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames={{
                        enter: classes.mainBlockEnter,
                        enterActive: classes.mainBlockEnterActive,
                        exit: classes.mainBlockExit,
                        exitActive: classes.mainBlockExitActive,
                    }}
                    unmountOnExit
                >
                    <div className='mainBlock'>
                        <Component />
                    </div>
                </CSSTransition>
            )}
        </Route>
    ));

    return (
        <>
            <Route path='*' component={Header} />
            <LangChanger />
            {RouteList}
        </>
    );
};

export default App;
