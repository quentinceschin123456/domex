import { Ingredient } from './Ingredient';
import { RecetteRaw } from './RecetteRaw.';

export class Recette {

    
    
    constructor(
        public id: number,
        public name: string,
    public imgUrl: string,
    public instructions: string, // les étapes à suivre
    public listIngredients: RecetteRaw[],
    public isFavorite?:boolean

        ) {
            isFavorite = false;

    }
}
