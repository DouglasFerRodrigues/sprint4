import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import UnidadePage from './pages/UnidadePage';
import ProdutoPage from './pages/ProdutoPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Unidade">
        <UnidadePage />
      </Route>
      <Route exact path="/Produto">
        <ProdutoPage />
      </Route>
      <Route exact path="/sobre">
        Sobre
      </Route>
    </Switch>
  );
};
export default Routes;
