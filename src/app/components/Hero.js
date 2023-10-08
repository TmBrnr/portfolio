"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Image from "next/image";

import name from "../../../public/name.svg";
import bottom from "../../../public/bottom.svg";

export default function Hero() {
  const [height, setHeight] = useState("0px");
  const semiCircleRef = useRef(null);

  const adjustHeight = () => {
    if (semiCircleRef.current) {
      const width = semiCircleRef.current.offsetWidth;
      setHeight(`${width * 0.5}px`);
    }
  };

  useEffect(() => {
    adjustHeight();
    window.addEventListener("resize", adjustHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, []);


  const [scale, setScale] = useState(1);
  //set hidden
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newScale = 1 + (scrollTop / 1000); // Adjust this calculation as needed
      setScale(Math.min(newScale, 1.1)); // Ensuring it doesn't exceed 1.1
      if (scrollTop > 2000) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup the event listener when the component is unmounted
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-0 "
    style={{visibility: hidden ? "hidden" : "visible"}}
    >
      <div className="h-screen flex flex-col justify-between w-full ">
        <Navbar />
        <div
          className="semi-circle relative"
          style={{ height: height }}
          ref={semiCircleRef}
        >
          <div className="absolute bottom-0 w-full ">
              <Image alt="Tim Boerner" src={name} className="w-full" style={{ transform: `scale(${scale})`}} />
          </div>
        </div>
      </div>
    </div>
  );
}
