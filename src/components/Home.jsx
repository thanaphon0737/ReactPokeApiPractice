import Card from "./Card";
import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
function Home() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const list_url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";
  async function fecthData() {
    const response = await axios.get(list_url);
    const data = response.data.results;
    const data_mod = await Promise.all(
      data.map(async (item) => {
        return { ...item, img_url: await getImage(item.url) };
      })
    );
    
    setDatas(data_mod);
    setLoading(false);
    
  }
  async function getImage(url) {
    const response = await axios.get(url);
    const url_img = await response.data.sprites.front_default;
    return url_img;
  }
  useEffect(() => {
    async function fetch() {
      try {
        await fecthData();
      } catch (err) {
        console.log(err);
      }
    }
    setTimeout(()=>{
      fetch();
    },500)
    
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
                  // id={item.id}
                  key={item.name || index}
                  name={item.name}
                  avatar={item.img_url}
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
