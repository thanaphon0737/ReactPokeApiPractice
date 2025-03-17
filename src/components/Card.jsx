function Card(props) {
  return (
    <div className="card flex flex-col items-center ">
        <img src={props.avatar} alt="img" className="border-2 w-sm rounded-xl mb-4 bg-[url(/img/mountains.jpg)]"/>
        <p className="">{props.name}</p>
    </div>
  )
}
export default Card