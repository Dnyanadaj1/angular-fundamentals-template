import { Action, createReducer } from '@ngrx/store';
 
// Add your code here
 
export interface CoursesState {
    allCourses: any,
    course: any,
    isAllCoursesLoading: boolean,
    isSingleCourseLoading: boolean,
    isSearchState: boolean,
    errorMessage: any
}
 
export const initialState: CoursesState = {
    allCourses: '',
    course: '',
    isAllCoursesLoading: true,
    isSingleCourseLoading: true,
    isSearchState: true,
    errorMessage: ''
};
 
export const coursesReducer = createReducer(initialState);
 
export const coursesFeatureKey = 'courses';
 
export const reducer = (state: CoursesState, action: Action): CoursesState => coursesReducer(state, action);
 
