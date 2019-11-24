import { Module }                            from 'vuex';
import { CourseListDefaultState, ICourseListState } from './state';
import { CourseListActions } from './action';
import { CourseListGetters } from './getters';
import { CourseListMutations } from './mutation';


export const courselist: Module<ICourseListState, ICourseListState> = {
  namespaced: true,
  actions:    {
    ...CourseListActions,
  },
  getters:    {
    ...CourseListGetters,
  },
  state:      {
    ...CourseListDefaultState(),
  },
  mutations:  {
    ...CourseListMutations,
  },
};