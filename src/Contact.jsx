import Header from "./components/Header";
import Footer from "./components/Footer";
function Contact() {
  return (
    <div className="body">
      <Header />
      <form className="flex flex-col mt-20 mx-35 mb-8 text-center gap-5 items-center ">
        <p>First Name</p>
        <input type="text" className="bg-[#FFFED3] xl:w-xl md:w-md rounded-lg text-center h-7 border-1"/>
        <p>Last Name</p>
        <input type="text" className="bg-[#FFFED3] xl:w-xl md:w-md rounded-lg text-center h-7 border-1"/>
        <p>email</p>
        <input type="text" className="bg-[#FFFED3] xl:w-xl md:w-md rounded-lg text-center h-7 border-1"/>
        
        <button className="submit-button bg-[#BBE9FF] h-8 w-1/10 rounded-lg shadow-xl "><span>Contact me</span></button>
      </form>
      <Footer />
    </div>
  );
}
export default Contact;
