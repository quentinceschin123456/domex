import { adminAction } from './action';
import { adminGetter } from './getter';
import { IadminState, MenuDefaultState } from './state';
import { Module } from 'vuex';
import { adminMutation } from './mutation';

export const admin: Module<IAdminState ,IAdminState> = {
    namespaced: true,
    actions:    {
        ...AdminAction,
    },
    getters:    {
        ...AdminGetter,
    },
    state:      {
        ...AdminDefaultState(),
    },
    mutations:  {
        ...AdminMutation,
    },
};
