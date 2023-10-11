import Image from "next/image";
import Link from "next/link";
import Me from "../../../public/me.jpg";

import { Arrow } from "../icons/Icons";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 pt-20 bg-base-black z-10  ">
      <div>
        <div className="flex flex-col sticky top-20">
          <div className="flex flex-row w-full mb-10 items-baseline gap-5 ">
            <h2 className="text-main-red font-bold text-4xl text whitespace-nowrap">
              .about_me
            </h2>
            <div className="divider"></div>
          </div>
          <div className="flex flex-row gap-10">
            <Image
              alt="Tim Boerner"
              src={Me}
              className="rounded-full  h-fit aspect-square"
            />
            <div className="flex flex-col">
              <p className="font-mono text-white mb-10">
                I'm Tim Börner, a dedicated web developer with a fervor for
                technology. Currently a student, I am deeply engrossed in the
                ever-evolving world of tech. My primary focus is on embracing
                cutting-edge technologies and translating visionary ideas into
                tangible realities.
              </p>
              <Link href="/contact">
                <p className="text-main-red font-medium items-center text-xl font-mono flex flex-row gap-2 text crt-glow-text">
                  work with me
                  <span className="-rotate-45 hover:rotate-0 transition-all">
                    <Arrow color={"#fff"} />
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
            .web_development
          </h3>
          <p className="font-mono text-white px-5 py-10 border-solid border-2 border-main-red">
          For the past two years, I've thrived as a freelance web developer, skillfully balancing my responsibilities as a working student. Leveraging the most up-to-date technologies, I specialize in crafting responsive and high-performance websites.
          </p>
        </div>
        <div className="sticky top-20 bg-base-black">
          <h3 className="text-base-black bg-main-red font-bold text-xl py-5 px-5 ">
            .web_design
          </h3>
          <p className="font-mono text-white px-5 py-10 border-solid border-2 border-main-red">
          In addition to my coding expertise, I excel in designing contemporary, responsive websites for clients, always keeping abreast of the latest design trends.
          </p>
        </div>
        <div className="sticky top-20 bg-base-black">
          <h3 className="text-base-black bg-main-red font-bold text-xl py-5 px-5 ">
            .CRM
          </h3>
          <p className="font-mono text-white px-5 py-10 border-solid border-2 border-main-red">
          My coding expertise is enriched by a profound understanding of CRM. I adeptly navigate the user lifecycle, meticulously crafting user journeys with a focus on monetization, retention, and activation—all while prioritizing the best interests of the user.
          </p>
        </div>
      </div>
    </div>
  );
}
