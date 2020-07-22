import { CourseList, Recette, Produit, CourseRow } from '../model';

export interface ICourseListState {
  /** The latest action error result asssociated to Chatbot state */
//   error?: ErrorViewModel;
  /** Indicates whether the user request is in progress or not */
  isLoading: boolean;
  listSelectedProduct?: CourseRow[];
  listeCourse?: CourseList;
  listeRecette?: Recette[];
  listeProduit?: Produit[];
}

export const CourseListDefaultState = (): ICourseListState => {
  return {
    // error: undefined,
    isLoading: false,
    listeCourse: undefined,
    listSelectedProduct: undefined,
    listeRecette: undefined,
    listeProduit: undefined
  };
};
