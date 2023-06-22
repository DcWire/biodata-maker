import React from 'react';
import {BrowserRouter, Route, Routes as Switch} from 'react-router-dom';
import Home from './components/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact element={<Home />} />
            </Switch>

        </BrowserRouter>
    )
}

export default Routes;