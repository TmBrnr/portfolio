import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/logo.svg";
import {Arrow} from "../icons/Icons";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-5 py-5  ">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-row gap-5">
            <Link href="/about">
              <p className="text-main-red font-mono text-xl font-medium textShadow">about</p>
            </Link>
            <Link href="/work">
              <p className="text-main-red  font-mono text-xl  font-medium">work</p>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/">
              <p className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 ">
                <Image alt="Tim Boerner" src={logo} width={35} height={35} />
              </p>
            </Link>
          </div>
          <div>
            <Link href="/contact">
              <p className="text-main-red font-medium items-center text-xl font-mono flex flex-row gap-2 text ">contact <span className="-rotate-45 hover:rotate-0 transition-all"><Arrow/></span></p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
