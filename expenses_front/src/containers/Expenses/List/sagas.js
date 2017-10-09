import { call, put, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { api } from 'main/config';
import request from 'utils/request';
import { resetList } from './actions';
import { setTotalItems, listUpdateStart, listUpdateStop } from '../actions';
import { selectQuery } from './selectors';

const url = `${api.url}${api.path.expenses}`;

export function* loadList() {
  const query = yield select(selectQuery());
  yield put(listUpdateStart());
  /*
  yield call(alert, request.toSource());
  yield call(alert, url);
  yield call(alert, query.toSource());
  */
  const data = yield call(request, url, null, 'get', query);
  if (data.err) {
    yield call(alert, data.err);
  } else if (data.res) {
    // yield call(alert, data.res.body.toSource());
    const { total_items, _embedded } = data.res.body;
    const { expenses } = _embedded;
    yield put(setTotalItems(total_items));
    yield put(resetList(fromJS(expenses)));
  }
  yield put(listUpdateStop());
}
