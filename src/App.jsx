import "./App.css";
import Button from "./components/button";
import Navbar from "./components/navbar";
import HeroImg from "./assets/hero_img.webp";

function App() {
  return (
    <div className="App bg-revire-light-orange">
      <Navbar />
      <div className="flex flex-col align items-center mt-6">
        <h2 className="text-[5.3rem] leading-[1.1] text-revire-primary text-center">
          Build AI applications, super <br /> fast
        </h2>
        <p className="text-center text-2xl text-revire-primary my-6">
          Stop battling with AI models, UI libraries, and juggling various data
          sources. <br /> Focus on shipping apps that drive your critical
          business decisions.{" "}
        </p>
        <Button label={"Request Access"} type="primary" />
        <img src={HeroImg} alt="hero image" />
      </div>
    </div>
  );
}

export default App;
