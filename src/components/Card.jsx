import { NavLink } from "react-router";
import "../pokemon.css";
import { getTypeColor, formatNumber } from "../utils.js";
function Card(props) {

  return (
    <div className="card flex flex-col items-center ">
      <NavLink to={`/pokemon/${props.id}`}>
        <img
          src={props.avatar}
          alt="img"
          className="border-2 w-sm rounded-xl mb-4 bg-[url(/img/mountains.jpg)]"
        />
      </NavLink>

      <p className="text-[#989197]">#{formatNumber(props.id)}</p>
      <p className="">{props.name}</p>
      <div className="flex gap-4 container-types">
        {props.types.map((type, i) => {
          return (
            <p
              key={i}
              className="type-box border-1 rounded-xl p-1 m-2 text-white"
              style={{ backgroundColor: getTypeColor(type) }}
            >
              {type}
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default Card;
