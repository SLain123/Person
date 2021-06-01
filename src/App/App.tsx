import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';

const App: React.FC = () => {
    return <Route path='*' component={Header} />;
};

export default App;
