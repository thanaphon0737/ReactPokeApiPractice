import Card from "./Card";
import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
function Home() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const MAX_POKE = 151;
  const list_url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
  function getPokemonId(url) {
    const parts = url.split("/").filter(Boolean); // Remove empty parts
    return parts[parts.length - 1]; // Get the last part (ID)
  }
  async function fetchData() {
    try {
      
      const response = await axios.get(list_url);
      const data = response.data.results;
      const data_mod = await Promise.all(
        data.map(async (item) => {
          const img_url = await getImage(item.url)
          const types_name = await getTypes(item.url)
          const id_num = getPokemonId(item.url)
          return { id:id_num ,...item, img_url: img_url, types: types_name, };
        })
      );
      
      setDatas(data_mod);
      setLoading(false);
    }catch(err) {
      console.log('Error fetching data:',err)
      setLoading(false)
    }
    
  }
  async function getImage(url) {
    try{

      const response = await axios.get(url);
      const url_img = await response.data.sprites.front_default;
      return url_img || "";
    }catch(err) {
      console.log('Error fetching data:',err)
    }
  }
  async function getTypes(url) {
    try{

      const response= await axios.get(url)
      const types = await response.data.types;
      const types_name = types.map(item => {
        return item.type.name
      })
      return types_name
    }catch(err) {
      console.log('Error fetching data:',err)
    }
  }
  useEffect(() => {
    fetchData()
    
  }, []);
  return (
    <div className="grow mt-20 mx-35 mb-8">
      {loading ? (
        <Loading />
      ) : (
        <>
          <p>count : {datas.length}</p>
          <div className="grid grid-cols-[repeat(auto-fill,400px)] place-content-center gap-10 ">
            {datas.map((item, index) => {
              return (
                <Card
                  id={item.id}
                  key={item.id || index}
                  name={item.name}
                  avatar={item.img_url}
                  types={item.types}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
export default Home;
