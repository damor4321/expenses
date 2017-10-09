import expect from 'expect';
import { fromJS } from 'immutable';
import appReducer, { initialState } from '../reducer';

const payload = fromJS({
});

describe('appReducer()', () => {
  it('returns default state if nothing is passed', () => {
    const state = appReducer(undefined, fromJS({ type: 'foo' }));
    expect(state).toExist();
  });
});
