import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Paginas
    import Index from './view/index';

export default function Rotas() {
    return(
        <Switch>
            <Route path="/" component={Index}/>
        </Switch>
    );
}