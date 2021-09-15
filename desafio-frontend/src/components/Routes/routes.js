import React from 'react';
import {Route, BrowserRouter } from 'react-router-dom';

import ultimolancamento from '../Pages/ultimolancamento';
import proximoslancamentos from '../Pages/proximoslancamentos';
import lancamentospassados from '../Pages/lancamentospassados';

function Routes () {
    return (
        <BrowserRouter>
            <Route component = {ultimolancamento} path="./components/Pages/ultimolancamento.js" ultimoLancamento />
            <Route component = {proximoslancamentos} path="./components/Pages/proximoslancamentos" proximoslancamentos />
            <Route component = {lancamentospassados} path="./components/Pages/lancamentospassados" lancamentospassados />
        </BrowserRouter>
    );
}

export default Routes;
