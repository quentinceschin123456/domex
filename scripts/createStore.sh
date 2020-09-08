#!/usr/bin/env bash

echo enter the store name
read storeName

mkdir store
cd store
touch action.ts
echo "export interface I"${storeName^}"Action {

}" >> action.ts

echo "export const "${storeName^}"Action:I"${storeName^}"Action = {

};" >> action.ts




touch getter.ts
echo "export interface I"${storeName^}"Getter {

}" >> getter.ts

echo "export const "${storeName^}"Getter:I"${storeName^}"Getter = {

};" >> getter.ts

touch index.ts
echo "export * from './action';" >> index.ts
echo "export * from './module';" >> index.ts
echo "export * from './mutation';" >> index.ts
echo "export * from './getter';" >> index.ts
echo "export * from './state';" >> index.ts

touch module.ts
echo "export const "${storeName}": Module<I"${storeName^}"State ,I"${storeName^}"State> = {
    namespaced: true,
    actions:    {
        ...${storeName^}Action,
    },
    getters:    {
        ...${storeName^}Getter,
    },
    state:      {
        ...${storeName^}DefaultState(),
    },
    mutations:  {
        ...${storeName^}Mutation,
    },
};" >> module.ts

touch mutation.ts
echo "export interface I"${storeName^}"Mutation {

}" >> mutation.ts
echo "export const "${storeName^}"Mutation:I"${storeName^}"Mutation = {

};" >> mutation.ts

touch state.ts
echo "export interface I"${storeName^}"State {

}" >> state.ts
echo "export const "${storeName^}"DefaultState = (): I"${storeName^}"State => {
  return {
    // error: undefined,
    // isLoading: undefined,
  } ;
};" >> state.ts

