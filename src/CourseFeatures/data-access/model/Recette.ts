import { Ingredient } from './Ingredient';

export class Recette {

    
    
    constructor(
        public id: number,
        public name: string,
    public imgUrl: string,
    public instructions: string, // les étapes à suivre
    public listIngredients: [Ingredient, number]

        ) {

    }
}
