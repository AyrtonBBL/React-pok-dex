interface NavBarProps {
  pokemonList: { name: string; imgSrc?: string }[];
  setPokemonName: (name: string) => void;
}

function NavBar({ pokemonList, setPokemonName }: NavBarProps) {
  
  const handlePokemonClick = (name: string) => {
    if (name === "pikachu") {
      alert("pika pikachu !!!"); 
    }
    setPokemonName(name);
  };

  return (
    <nav>
      {pokemonList.map((p) => (
        <button 
          key={p.name} 
          onClick={() => handlePokemonClick(p.name)}
        >
          {p.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;