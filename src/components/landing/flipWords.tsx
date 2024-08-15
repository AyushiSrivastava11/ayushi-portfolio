// import React from "react";
// import { FlipWords } from "../ui/flip-words";

// export default function FlipWordsDemo() {
//   const words = ["Coding", "Debugging", "Developing"];
//   // const anotherWords=["better", "cute", "beautiful", "modern"]
//   return (
//     <div className="h-[40rem] flex justify-center items-center px-4">
//       <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
//         Hello There, I am Ayushi
//         and I love
//         <FlipWords words={words} /> <br />
//         sky,red,yell,sky,green,red
//       </div>
//     </div>
//   );
// }


import React from "react";
import { FlipWords } from "../ui/flip-words";
import AnimatedModalDemo from "./animatedModal";
// import CardHoverEffectDemo from "./cardHover"; // Import the CardHoverEffectDemo component

export default function FlipWordsDemo() {
  const wordsWithColors = [
    { word: "Coding", color: "blue" },
    { word: "Debugging", color: "red" },
    { word: "Developing", color: "green" },
    { word: "Deploying", color: "orange" }
  ];

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Hello There, I am Ayushi and I love
        <FlipWords wordsWithColors={wordsWithColors} /> <br />
      </div>
    </div>
  );
}
