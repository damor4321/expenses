import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesHeader } from './';

const widths = {
  id: 0,
  amount: 7,
  date: 20,
  description: 20,
  comment: 22,
  edit: 8,
};

const props = {
  widths,
};

describe('ExpensesHeader', () => {
  it('renders without errors', () => {
    shallow(<ExpensesHeader {...props} />);
  });
});
