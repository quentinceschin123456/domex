import { Ingredient } from './Ingredient';

export class Recette {

    public id: number | undefined;
    public name: string | undefined;
    public imgUrl: string | undefined;
    public instructions: string | undefined; // les étapes à suivre
    public listIngredients: [Ingredient, number] | undefined ;

    constructor() {

    }
}
