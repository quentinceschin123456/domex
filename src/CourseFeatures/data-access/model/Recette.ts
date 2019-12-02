import { Ingredient } from './Ingredient';
import { IngredientRow } from './IngredientRow';

export class Recette {

    
    
    constructor(
        public id: number,
        public name: string,
    public imgUrl: string,
    public instructions: string, // les étapes à suivre
    public listIngredients: IngredientRow[],
    public isFavorite?:boolean

        ) {
            isFavorite = false;

    }
}
