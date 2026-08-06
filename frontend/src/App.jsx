import Home from "./components/Home.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




const App = () => {

   useEffect(() => {
    AOS.init({
      duration: 1000,      // Animation duration (ms)
      easing: "ease-in-out",
      once: true,          // Animate only once
      offset: 100,         // Start animation 100px before element is visible
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
