"use client";
import { cocktailLists, sliderLists } from "../../constants/index.js";
import { goodLists, featureLists } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import React, { useState, useRef } from "react";

import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCocktails = sliderLists.length;
  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };
  const getCocktailsAt = (indexOffset) => {
    return sliderLists[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailsAt(0);
  const prewCocktail = getCocktailsAt(-1);
  const nextCocktail = getCocktailsAt(1);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, duration: 1, xPercent: 0, ease: "power1.inOut" }
    );

    gsap.fromTo(
      ".details h2",
      { opacity: 0, yPercent: 100 },
      { opacity: 1, duration: 1, yPercent: 0, ease: "power1.inOut" }
    );

    gsap.fromTo(
      ".details p",
      { opacity: 0, yPercent: 100 },
      { opacity: 1, duration: 1, yPercent: 0, ease: "power1.inOut" }
    );
  }, [currentIndex]);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-right-leaf.png" alt="" id="m-right-leaf" />
      <img src="/images/slider-left-leaf.png" alt="" id="m-left-leaf" />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index == currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prewCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              arria-hidden="true"
            />
          </button>

          <button
            className="text-right"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>

            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              arria-hidden="true"
            />
          </button>
        </div>
        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" alt="" />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
