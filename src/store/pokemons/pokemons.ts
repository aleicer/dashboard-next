import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
  [key: string]: SimplePokemon
}

const getInitialState = (): PokemonsState => {
  const favorites = JSON.parse(localStorage.getItem('favorites-pokemon') ?? '{}');
  console.log({favorites});
  return favorites;
}

const initialState: PokemonsState = getInitialState();

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon: SimplePokemon = action.payload;
      const { id } = pokemon;
      if (state[id]) {
        delete state[id];
        return
      } else {
      state[id] = pokemon;
      }

      // localStorage.setItem('favorites-pokemon', JSON.stringify(state))
    }
  }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer