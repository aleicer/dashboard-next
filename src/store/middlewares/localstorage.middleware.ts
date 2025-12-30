import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

export const localStorageMiddleware = (store: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);
    console.log(action.type)
    if (action.type === 'pokemons/toggleFavorite') {
      const { pokemons } = store.getState();
      localStorage.setItem('favorites-pokemon', JSON.stringify(pokemons.favorites));
    }
  }
}