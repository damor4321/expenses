import React from 'react';
import { shallow } from 'enzyme';
import { create } from '../Item/actions';
import { setCurrentPage } from '../actions';
import { loadList } from '../List/actions';
import { ExpensesControls, mapDispatchToProps } from './';

const props = {
  handleAdd: () => {},
  handlePageChange: () => {},
  paginationData: {
    currentPage: 1,
    totalPages: 10,
  },
};

test('it renders without errors', () => {
  shallow(<ExpensesControls {...props} />);
});

describe('mapDispatchToProps()', () => {
  const dispatch = jest.fn();
  const { handleAdd, handlePageChange } = mapDispatchToProps(dispatch);
  it('produces a handleAdd() method that dispatches a create({ edit: true }) action', () => {
    handleAdd();
    expect(dispatch.mock.calls[0][0]).toEqual(create({ edit: true }));
  });
  it('produces a handleAdd() method that dispatches a setCurrentPage and loadList action creators', () => {
    const currentPage = 123453;
    handlePageChange(currentPage);
    expect(dispatch.mock.calls[2][0]).toEqual(setCurrentPage(currentPage));
    expect(dispatch.mock.calls[3][0]).toEqual(loadList());
  });
});
