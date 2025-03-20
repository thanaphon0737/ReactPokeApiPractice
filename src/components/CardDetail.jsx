import { useEffect, useState } from "react";
import axios from "axios";
import { formatNumber } from "../utils";
import Progress from "./Progress";
import { getTypeColor,getBackGroundColor } from "../utils";
function CardDetail(props) {
  const [datas, setDatas] = useState({
    height: null,
    weight: null,
    abilities: [],
    gender: null,
    types: [],
    weakness: [],
    stats: [],
    img: null,
    color: null,
  });
  async function getGender(url) {
    try {
      const response = await axios.get(url);
      const data = response.data;
      const gender_rate = data.gender_rate;
      if (gender_rate === -1) {
        return "Genderless";
      } else if (gender_rate === 0) {
        return "male";
      } else if (gender_rate === 8) {
        return "female";
      } else {
        return "both";
      }
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  }
  function getStatsPercent(stats) {
    const max_stat = 255;
    const percent = (stats / max_stat) * 100;
    return parseInt(percent);
  }
  async function getColor(url) {
    try {
      const response = await axios.get(url);
      const data = response.data;
      return data.color.name;
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  }

  async function fetchData() {
    const url = `https://pokeapi.co/api/v2/pokemon/${props.id}`;
    try {
      const response = await axios.get(url);
      const data = response.data;
      // console.log(data);
      const color = await getColor(data.species.url);
      const gender = await getGender(data.species.url);
      const refineData = {
        height: data.height || "", // height
        weight: data.weight || "", // weight
        abilities: data.abilities.filter((item) => !item.is_hidden) || [], // abilities
        gender: gender || "",
        types: data.types.map((item) => item.type.name) || [], // types
        weakness: [], // weakness
        stats: data.stats || [], // stats
        img: data.sprites.front_default || "", // img
        color: color || "", // color
      };
      console.log(refineData);
      setDatas(refineData);
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="flex gap-2 items-center">
        <h1>pokemon name</h1>
        <span># {formatNumber(props.id)}</span>
      </div>
      <div className="flex flex-col items-center w-[400px] h-[600px] bg-white rounded-xl overflow-hidden shadow-xl">
        <div className="banner flex relative h-1/2 w-full justify-center" style={{ backgroundColor: getBackGroundColor(datas.color) }}>
          <img
            src={datas.img}
            alt="img"
            className="absolute h-[100px] bottom-0 transform-[translate(0px,calc(30%))] "
          />
        </div>
        <div className="h-full w-full px-8 py-4 bg-white mt-1 ">
          <div className="grid grid-cols-2 gap-2 box-1 border-b-2">
            <div className="flex flex-col gap-1">
              <span className="text-[#989197]">Height</span>
              <span>{datas.height}</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[#989197]">Weight</span>
              <span>{datas.weight}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#989197]">Abilities</span>
              <div className="flex gap-2">
                {datas.abilities.map((item, index) => {
                  return <span key={index}>{item.ability.name}</span>;
                })}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#989197]">Gender</span>
              <span>{datas.gender}</span>
            </div>
          </div>
          <div className="box-2 border-b-2">
            <di>
              <span className="text-[#989197]">Types</span>
              <div className="flex gap-2">
                {datas.types.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="type-box border-1 rounded-xl p-1 mb-1 text-white"
                      style={{ backgroundColor: getTypeColor(item) }}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </di>
          </div>
          <div className="box-3 ">
            <div className="text-[#989197]">Stat</div>
            <div>
              {datas.stats.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <span>{item.stat.name}</span>

                    <Progress
                      value={item.base_stat}
                      percentage={getStatsPercent(item.base_stat)}
                      color={datas.color}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardDetail;
