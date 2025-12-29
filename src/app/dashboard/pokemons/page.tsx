import { PokemonResponse, SimplePokemon } from "@/pokemons";

import { PokemonGrid } from "@/pokemons";

const getPokemons = async (limit: number = 20, offset: number = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());
  const pokemons: SimplePokemon[] = data.results.map((poke) => {
    const id: number = Number(poke.url.split('/').at(-2));
    const name: string = poke.name;
    return { id, name };
  })
  return pokemons;
}

export default async function PokemonPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl mr-2">Listados de Pokémons <small>Estatico</small></span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}