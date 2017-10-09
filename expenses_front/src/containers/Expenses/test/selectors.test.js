import { fromJS } from 'immutable';
import rootSelector, {
  selectTotalItems,
  selectCurrentPage,
  selectItemsPerPage,
  selectTotalPages,
  selectPaginationData,
  selectColumnWidths,
  selectUpdating,
} from '../selectors';

const totalItems = 358319873;
const currentPage = 54;
const itemsPerPage = 373;
const updating = '1324356rygdfds';
const s1 = fromJS({
});
const globalState = fromJS({
  s1,
});
const expenses = fromJS({
  totalItems,
  currentPage,
  itemsPerPage,
  updating,
});
const state = fromJS({
  global: globalState,
  expenses,
});

test('rootSelector selects the `expenses` from the root state', () => {
  expect(rootSelector()(state)).toBe(expenses);
});

test('selectTotalItems() selects state.expenses.totalItems', () => {
  expect(selectTotalItems()(state)).toBe(totalItems);
});

test('selectCurrentPage() selects state.expenses.currentPage', () => {
  expect(selectCurrentPage()(state)).toBe(currentPage);
});

test('selectItemsPerPage() selects state.expenses.', () => {
  expect(selectItemsPerPage()(state)).toBe(itemsPerPage);
});

test('selectTotalPages() calculates the totalPages number', () => {
  expect(selectTotalPages()(state)).toBe(Math.ceil(totalItems / itemsPerPage));
});

test('selectUpdating() calculates the totalPages number', () => {
  expect(selectUpdating()(state)).toBe(updating);
});

test('selectPaginationData() return { totalPages, currentPage }.', () => {
  expect(selectPaginationData()(state)).toEqual({
    currentPage: selectCurrentPage()(state),
    totalPages: selectTotalPages()(state),
  });
});

describe('selectColumnWidths()', () => {
  it('selects object widths', () => {
    const selector = selectColumnWidths();
    expect(selector(state)).toBeInstanceOf(Object);
  });
});
