import { cocktailLists } from "../../constants/index.js";
import { goodLists, featureLists } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });
    maskTimeline.to(".will-fade", {
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    });
    maskTimeline.to(".masked-img", {
      scale: 1.3,
      maskPosition: "center",
      maskSize: "400%",
      ease: "power1.inOut",
      duration: 1,
    });

    maskTimeline.to("#masked-content", {
      opacity: 1,

      ease: "power1.inOut",
      duration: 1,
    });
  });
  return (
    <div id="art">
      <div className="container mx-auto-h-full pt-20">
        <h2 className="will-fade">The ART</h2>
        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="public/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              src="public/images/under-img.jpg"
              alt="under"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="public/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
