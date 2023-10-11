import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/logo.svg";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-col justify-center lg:items-center px-5 py-5 pb-10 ">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10 w-full mb-10">
          <Link href="/datenschutz">
            <p className="text-main-red font-mono  textShadow crt-glow-text">
              datenschutz
            </p>
          </Link>
          <Link href="/impressum">
            <p className="text-main-red  font-mono   crt-glow-text">
              impressum
            </p>
          </Link>

          <Link href="/">
            <Image alt="Tim Boerner" src={logo} width={35} height={35} />
          </Link>

          <Link href="https://www.instagram.com/tm.brnr/">
            <p className="text-main-red font-mono   textShadow crt-glow-text">
              instagram
            </p>
          </Link>
          <Link href="https://www.linkedin.com/in/tim-b%C3%B6rner-21a006206/">
            <p className="text-main-red  font-mono  crt-glow-text">linkedin</p>
          </Link>
        </div>
        <p className="text-main-red  font-mono  crt-glow-text">© Copyright 2023. All rights Reserved.</p>
      </div>
    </>
  );
}
