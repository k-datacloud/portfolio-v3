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

  if (window.location.pathname === "/") {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const main = document.querySelector(".main");
    const loading = document.querySelector(".js-loading");
    const kvTagText = document.querySelectorAll(".p-top-kv__tag-line");
    gsap.set([html, body], {
      overflow: "hidden",
      height: "100%",
    });
    gsap.set(loading, {
      display: "block",
      opacity: 1,
      pointerEvents: "auto",
    });
    gsap.set(main, {
      pointerEvents: "none",
    });
    gsap.set(kvTagText, {
      yPercent: 100,
    });

    const digitWrappers = document.querySelectorAll(".js-digit");
    const digitHeight = digitWrappers[0].getBoundingClientRect().height;
    const loadingText = document.querySelectorAll(".loading__text");
    digitWrappers.forEach((item) => {
      item.style.height = digitHeight + "px";
    });

    digitWrappers.forEach((wrapper) => {
      for (let i = 1; i <= 9; i++) {
        const span = document.createElement("span");
        span.classList.add("digit");
        span.classList.add("loading__text");
        span.textContent = i;
        wrapper.appendChild(span);
      }

      digitWrappers[1].querySelectorAll(".digit").forEach((digit) => {
        digit.classList.add("digit-one");
      });

      digitWrappers[0].querySelectorAll(".digit").forEach((digit) => {
        digit.classList.add("digit-ten");
      });
    });

    const digits = document.querySelectorAll(".digit");
    const digitone = document.querySelectorAll(".digit-one");
    const digitten = document.querySelectorAll(".digit-ten");
    const digithundred = document.querySelector(".digit-hundred");

    const openingAnimation = () => {
      const timeline = gsap.timeline();
      const digitoneFirst = Math.floor(Math.random() * 9) + 1;
      const digittenFirst = Math.floor(Math.random() * 8) + 1;
      const spinDuration = 1.5;
      const easing = "power1.out";

      gsap.set(digithundred, {
        yPercent: 100,
        display: "block",
      });

      timeline.to(
        digitone,
        {
          y: -digitHeight * digitoneFirst,
          duration: spinDuration,
          ease: easing,
        },
        "start"
      );

      timeline.to(
        digitten,
        {
          y: -digitHeight * digittenFirst,
          duration: spinDuration,
          ease: easing,
        },
        "start"
      );

      const digitoneSecond = Math.floor(Math.random() * 9) + 1;
      let digittenSecond =
        Math.floor(Math.random() * (9 - digittenFirst)) + digittenFirst + 1;
      if (digittenSecond > 9) digittenSecond === 9;

      timeline.to(
        digitone,
        {
          y: -digitHeight * digitoneSecond,
          duration: spinDuration,
          ease: easing,
        },
        "second"
      );

      timeline.to(
        digitten,
        {
          y: -digitHeight * digittenSecond,
          duration: spinDuration,
          ease: easing,
        },
        "second"
      );

      timeline.to(
        digits,
        {
          y: 0,
          duration: spinDuration,
          ease: easing,
        },
        "final"
      );

      timeline.to(
        digithundred,
        {
          yPercent: 0,
          duration: spinDuration,
          ease: easing,
        },
        "final"
      );

      timeline.to(loadingText, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 1.5,
        ease: "power2.out",
      });

      timeline.to(
        loading,
        {
          opacity: 0,
          pointerEvents: "none",
          duration: 2,
          ease: "sine.in",
          onComplete: () => {
            gsap.set(loading, {
              display: "none",
              opacity: 0,
              pointerEvents: "none",
            });
          },
        },
        "view"
      );

      timeline.to(
        main,
        {
          pointerEvents: "auto",
          duration: 1,
          ease: "sine.in",
        },
        "view"
      );

      timeline.to(
        kvTagText,
        {
          yPercent: 0,
          duration: 1.5,
          ease: "power2.out",
          onComplete: () => {
            gsap.set([html, body], {
              overflow: "auto",
              height: "auto",
            });
            gsap.set(main, {
              pointerEvents: "auto",
            });
            runLenis();
          },
        },
        "+=0.5"
      );
    };

    openingAnimation();

    const paper = document.querySelector(".js-paper");
    if (!paper) return;
    paper.addEventListener("click", () => {
      gsap.to(paper, {
        rotateX: -180,
        rotateY: -180,
        duration: 1,
        ease: "power3.out",
      });
    });

    gsap.registerPlugin(ScrollTrigger);

    const intro = document.querySelector(".p-top-intro");
    const apple = document.querySelector(".apple");
    const scrollY = window.scrollY / 100;
    if (!apple) return;
    gsap.set(apple, {
      backgroundPosition: "50% -40px",
    });
    gsap.to(apple, {
      backgroundPosition: `50% 40px`,
      ease: "none",
      scrollTrigger: {
        trigger: intro,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });
  }
};

export default mainScript;
