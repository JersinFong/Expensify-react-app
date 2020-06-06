import {setEndDate, setTextFilter, sortByAmount, sortByDate, setStartDate} from '../../actions/filters';
import moment from 'moment';

test('should set up set start date action object', ()=>{
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should set up set end date action object', ()=>{
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('should set up set text filter action object with values', ()=>{
  const text = 'test'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
});

test('should set up set text filter action object without values', ()=>{
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});

test('should set up sort by amount action object', ()=>{
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
});

test('should set up sort by date action object', ()=>{
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  })
});