import { getBackGroundColor } from "../utils";
function Progress(props) {
  return (
    <div
      className=" h-4 rounded-full overflow-hidden"
      style={{ backgroundColor: getBackGroundColor(props.color), }}
    >
      <div
        className=" flex justify-center items-center h-full text-white text-xs "
        style={{ width: `${props.percentage}%`, backgroundColor : props.color, filter: "brightness(1.2)" }}
      >
        {props.value}
      </div>
    </div>
  );
}
export default Progress;
