// Importing the file that have all the const (action types)
import * as types from './actionTypes';

export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    payload: course
  };
}
