import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Proximolancamento from '../Pages/Proximolancamento';
import Ultimolancamento from '../Pages/Ultimolancamento';
import Proximoslancamentos from '../Pages/Proximoslancamentos';
import Lancamentospassados from '../Pages/Lancamentospassados';

function Routes () {
    return (
            <Switch>
                <Route path="/" exact={true} component={Proximolancamento} />
                <Route path="/ultimolancamento" component={Ultimolancamento} />
                <Route path="/proximoslancamentos" component={Proximoslancamentos} />
                <Route path="/lancamentospassados" component={Lancamentospassados}  />
            </Switch>
    );
}

export default Routes;
