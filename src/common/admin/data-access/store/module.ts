import { AdminAction } from './action';
import { AdminGetter } from './getter';
import { IAdminState,AdminDefaultState } from './state';
import { Module } from 'vuex';
import { AdminMutation } from './mutation';

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
