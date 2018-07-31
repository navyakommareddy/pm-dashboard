import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../home/Home.jsx';
import Invoice from '../invoice/Invoice.jsx';

const Main =()=>(
    <main>
        <Switch>
            <Route exact path = '/' component={Home}/>
            <Route path = '/projectDetails' component={Invoice}/>
            </Switch>
            </main>
)

export default Main;