import { ICourseListState } from './state';
import { CourseList, Recette } from '../model';

export interface  ICourseListGetters {
 
    listeCourse(state : ICourseListState): CourseList | undefined;
    listeRecette(state : ICourseListState): Recette[] | undefined;

    
}

export const CourseListGetters: ICourseListGetters = {

    listeCourse(state: ICourseListState): CourseList | undefined {
        return state.listeCourse;
    },

    listeRecette(state: ICourseListState): Recette[] | undefined {
        return state.listeRecette;
    }
};