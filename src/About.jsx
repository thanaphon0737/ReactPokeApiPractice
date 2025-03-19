import Header from "./components/Header";
import Footer from "./components/Footer";
function About() {
  return (
    <div className="body">
      <Header />
      <div className="flex mt-20 mx-35 mb-8 justify-center">
        <p className="w-1/2 text-center">
          👋 Hi, I'm @thanaphon0737 👀 I'm interested in ...Web Development,
          Mobile Development and Data Science include IoT & Big Data
          Cryptocurrency and Blockchain DeFi. 🌱 I'm currently learning ...Full
          stack development(HTML, CSS, JavaScript, React.js, node.js, mongoDB,
          Mysql, Postgresql), Cross platform develop(Flutter, React native) and
          more tools.Although I don't have professional experience yet, I'm
          eager to apply my knowledge and grow as a developer. This website is
          my side project for practicing React.js and Tailwind CSS while using
          the PokeAPI. I'm actively looking for opportunities to start my
          career.
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default About;
