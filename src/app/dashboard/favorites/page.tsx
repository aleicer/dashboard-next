import { FavoritePokemons } from "@/pokemons";

export const metadata = {
  title: "Favoritos - Pokédex",
  description: "Listado de Pokémons favoritos en tu Pokédex",
}

export default async function PokemonPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl mr-2">Pokemons favoritos <small className="text-blue-500">Global State</small></span>
        <FavoritePokemons />
    </div>
  );
}
