import React from 'react';
import AboutInfo from '../../components/AboutInfo';
import Profile from '../../components/Profile';
import Skills from '../../components/Skills';

import classes from './About.module.scss';

const About: React.FC = () => {
    return (
        <div className={classes.aboutBlock}>
            <AboutInfo />
            <div className={classes.aboutInfo}>
                <Profile />
                <Skills />
            </div>
        </div>
    );
};

export default About;
