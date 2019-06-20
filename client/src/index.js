import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from "react-redux";
import { init } from "@rematch/core";
import * as serviceWorker from './serviceWorker';
import * as models from "./models";
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Content from './pages';

const store = init({
    models
});
render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" render={(props) => <Content {...props} />}/>
            </Switch>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
