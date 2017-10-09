import React from 'react';
import { fromJS } from 'immutable';
import uniqueId from 'lodash/uniqueId';
import { shallow } from 'enzyme';
import { ExpensesItem } from '../';


const widths = {
  id: 0,
  amount: 7,
  date: 20,
  description: 20,
  comment: 22,
  edit: 8,
};

const expense = fromJS({
  cid: uniqueId('expense_'),
  id: 0,
  edit: false,
  updating: false,
  deleting: false,
});

const props = {
  expense,
  widths,
};

describe('ExpensesItem', () => {
  it('renders without errors', () => {
    shallow(<ExpensesItem {...props} />);
  });
});
