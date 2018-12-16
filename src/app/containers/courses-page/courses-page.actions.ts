import { ICourse } from 'app/containers/courses-page/courses-page.reducers';

export enum CourseActionType {
  CourseAdd = 'CourseAdd'
}

export const addCourse = (course: ICourse) => {
  return {
    type: CourseActionType.CourseAdd,
    payload: course
  }
} 