import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch> {/* Switch é o componente que vai garantir que apenas uma rota seja exibida por vez */}
      <Route exact path='/' component={Login} /> {/* Route é o componente que vai definir uma rota. Na "/" vai ser renderizado o login */}
      <Route path='*' component={Page404} /> {/* Na rota que não for a "/" vai ser renderizado o Page404 */}
    </Switch>
  );
}
