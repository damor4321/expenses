import expect from 'expect';
import { fromJS } from 'immutable';
import {
  selectGlobal,
  selectLocationState,
  selectNextLocationPathname,
} from '../selectors';

const pathname = '/bestPathEver';

const route = fromJS({
  locationBeforeTransition: {
    state: {
      pathname,
    },
  },
});



const globalState = fromJS({

});

const state = fromJS({
  global: globalState,
  route,
});

test('selectGlobal() returns state.global', () => {
  expect(selectGlobal()(state)).toBe(globalState);
});


describe('selectLocationState()', () => {
  let locationState;
  const locationStateSelector = selectLocationState();
  it('returns state.route.toJS', () => {
    locationState = locationStateSelector(state);
    expect(locationState).toEqual(route.toJS());
  });
  it('returns the same object for consequent calls if state.route has not changed', () => {
    expect(locationStateSelector(state)).toBe(locationState);
    expect(locationStateSelector(state)).toBe(locationState);
    expect(locationStateSelector(state)).toBe(locationState);
  });
  it('returns new object if state.route has changed', () => {
    const newState = state.setIn(['route', 'locationBeforeTransition', 'state', 'pathname'], '/notSoPath');
    const newLocationState = locationStateSelector(newState);
    expect(newLocationState).toNotBe(locationState);
    expect(newLocationState).toEqual(newState.get('route').toJS());
  });
});

test('selectNextLocationPathname() returns state.route.locationBeforeTransition.state.pathname', () => {
  expect(selectNextLocationPathname()(state)).toBe(pathname);
});
