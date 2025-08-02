import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function runMain() {
  let obj = { val: 0 };
  const percent = document.querySelector(".js-percent");
  console.log(percent);

  gsap.to(obj, {
    val: 100,
    duration: 1,
    onUpdate: () => {
      percent.textContent = `${obj.val.toFixed(0)}%`;
    },
  });
}
