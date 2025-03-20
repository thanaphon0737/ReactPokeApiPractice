// utils.js
function getTypeColor(type) {
    const typeColors = {
      fire: "#F08030",
      water: "#6890F0",
      grass: "#78C850",
      electric: "#F8D030",
      ice: "#98D8D8",
      fighting: "#C03028",
      poison: "#A040A0",
      ground: "#E0C068",
      flying: "#A890F0",
      psychic: "#F85888",
      bug: "#A8B820",
      rock: "#B8A038",
      ghost: "#705898",
      dragon: "#7038F8",
      dark: "#705848",
      steel: "#B8B8D0",
      fairy: "#EE99AC",
      normal: "#A8A878",
    };
  
    return typeColors[type.toLowerCase()] || "#ddd"; // Default color if type not found
  }
  function formatNumber(num) {
    return num.toString().padStart(4, "0");
  }
function getBackGroundColor(color){
  if(!color) return "#ddd";
  const backgroundColor = {
    black: "#52575D",
    blue: "#C6E7FF",
    brown: "#B17F59",
    gray: "#DBDBDB",
    green: "#D0E8C5",
    pink: "#FDB7EA",
    purple: "#CDC1FF",
    red: "#FF8080",
    white: "#FBFBFB",
    yellow: "#FFF9BF",

  }
  return backgroundColor[color.toLowerCase()] || "#ddd";
}
export {getTypeColor,formatNumber,getBackGroundColor};
