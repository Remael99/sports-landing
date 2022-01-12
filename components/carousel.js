import React, { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { BsChevronLeft, BsChevronRight, BsDot } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";

export default function Carousel({ carouselData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleNextSlide = () => {
    currentSlide === carouselData.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const handlePreviousSlide = () => {
    currentSlide === 0
      ? setCurrentSlide(carouselData.length - 1)
      : setCurrentSlide(currentSlide - 1);
  };

  const setDotsSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const myTimer = setInterval(() => {
      if (paused !== true) {
        let newSlide =
          currentSlide === carouselData.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
      }
    }, 2000);
    return () => {
      clearInterval(myTimer);
    };
  }, [currentSlide]);

  return (
    <div className="relative flex flex-col">
      <Swipe onSwipeLeft={handleNextSlide} onSwipeRight={handlePreviousSlide}>
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={
              index === currentSlide ? `flex w-full h-full relative` : "hidden"
            }
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="w-4/5 m-auto h-full p-2 flex flex-col gap-2 ">
              <FaQuoteLeft />
              <p> {item}</p>
            </div>
            <div className="  absolute top-0 left-0 right-0 bottom-0 text-gray-600">
              <button
                className=" absolute mr-auto bottom-1/2 left-0"
                onClick={handlePreviousSlide}
              >
                <BsChevronLeft />
              </button>
              <button
                className=" absolute mr-auto  bottom-1/2 right-0"
                onClick={handleNextSlide}
              >
                <BsChevronRight />
              </button>
            </div>
          </div>
        ))}
      </Swipe>

      <div className="flex w-1/4 m-auto mt-4 ">
        {carouselData.map((item, index) => (
          <button
            key={index}
            className={` ${
              index === currentSlide ? `text-blue-600` : `text-gray-400`
            }   bottom-0 left-0 right-0 m-auto mb-0 top-full text-3xl `}
            onClick={() => setDotsSlide(index)}
          >
            <BsDot />
          </button>
        ))}
      </div>
    </div>
  );
}
