import React, { useRef } from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import LangChanger from '../components/LangChanger';
import Projects from '../features/projects';
import About from '../features/about';
import Timeline from '../features/timeline';
import Contact from '../features/contact';
import { Scrollbars } from 'react-custom-scrollbars';

import classes from './App.module.scss';

const App: React.FC = () => {
    const routes = [
        { path: '/', name: 'Welcome', Component: Welcome },
        { path: '/works', name: 'Projects', Component: Projects },
        { path: '/about', name: 'About', Component: About },
        { path: '/timeline', name: 'Timeline', Component: Timeline },
        { path: '/contact', name: 'Contact', Component: Contact },
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
        <Scrollbars
            style={{ height: '100vh' }}
            hideTracksWhenNotNeeded
            autoHide
            autoHideTimeout={200}
            renderThumbVertical={(props) => (
                <div {...props} className='thumb' />
            )}
        >
            <Route path='*' component={Header} />
            <LangChanger />
            {RouteList}
        </Scrollbars>
    );
};

export default App;
