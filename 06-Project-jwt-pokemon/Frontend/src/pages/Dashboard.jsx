import { use, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import PokemonContext from "../context/PokemonContext";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const { user, logout } = use(AuthContext);
  const { pokemons } = use(PokemonContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
    navigate("/");
  }
}, [user, logout]);

  return (
    <>
    <title>Dashboard</title>
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-300 p-24">
      <h2 className="mb-6 text-2xl font-bold text-gray-700">Bienvenido al Dashboard</h2>
      <SearchBar />
      <h3 className="mb-4 text-xl font-bold text-gray-700">Pokemons disponibles:</h3>
        <div className="w-full max-w-max rounded-lg bg-white p-2 shadow-lg text-center flex flex-wrap justify-center">
          
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))};
          <button
            onClick={logout}
            className="w-full rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
