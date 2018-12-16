import { ICourse, courseReducer } from '../containers/courses-page/courses-page.reducers';
import { combineReducers } from 'redux';

export interface IRootState {
  courses: ICourse[];
  router?: any;
}

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<IRootState>({
  courses: courseReducer
});