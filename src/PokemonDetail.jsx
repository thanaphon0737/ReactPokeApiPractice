import { useParams } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardDetail from "./components/CardDetail";
function PokemonDetail() {
    const { pokemonId } = useParams();
  return (
    <div className="body">
      <Header />
      <div className="flex flex-col mt-20 mx-35 mb-8 gap-5 items-center ">
        <h1>Pokemon : {pokemonId}</h1>
        <CardDetail id={pokemonId} />
      </div>
      <Footer />
    </div>
  );
}
export default PokemonDetail;
