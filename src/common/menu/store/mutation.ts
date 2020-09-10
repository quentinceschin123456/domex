import { IMenuState } from './state';
import { Menu, ItemMenu, SectionMenu } from '../model';

export interface IMenuMutation {
    
    ADD_NEW_MENU(state: IMenuState,menu:Menu):void;
    ADD_NEW_MENU_ENTRY(state: IMenuState,item:ItemMenu):void;
    ADD_NEW_MENU_SECTION(state: IMenuState,section:SectionMenu):void;

    DELETE_MENU(state: IMenuState):any;


    INVERSE_MENU_ACTIVE_VALUE(state:IMenuState):any;
}
export const MenuMutation:IMenuMutation = {
    ADD_NEW_MENU:(state: IMenuState,menu:Menu) => {
        state.menu = menu;
      },
      ADD_NEW_MENU_ENTRY: (state:IMenuState,item:ItemMenu) => {
        if (state.menu){
            state.menu.addNewItem(item);
        }
      },
      ADD_NEW_MENU_SECTION: (state:IMenuState,section:SectionMenu) => {
        if (state.menu){
            state.menu.addNewItem(section);
        }
      },

      DELETE_MENU: (state: IMenuState) => {
          state.menu = undefined;
      },

      INVERSE_MENU_ACTIVE_VALUE: (state: IMenuState) =>{
          state.isActive = !state.isActive;
      }

};
