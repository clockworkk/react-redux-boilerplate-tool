import * as types from '../constants/ActionTypes';
import MockTestAppAPI from '../debug/MockTestAppAPI';
import TestAppAPI from '../utils/TestAppAPI';

const api = window.useMockApi ? new MockTestAppAPI() :
  new TestAppAPI();

export function actionFailed(message) {
  return {
    type: types.STATUS_CHANGE,
    actionStatus: false,
    message
  };
}

export function actionSuccessful(message) {
  return {
    type: types.STATUS_CHANGE,
    actionStatus: true,
    message
  };
}
