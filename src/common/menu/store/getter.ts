import { IMenuState } from './state';
import { Menu } from '../model';

export interface IMenuGetter {
    getMenu(state:IMenuState):Menu|undefined;
}
export const MenuGetter:IMenuGetter = {
    getMenu(state){
        return state.menu
    }
};
