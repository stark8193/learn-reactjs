import React, { useState } from 'react';
import { Redirect, Router, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import NotFound from '../../../components/NotFound';

function ToDoList(props) {
    const match= useRouteMatch();

    return (
        <div>
          <Switch>
            <Route path={match.path} component={ListPage} exact/>
            <Route path={`${match.path}/:todosId`} component={DetailPage}/>

            <Route component={NotFound}/>
          </Switch>
        </div>
    );
}

export default ToDoList;