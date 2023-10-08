import Link from "next/link";

export default function Experience() {
  return (
    <div className="flex flex-col gap-10 pt-20 h-screen bg-base-black z-10  ">
      <div className="flex flex-row w-full mb-10 items-baseline gap-5 ">
        <h2 className="text-main-red font-bold text-4xl text whitespace-nowrap">
          .experience
        </h2>
        <div className="divider"></div>
      </div>
      <div>
        <div className="sticky top-20 bg-base-black">
          <div className="flex flex-row bg-main-red justify-between items-center py-5 px-5">
            <h3 className="text-base-black  font-bold text-xl  ">
              Working Student | CRM & Web development @Fastic
            </h3>
            <p className="font-mono text-base-black ">2021 - Present</p>
          </div>
          <p className="font-mono text-white px-5 py-10 border-solid border-2 border-main-red">
            Owning the user lifecycle, by utilizing multiple marketing channels
            (InApp, Push and Email) Decisions based on revenue/retention
            performance. Launching and analyzing A/B tests, Working with
            Iterable, Contentful, Amplitude, MoEngage, Asana Upkeep and
            development of the website. React, HTML, CSS, JavaScript Responsible
            for strategy and implementation of monetization use cases
          </p>
        </div>
        <div className="sticky top-20 bg-base-black">
          <div className="flex flex-row bg-main-red justify-between items-center py-5 px-5">
            <h3 className="text-base-black  font-bold text-xl  ">
              Freelance | Web development
            </h3>
            <p className="font-mono text-base-black ">2022 - Present</p>
          </div>
          <p className="font-mono text-white px-5 py-10 border-solid border-2 border-main-red">
            Finding and fixing bugs and problems for clients Creation and
            redesign of websites Utilizing web technologies
          </p>
        </div>
        <div className="sticky top-20 bg-base-black">
          <div className="flex flex-row bg-main-red justify-between items-center py-5 px-5">
            <h3 className="text-base-black  font-bold text-xl  ">
              Working Student | CRM @Brance
            </h3>
            <p className="font-mono text-base-black ">2020</p>
          </div>
          <p className="font-mono text-white px-5 py-10 border-solid border-2 border-main-red">
            Responsible for new CRM setup creation of strategies for activation,
            retention and monetization use cases launching email, InApp and push
            marketing campaigns
          </p>
        </div>
      </div>
    </div>
  );
}
