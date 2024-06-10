import { useState, useEffect } from "react";

// useEffect Hook:
// useEffect(() => { fungsi dipanggil  }, [ ] )

// export default function PokemonList() {
//   const [pokemon, setPokemon] = useState([]);

//   async function loadPokemon() {
//     try {
//       const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//       const data = await response.json();
//       setPokemon(data.results);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     loadPokemon();
//   }, []);

// Dependency array [] memastikan bahwa kita hanya melakukan ini sekali, ketika halaman pertama dibuka (komponen pertama kali dirender).

//   return (
//     <main>
//       <ul>
//         {pokemon.map(({ name }) => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>
//     </main>
//   );
// }

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, []);

  return (
    <main>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
