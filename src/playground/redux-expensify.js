import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';

//ADD, REMOVE, EDIT, EXPENSE
const addExpense = (
    {description = '', note = '', amount = 0, createAt = 0}={}
  ) => ({
  type:'ADD_EXPENSE',
  expense:{
    id: uuidv4(),
    description,
    note,
    amount,
    createAt
  }
});

const removeExpense = ({id} = {}) => ({
  type:'REMOVE_EXPENSE',
  id
})

const editExpense = (id, updates) => ({
  type:'EDIT_EXPENSE',
  id,
  updates
});

//SET_START_DATE SET_END_DATE SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type:'SET_TEXT_FILTER',
  text
});

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})
//SORT_BY_DATE SORT_BY_AMOUNT
const sortByAmount = () =>({
  type:'SORT_BY_AMOUNT'
})

const sortByDate = () =>({
  type:'SORT_BY_DATE'
})





//expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return [...state, action.expense]; //new sytax : spread operator, same as concat.
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          }
        }else{
          return expense;
        }
      });
    default:
      return state;
  }
};
//Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return{
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return{
        ...state,
        endDate: action.endDate
    }
    default:
      return state
  }
}

//get visible expenses
const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date'){
      return b.createAt - a.createAt;
    }else if(sortBy === 'amount'){
      return b.amount - a.amount;
    }
  });
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
  console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({description : 'Rent', amount: 100, createAt:-21000}));
const expenseTwo = store.dispatch(addExpense({description : 'Coffe', amount: 300, createAt:-1000}));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

// const demoState ={
//   expenses: [{
//     id: 'opjiorieokr',
//     description: 'January Rent',
//     note: 'This is was the final payment for that address',
//     amount: 54500,
//     createAt: 0
//   }],
//   filters:{
//     text: 'rent',
//     sortBy: 'amount', //date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// }

// //object spread operator
// const user = {
//   name: 'Jason',
//   age: 26
// }

// console.log({
//   ...user,
//   location: 'Philadelphia',
//   age: 27
// })


