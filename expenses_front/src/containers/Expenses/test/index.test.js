import React from 'react';
import { shallow } from 'enzyme';
import { Expenses } from '../';

const props = {
  listUpdating: false,
};

test('Expenses renders without errors with listUpdating=false', () => {
  shallow(<Expenses {...props} />);
});

test('Expenses renders without errors with listUpdating=true', () => {
  const newProps = {
    ...props,
    listUpdating: true,
  };
  shallow(<Expenses {...newProps} />);
});
