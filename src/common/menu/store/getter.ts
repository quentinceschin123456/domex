import { IMenuState } from './state';
import { Menu } from '../model';

export interface IMenuGetter {
    getMenu(state:IMenuState):Menu|undefined;
    isMenuActive(state: IMenuState): boolean;
}
export const MenuGetter:IMenuGetter = {
    getMenu(state: IMenuState){
        return state.menu ;
    },
    isMenuActive(state:IMenuState){
        return state.isActive ;
    } 
};
