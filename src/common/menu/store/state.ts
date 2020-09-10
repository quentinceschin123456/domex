import { Menu } from '../model';

export interface IMenuState {
  isLoading: boolean;
  menu: Menu | undefined;
  
}
export const MenuDefaultState = (): IMenuState => {
  return {
    // error: undefined,
    isLoading: false,
    menu: undefined
  } ;
};
