import { MenuAction } from './action';
import { MenuGetter } from './getter';
import { IMenuState, MenuDefaultState } from './state';
import { Module } from 'vuex';
import { MenuMutation } from './mutation';

export const menu: Module<IMenuState ,IMenuState> = {
    namespaced: true,
    actions:    {
        ...MenuAction,
    },
    getters:    {
        ...MenuGetter,
    },
    state:      {
        ...MenuDefaultState(),
    },
    mutations:  {
        ...MenuMutation,
    },
};
