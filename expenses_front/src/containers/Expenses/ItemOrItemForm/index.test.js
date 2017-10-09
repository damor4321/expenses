import React from 'react';
import uniqueId from 'lodash/uniqueId';
import { fromJS } from 'immutable';
import { shallow } from 'enzyme';
import { ItemOrItemForm } from './';


const expense = fromJS({
  cid: uniqueId('expense_'),
  id: 0,
  edit: false,
  saving: false,
  deleting: false,
});

const props = {
  expense,
};

describe('ItemOrItemForm', () => {
  it('renders without errors when edit=false', () => {
    shallow(<ItemOrItemForm {...props} />);
  });
  it('renders without erros when edit=true', () => {
    props.expense = props.expense.set('edit', true);
    shallow(<ItemOrItemForm {...props} />);
  });
  it('renders without erros when expense.id!=0', () => {
    props.expense = props.expense.set('id', 1);
    shallow(<ItemOrItemForm {...props} />);
  });
});
