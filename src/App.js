import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <div>
      <Navigation />
      <br/><br/>
      <HeroSection />
    </div>
  );
};

export default App;