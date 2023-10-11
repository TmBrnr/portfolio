"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import bottom from "../../../public/bottom.svg";

import Footer from "./Footer";

import { Arrow } from "../icons/Icons";

export default function Bottom() {
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
    const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newScale = 1 + (scrollTop / 1000); // Adjust this calculation as needed
      setScale(Math.min(newScale, 1)); // Ensuring it doesn't exceed 1.1
      if (scrollTop > 2000) {
        setHidden(false);
      } else {
        setHidden(true);
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup the event listener when the component is unmounted
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky bottom-0 z-0  " style={{visibility: hidden ? "hidden" : "visible"}}>
      <div className="h-screen flex flex-col justify-between w-full ">
        <div
          className="flex semi-circle relative rotate-180 justify-center items-center"
          style={{ height: height }}
          ref={semiCircleRef}
        >
          <div className="absolute bottom-0 w-full rotate-180">
              <Image alt="Interested" src={bottom} className="w-full" style={{ transform: `scale(${scale})`}} />
          </div>
          <div className="rotate-90 gap-2 flex flex-col ">
            <div className="rotate-45 hover:rotate-90 transition-all"><Arrow color={'#2700C5'} size={"100"}/></div><div className="rotate-45 hover:rotate-90 transition-all"><Arrow color={'#2700C5'} size={"100"}/></div><div className="rotate-45 hover:rotate-90 transition-all"><Arrow color={'#2700C5'} size={"100"}/></div>
          </div>
        </div>
      <Footer />
      </div>
    </div>
  );
}
