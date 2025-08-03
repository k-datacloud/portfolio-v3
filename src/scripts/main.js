import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const mainScript = () => {
  console.log("とんかつの作り方を学ぼう");
  gsap.to(".loader__text", {
    duration: 1,
    color: "blue",
  });
};

export default mainScript;
