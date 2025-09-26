import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const mainScript = () => {
  gsap.registerPlugin(ScrollTrigger);

  //Lenis smooth scrolling
  const runLenis = () => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
  };

  const footer = document.querySelector(".footer");

  if (window.location.pathname === "/") {
    runLenis();
    // const html = document.querySelector("html");
    // const body = document.querySelector("body");
    // const main = document.querySelector(".main");
    // const loading = document.querySelector(".js-loading");
    // const kvTagText = document.querySelectorAll(".p-top-kv__tag-line");
    // // gsap.set([html], {
    // //   overflow: "hidden",
    // //   height: "100%",
    // // });
    // gsap.set(loading, {
    //   display: "block",
    //   opacity: 1,
    //   pointerEvents: "auto",
    // });
    // // gsap.set(main, {
    // //   pointerEvents: "none",
    // // });
    // gsap.set(kvTagText, {
    //   yPercent: 100,
    // });

    // const digitWrappers = document.querySelectorAll(".js-digit");
    // const digitHeight = digitWrappers[0].getBoundingClientRect().height;
    // const loadingText = document.querySelectorAll(".loading__text");
    // digitWrappers.forEach((item) => {
    //   item.style.height = digitHeight + "px";
    // });

    // digitWrappers.forEach((wrapper) => {
    //   for (let i = 1; i <= 9; i++) {
    //     const span = document.createElement("span");
    //     span.classList.add("digit");
    //     span.classList.add("loading__text");
    //     span.textContent = i;
    //     wrapper.appendChild(span);
    //   }

    //   digitWrappers[1].querySelectorAll(".digit").forEach((digit) => {
    //     digit.classList.add("digit-one");
    //   });

    //   digitWrappers[0].querySelectorAll(".digit").forEach((digit) => {
    //     digit.classList.add("digit-ten");
    //   });
    // });

    // const digits = document.querySelectorAll(".digit");
    // const digitone = document.querySelectorAll(".digit-one");
    // const digitten = document.querySelectorAll(".digit-ten");
    // const digithundred = document.querySelector(".digit-hundred");

    // const openingAnimation = () => {
    //   const timeline = gsap.timeline();
    //   const digitoneFirst = Math.floor(Math.random() * 9) + 1;
    //   const digittenFirst = Math.floor(Math.random() * 8) + 1;
    //   const spinDuration = 1.5;
    //   const easing = "power1.out";

    //   gsap.set(digithundred, {
    //     yPercent: 100,
    //     display: "block",
    //   });

    //   timeline.to(
    //     digitone,
    //     {
    //       y: -digitHeight * digitoneFirst,
    //       duration: spinDuration,
    //       ease: easing,
    //     },
    //     "start"
    //   );

    //   timeline.to(
    //     digitten,
    //     {
    //       y: -digitHeight * digittenFirst,
    //       duration: spinDuration,
    //       ease: easing,
    //     },
    //     "start"
    //   );

    //   const digitoneSecond = Math.floor(Math.random() * 9) + 1;
    //   let digittenSecond =
    //     Math.floor(Math.random() * (9 - digittenFirst)) + digittenFirst + 1;
    //   if (digittenSecond > 9) digittenSecond === 9;

    //   timeline.to(
    //     digitone,
    //     {
    //       y: -digitHeight * digitoneSecond,
    //       duration: spinDuration,
    //       ease: easing,
    //     },
    //     "second"
    //   );

    //   timeline.to(
    //     digitten,
    //     {
    //       y: -digitHeight * digittenSecond,
    //       duration: spinDuration,
    //       ease: easing,
    //     },
    //     "second"
    //   );

    //   timeline.to(
    //     digits,
    //     {
    //       y: 0,
    //       duration: spinDuration,
    //       ease: easing,
    //     },
    //     "final"
    //   );

    //   timeline.to(
    //     digithundred,
    //     {
    //       yPercent: 0,
    //       duration: spinDuration,
    //       ease: easing,
    //     },
    //     "final"
    //   );

    //   timeline.to(loadingText, {
    //     clipPath: "inset(0% 0% 100% 0%)",
    //     duration: 1.5,
    //     ease: "power2.out",
    //   });

    //   timeline.to(
    //     loading,
    //     {
    //       opacity: 0,
    //       pointerEvents: "none",
    //       duration: 2,
    //       ease: "sine.in",
    //       onComplete: () => {
    //         gsap.set(loading, {
    //           display: "none",
    //           opacity: 0,
    //           pointerEvents: "none",
    //         });
    //       },
    //     },
    //     "view"
    //   );

    //   timeline.to(
    //     main,
    //     {
    //       pointerEvents: "auto",
    //       duration: 1,
    //       ease: "sine.in",
    //     },
    //     "view"
    //   );

    //   timeline.to(
    //     kvTagText,
    //     {
    //       yPercent: 0,
    //       duration: 1.5,
    //       ease: "power2.out",
    //       onComplete: () => {
    //         gsap.set([html], {
    //           overflow: "auto",
    //           height: "auto",
    //         });
    //         gsap.set(main, {
    //           pointerEvents: "auto",
    //         });
    //         runLenis();
    //       },
    //     },
    //     "+=0.5"
    //   );
    // };

    // openingAnimation();

    const cta = document.querySelector(".c-cta");
    const ctaMask = document.querySelector(".js-cta-mask");
    const sectionTitle = document.querySelectorAll(".js-section-title");
    sectionTitle.forEach((title) => {
      const letter = title.textContent.trim().split("");
      title.textContent = "";
      letter.forEach((char) => {
        const span = document.createElement("span");
        if (char === " ") {
          span.innerHTML = "&nbsp;";
        } else {
          span.textContent = char;
        }
        span.classList.add("c-char");
        title.append(span);
      });
    });
    const char = document.querySelectorAll(".c-char");
    gsap.set(char, {
      yPercent: 100,
      opacity: 0,
    });

    gsap.to(char, {
      scrollTrigger: {
        trigger: cta,
        start: "top 40%",
        end: "bottom top",
        markers: true,
        onEnter: () => {
          gsap.to(char, {
            yPercent: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 0.5,
            stagger: 0.05,
          });
        },
      },
    });

    gsap.set(ctaMask, {
      rotate: 0,
      opacity: 1,
      yPercent: 0,
    });
    let swingtween = gsap.to(ctaMask, {
      rotate: 5,
      opacity: 1,
      yPercent: 0,
      duration: 1.5,
      ease: "rough({ strength: 1, taper: false, template: none.out, clamp: false, randomize: true })",
      repeat: -1,
      yoyo: true,
    });
    gsap.to(ctaMask, {
      scrollTrigger: {
        trigger: cta,
        start: "top+=100",
        end: "bottom top",
        onEnter: () => {
          gsap.to(ctaMask, {
            yPercent: 100,
            opacity: 0,
            ease: "sine",
            duration: 2,
            onComplete: () => {
              gsap.set(ctaMask, {
                display: "none",
                rotate: 0,
              });
              swingtween.kill();
            },
          });
        },
      },
    });
  }

  if (window.location.pathname === "/info") {
    runLenis();

    const infoArchive = document.querySelector(".p-info-archive");
    const infoArchiveTitle = document.querySelector(".p-info-archive__title");
    gsap.set(infoArchiveTitle, {
      yPercent: 50,
    });

    gsap.to(infoArchiveTitle, {
      yPercent: -10,
      // ease: "power2.out",
      scrollTrigger: {
        trigger: infoArchive,
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
      },
    });

    const cta = document.querySelector(".js-cta");
    const ctaImage = document.querySelector(".js-cta-image");
    gsap.set(ctaImage, {
      backgroundPosition: "center 20%",
    });

    gsap.to(ctaImage, {
      backgroundPosition: "center 40%",
      scrollTrigger: {
        trigger: cta,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  //menu button and nav
  const menuToggle = document.querySelector(".js-menu-toggle");
  gsap.set(menuToggle, {
    pointerEvents: "none",
    opacity: 0,
  });

  gsap.to(menuToggle, {
    scrollTrigger: {
      trigger: menuToggle,
      start: "200 top",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(menuToggle, {
          pointerEvents: "auto",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(menuToggle, {
          pointerEvents: "none",
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      },
    },
  });

  ScrollTrigger.create({
    trigger: footer,
    start: "top 20%",
    markers: true,
    onEnter: () => {
      gsap.to(menuToggle, {
        pointerEvents: "none",
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(menuToggle, {
        pointerEvents: "auto",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    },
  });

  // location time
  let offset;

  async function getLocationTime() {
    const response = await fetch(
      "https://worldtimeapi.org/api/timezone/Asia/Tokyo"
    );
    const data = await response.json();
    // 東京時刻と現在の差を保存
    offset = new Date(data.datetime).getTime() - Date.now();
    localStorage.setItem("tokyoOffset", offset);
  }

  async function init() {
    const saved = localStorage.getItem("tokyoOffset");
    if (saved) {
      offset = parseInt(saved, 10);
    } else {
      await getLocationTime();
    }

    updateDisplay(); // 初回表示
    setInterval(updateDisplay, 1000); // 毎秒更新でOK
  }

  function updateDisplay() {
    const now = new Date(Date.now() + offset); // 現在時刻 + 差
    const hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2, "0");
    const ampm = hour >= 12 ? "PM" : "AM";

    document.querySelectorAll(".js-location-time").forEach((time) => {
      const localHour = time.querySelector(".js-time-hour");
      const localMinute = time.querySelector(".js-time-minute");
      const localAmpm = time.querySelector(".js-time-ampm");
      localHour.textContent = hour;
      localMinute.textContent = minute;
      localAmpm.textContent = ampm;
    });
  }

  init();

  //footer
  const hoverToggle = document.querySelectorAll(".js-hover-toggle");
  const defaultText = document.querySelectorAll(".js-hover-default");
  const hoverText = document.querySelectorAll(".js-hover-reveal");
  const defaultIcon = document.querySelectorAll(".js-hover-icon-default");
  const hoverIcon = document.querySelectorAll(".js-hover-icon-reveal");
  const lg = window.matchMedia("(min-width: 1024px)");
  let isHoverRegistered = false;
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
  const footerHover = (enable) => {
    if (isHoverRegistered) return;
    isHoverRegistered = true;
    if (!enable) return;
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

  footerHover(lg.matches);

  lg.addEventListener("change", () => {
    footerHover(lg.matches);
  });
};

export default mainScript;
