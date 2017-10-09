import { fork } from 'redux-saga/effects';

export function* main() {
  yield fork();
}

export default [
  main,
];
