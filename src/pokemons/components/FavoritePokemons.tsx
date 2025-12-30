'use client'

import { useState } from "react"
import { IoHeartOutline } from "react-icons/io5"
import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"

export const FavoritePokemons = () => {

  const favoritePokemons = useAppSelector(state => Object.values(state.pokemons))
  const [pokemons, setPokemons] = useState(favoritePokemons)
  return (
    <>
      {
        pokemons.length === 0
          ? (<NoFavorites />)
          : (<PokemonGrid pokemons={pokemons} />)
      }
    </>
  )
}


export const NoFavorites = () => {
  return (
    <div className="flex flex-col h[50hv] items-center justify-center">
      <IoHeartOutline size={100} className="text-gray-400" />
      <span className="text-2xl mt-4 text-gray-500">No hay Pokémons favoritos</span>
    </div>
  )
}
