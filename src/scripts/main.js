import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const mainScript = () => {
  console.log("とんかつの作り方を学ぼう");

  // Lenis smooth scrolling
  const runLenis = () => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
  };

  // if (window.location.pathname === "/") {
  //   const html = document.querySelector("html");
  //   const body = document.querySelector("body");
  //   const main = document.querySelector(".main");
  //   const loading = document.querySelector(".js-loading");
  //   const kvTagText = document.querySelectorAll(".p-top-kv__tag-line");
  //   // gsap.set([html], {
  //   //   overflow: "hidden",
  //   //   height: "100%",
  //   // });
  //   gsap.set(loading, {
  //     display: "block",
  //     opacity: 1,
  //     pointerEvents: "auto",
  //   });
  //   // gsap.set(main, {
  //   //   pointerEvents: "none",
  //   // });
  //   gsap.set(kvTagText, {
  //     yPercent: 100,
  //   });

  //   const digitWrappers = document.querySelectorAll(".js-digit");
  //   const digitHeight = digitWrappers[0].getBoundingClientRect().height;
  //   const loadingText = document.querySelectorAll(".loading__text");
  //   digitWrappers.forEach((item) => {
  //     item.style.height = digitHeight + "px";
  //   });

  //   digitWrappers.forEach((wrapper) => {
  //     for (let i = 1; i <= 9; i++) {
  //       const span = document.createElement("span");
  //       span.classList.add("digit");
  //       span.classList.add("loading__text");
  //       span.textContent = i;
  //       wrapper.appendChild(span);
  //     }

  //     digitWrappers[1].querySelectorAll(".digit").forEach((digit) => {
  //       digit.classList.add("digit-one");
  //     });

  //     digitWrappers[0].querySelectorAll(".digit").forEach((digit) => {
  //       digit.classList.add("digit-ten");
  //     });
  //   });

  //   const digits = document.querySelectorAll(".digit");
  //   const digitone = document.querySelectorAll(".digit-one");
  //   const digitten = document.querySelectorAll(".digit-ten");
  //   const digithundred = document.querySelector(".digit-hundred");

  //   const openingAnimation = () => {
  //     const timeline = gsap.timeline();
  //     const digitoneFirst = Math.floor(Math.random() * 9) + 1;
  //     const digittenFirst = Math.floor(Math.random() * 8) + 1;
  //     const spinDuration = 1.5;
  //     const easing = "power1.out";

  //     gsap.set(digithundred, {
  //       yPercent: 100,
  //       display: "block",
  //     });

  //     timeline.to(
  //       digitone,
  //       {
  //         y: -digitHeight * digitoneFirst,
  //         duration: spinDuration,
  //         ease: easing,
  //       },
  //       "start"
  //     );

  //     timeline.to(
  //       digitten,
  //       {
  //         y: -digitHeight * digittenFirst,
  //         duration: spinDuration,
  //         ease: easing,
  //       },
  //       "start"
  //     );

  //     const digitoneSecond = Math.floor(Math.random() * 9) + 1;
  //     let digittenSecond =
  //       Math.floor(Math.random() * (9 - digittenFirst)) + digittenFirst + 1;
  //     if (digittenSecond > 9) digittenSecond === 9;

  //     timeline.to(
  //       digitone,
  //       {
  //         y: -digitHeight * digitoneSecond,
  //         duration: spinDuration,
  //         ease: easing,
  //       },
  //       "second"
  //     );

  //     timeline.to(
  //       digitten,
  //       {
  //         y: -digitHeight * digittenSecond,
  //         duration: spinDuration,
  //         ease: easing,
  //       },
  //       "second"
  //     );

  //     timeline.to(
  //       digits,
  //       {
  //         y: 0,
  //         duration: spinDuration,
  //         ease: easing,
  //       },
  //       "final"
  //     );

  //     timeline.to(
  //       digithundred,
  //       {
  //         yPercent: 0,
  //         duration: spinDuration,
  //         ease: easing,
  //       },
  //       "final"
  //     );

  //     timeline.to(loadingText, {
  //       clipPath: "inset(0% 0% 100% 0%)",
  //       duration: 1.5,
  //       ease: "power2.out",
  //     });

  //     timeline.to(
  //       loading,
  //       {
  //         opacity: 0,
  //         pointerEvents: "none",
  //         duration: 2,
  //         ease: "sine.in",
  //         onComplete: () => {
  //           gsap.set(loading, {
  //             display: "none",
  //             opacity: 0,
  //             pointerEvents: "none",
  //           });
  //         },
  //       },
  //       "view"
  //     );

  //     timeline.to(
  //       main,
  //       {
  //         pointerEvents: "auto",
  //         duration: 1,
  //         ease: "sine.in",
  //       },
  //       "view"
  //     );

  //     timeline.to(
  //       kvTagText,
  //       {
  //         yPercent: 0,
  //         duration: 1.5,
  //         ease: "power2.out",
  //         onComplete: () => {
  //           gsap.set([html], {
  //             overflow: "auto",
  //             height: "auto",
  //           });
  //           gsap.set(main, {
  //             pointerEvents: "auto",
  //           });
  //           runLenis();
  //         },
  //       },
  //       "+=0.5"
  //     );
  //   };

  //   openingAnimation();
  // }

  // location time
  let currentTime;
  async function getLocationTime() {
    const response = await fetch(
      "https://worldtimeapi.org/api/timezone/Asia/Tokyo"
    );
    const data = await response.json();
    currentTime = new Date(data.datetime);
  }

  async function init() {
    await getLocationTime(); // ここで取得完了を待つ
    updateDisplay(); // ここで初回表示
    setInterval(() => {
      currentTime.setMinutes(currentTime.getMinutes() + 1);
      updateDisplay();
    }, 60000);
  }

  const updateDisplay = () => {
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";

    const localTime = document.querySelectorAll(".js-location-time");
    localTime.forEach((time, index) => {
      const localHour = time.querySelector(".js-time-hour");
      const localMinute = time.querySelector(".js-time-minute");
      const localAmpm = time.querySelector(".js-time-ampm");
      localHour.textContent = hour;
      localMinute.textContent = minute;
      localAmpm.textContent = ampm;
    });
  };

  init();

  //footer
  const hoverToggle = document.querySelectorAll(".js-hover-toggle");
  const defaultText = document.querySelectorAll(".js-hover-default");
  const hoverText = document.querySelectorAll(".js-hover-reveal");
  const defaultIcon = document.querySelectorAll(".js-hover-icon-default");
  const hoverIcon = document.querySelectorAll(".js-hover-icon-reveal");
  console.log(hoverText);
  gsap.set(defaultText, {
    yPercent: 0,
    opacity: 1,
  });
  gsap.set(hoverText, {
    yPercent: 100,
    opacity: 0,
  });
  gsap.set(defaultIcon, {
    yPercent: 0,
    opacity: 1,
  });
  gsap.set(hoverIcon, {
    yPercent: 100,
    opacity: 0,
  });
  hoverToggle.forEach((toggle, index) => {
    toggle.addEventListener("mouseenter", () => {
      gsap.set(defaultText[index], {
        yPercent: 0,
        opacity: 1,
      });
      gsap.set(hoverText[index], {
        yPercent: 100,
        opacity: 0,
      });

      gsap.to(defaultText[index], {
        yPercent: -100,
        duration: 0.5,
        opacity: 0,
        ease: "power2.In",
      });
      gsap.to(hoverText[index], {
        yPercent: 0,
        duration: 0.5,
        opacity: 1,
        ease: "power2.In",
      });
    });
  });
};

export default mainScript;
