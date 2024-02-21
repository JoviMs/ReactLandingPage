import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  let heroData = [
    { text1: "Go For", text2: "What you Desire" },
    { text1: "Dig", text2: "Your Desire" },
    { text1: "Try", text2: "All your Best" },
  ];
  const [heroCount, setheroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setheroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setheroCount={setheroCount}
        playStatus={playStatus}
      />
    </div>
  );
};
export default App;
