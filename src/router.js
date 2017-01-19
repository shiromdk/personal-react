import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

const Home = () =>{
    return (
        <div>Hello World</div>
    );
}

const Routes = () => {
    return(
        <Route path="/" component={Home}>
        </Route>
    );
};

export default Routes;