import '../App.css'
import { Link ,NavLink } from "react-router";
function Header() {
    const navStyle = ({isActive }) =>{
        return {
            color: isActive ? "black" : "#FFFED3"
        }
    }
  return (
    <header className="flex flex-col justify-center items-center p-4 bg-[#BBE9FF] h-38">
        <div className="logo flex">
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="img" />
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="img" className='pokeball w-17 h-17 place-self-center'/>
        </div>
        <nav className="flex justify-center gap-4 w-full ">
        
        <NavLink  to="/" style={navStyle} className='hover:text-black '>Home</NavLink>
        <NavLink  to="/about" style={navStyle} className='hover:text-black '>About</NavLink>
        <NavLink  to="/Contact" style={navStyle} className='hover:text-black '>Contact</NavLink>
        </nav>
    </header>
  )
}
export default Header