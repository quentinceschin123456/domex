import { SectionMenu, ItemMenu, Menu } from '../model';

export interface IMenuAction {
    createMenu(commit: any,payload:any):any;
    addNewSection(commit: any,section:SectionMenu):any;
    addNewItem(commit: any,item:ItemMenu):any;
}
export const MenuAction:IMenuAction = {
    
    createMenu({ commit, dispatch },{mainName,icone,sectionlist}){
        let menu:Menu; 
        if (sectionlist && sectionlist.length > 0)  {
            menu = new Menu(mainName,icone,sectionlist);
        }else {
            menu = new Menu(mainName,icone);
        }
        commit('ADD_NEW_MENU',menu);
    },

    addNewSection({ commit, dispatch },section:SectionMenu){
 
    },

    addNewItem({ commit, dispatch },item:ItemMenu){

    }
};
