import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Ultimolancamento from '../Pages/Ultimolancamento';
import Proximoslancamentos from '../Pages/Proximoslancamentos';
import Lancamentospassados from '../Pages/Lancamentospassados';

function Routes () {
    return (
            <Switch>
                <Route path="/" exact={true} component={Ultimolancamento} />
                <Route path="/proximoslancamentos" component={Proximoslancamentos} />
                <Route path="/lancamentospassados" component={Lancamentospassados}  />
            </Switch>
    );
}

export default Routes;
