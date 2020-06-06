import expensesReducer from '../../reducers/expenses';
import expenses from '../fixture/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, {type:'@@INIT'});
  expect(state).toEqual(([]));
})

test('should remove expense by id', () => {
  const action = {
    type:'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense without id', () => {
  const action = {
    type:'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses);
})

test('should add an expense', () => {
  const action = {
    type:'ADD_EXPENSE',
    expense : {
      id:'4',
      description:'Laptop',
      note: '',
      amount: 20000,
      createdAt: 500000
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, action.expense]);
})

test('should edit an expense', () => {
  const action = {
    type:'EDIT_EXPENSE',
    id:expenses[1].id,
    updates: {
      amount: 1220000,
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toEqual(1220000);
})

test('should not edit an expense if id not found', () => {
  const action = {
    type:'EDIT_EXPENSE',
    id:'-1',
    updates: {
      amount: 1220000,
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses);
})