import { Menu } from '../model';

export interface IMenuState {
  isLoading: boolean;
  menu: Menu | undefined;
  isActive: boolean;
  
}
export const MenuDefaultState = (): IMenuState => {
  return {
    // error: undefined,
    isLoading: false,
    menu: undefined,
    isActive: true
  } ;
};
