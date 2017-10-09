import { createSelector } from 'reselect';

const rootSelector = () => state => state.get('expenses');

export default rootSelector;

export const selectTotalItems = () => createSelector(
  rootSelector(),
  expenses => expenses.get('totalItems'),
);

export const selectCurrentPage = () => createSelector(
  rootSelector(),
  expenses => expenses.get('currentPage')
);

export const selectItemsPerPage = () => createSelector(
  rootSelector(),
  expenses => expenses.get('itemsPerPage')
);

export const selectUpdating = () => createSelector(
  rootSelector(),
  expenses => expenses.get('updating')
);

export const selectTotalPages = () => createSelector(
  selectTotalItems(),
  selectItemsPerPage(),
  (total, limit) => Math.ceil(total / limit)
);

export const selectPaginationData = () => createSelector(
  selectTotalPages(),
  selectCurrentPage(),
  (totalPages, currentPage) => ({ totalPages, currentPage })
);

export const selectColumnWidths = () => {
  const f = () => {
    const res = {
      id: 0,
      date: 24,
      description: 24,
      comment: 26,
      amount: 8,
      edit: 12,
    };
    return res;
  };
  return f;
};

export const selectSortField = () => createSelector(
  rootSelector(),
  expenses => expenses.get('sortField')
);

export const selectSortDirection = () => createSelector(
  rootSelector(),
  expenses => expenses.get('sortDirection')
);
