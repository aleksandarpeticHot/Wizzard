import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router