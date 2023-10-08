import Image from "next/image";
import Link from "next/link";
import Me from "../../../public/me.jpg";

import { Arrow } from "../icons/Icons";

export default function About() {
  return (
    <div className="flex flex-row gap-10 pt-20 bg-base-black z-10  ">
      <div>
        <div className="flex flex-col sticky top-20">
          <div className="flex flex-row w-full mb-10 items-baseline gap-5 ">
            <h2 className="text-main-red font-bold text-4xl text whitespace-nowrap" >
              .about me
            </h2>
            <div className="divider"></div>
          </div>
          <div className="flex flex-row gap-10">
            <Image
              alt="Tim Boerner"
              src={Me}
              className="rounded-full aspect-square"
            />
            <div className="flex flex-col">
              <p className="font-mono text-white mb-10">
                I'm Kale Konn, a passionate and creative designer with a focus
                on bringing innovative ideas to life. Here's a glimpse into who
                I am and what I bring to the table:
              </p>
              <Link href="/contact">
                <p className="text-main-red font-medium items-center text-xl font-mono flex flex-row gap-2 text crt-glow-text">
                  work with me
                  <span className="-rotate-45 hover:rotate-0 transition-all">
                    <Arrow color={'#fff'} />
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="sticky top-20 bg-base-black">
          <h3 className="text-base-black bg-main-red font-bold text-xl py-5 px-5 ">
            .web development
          </h3>
          <p className="font-mono text-white px-5 py-10 border-solid border-2 border-main-red">
            I'm Kale Konn, a passionate and creative designer with a focus on
            bringing innovative ideas to life. Here's a glimpse into who I am
            and what I bring to the table:
          </p>
        </div>
        <div className="sticky top-20 bg-base-black">
          <h3 className="text-base-black bg-main-red font-bold text-xl py-5 px-5 ">
            .web development
          </h3>
          <p className="font-mono text-white px-5 py-10 border-solid border-2 border-main-red">
            I'm Kale Konn, a passionate and creative designer with a focus on
            bringing innovative ideas to life. Here's a glimpse into who I am
            and what I bring to the table:
          </p>
        </div>
        <div className="sticky top-20 bg-base-black">
          <h3 className="text-base-black bg-main-red font-bold text-xl py-5 px-5 ">
            .web development
          </h3>
          <p className="font-mono text-white px-5 py-10 border-solid border-2 border-main-red">
            I'm Kale Konn, a passionate and creative designer with a focus on
            bringing innovative ideas to life. Here's a glimpse into who I am
            and what I bring to the table:
          </p>
        </div>
      </div>
    </div>
  );
}
