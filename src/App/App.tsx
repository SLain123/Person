import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Header from '../components/Header';
import LangChanger from '../components/LangChanger';
import { Scrollbars } from 'react-custom-scrollbars';
import Spinner from '../components/Spinner';

import classes from './App.module.scss';

const Welcome = React.lazy(() => import('../components/Welcome'));
const Projects = React.lazy(() => import('../features/projects'));
const About = React.lazy(() => import('../features/about'));
const Timeline = React.lazy(() => import('../features/timeline'));
const Contact = React.lazy(() => import('../features/contact'));

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
            className='scroll'
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
            <Suspense fallback={<Spinner />}>{RouteList}</Suspense>
        </Scrollbars>
    );
};

export default App;
