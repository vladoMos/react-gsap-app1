import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className=" flex-center full-vh ">
      <h1 className=" main_text text-gradient font-95">Bootstrap radi!</h1>
    </div>
  );
};

export default App;
