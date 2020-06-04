//import from npm modules.
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//import from components functions or class
//import style
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouters from './routers/AppRouters'
import configureStore from './store/configuerStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter} from "./actions/filters";
import getVisibleExpense from './selectors/expenses';

const store = configureStore();
store.dispatch(addExpense({description : "water bill" , amount:4500}));
store.dispatch(addExpense({description : "Gas bill", createdAt:1000}));
store.dispatch(addExpense({description : "Rent" , amount:109500}));
const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouters />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector('#app'));

