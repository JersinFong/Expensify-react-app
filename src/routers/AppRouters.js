import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Expense from '../components/ExpenseDashBoardPage'
import AddExpense from '../components/AddExpensePage'
import EditExpense from '../components/EditExpensePage'
import Help from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouters = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Expense} exact={true}/>
        <Route path="/create" component={AddExpense} exact={true}/>
        <Route path="/edit/:id" component={EditExpense} exact={true}/>
        <Route path="/help" component={Help} exact={true}/>
          <Route component={NotFoundPage} />
      </Switch> 
    </div>
  </BrowserRouter>
)

export default AppRouters