import { ICourseListState } from './state';
import { CourseList, Recette, CourseRow } from '../model';

export interface  ICourseListGetters {
 
    listeCourse(state : ICourseListState): CourseList | undefined;
    listeRecette(state : ICourseListState): Recette[] | undefined;
    listSelectedProduct(state : ICourseListState): CourseRow[] | undefined;
    
}

export const CourseListGetters: ICourseListGetters = {

    listeCourse(state: ICourseListState): CourseList | undefined {
        return state.listeCourse;
    },

    listeRecette(state: ICourseListState): Recette[] | undefined {
        return state.listeRecette;
    },

    listSelectedProduct(state : ICourseListState): CourseRow[] | undefined {
        return state.listSelectedProduct
    },
    
};