import Link from "next/link";

export default function Experience() {
  return (
    <div className="flex flex-col gap-10 pt-20 pb-20 min-h-screen bg-base-black z-10  ">
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
            <h4 className="font-mono text-base-black ">2021 - Present</h4>
          </div>
          <p className="font-mono text-white px-5 py-10 border-solid border-2 border-main-red">
            User Lifecycle: Managed users with multi-channel marketing (InApp,
            Push, Email). Decisions: Strategized based on revenue and retention
            metrics. A/B Tests: Conducted and assessed for optimized user
            experience. Tools: Skilled with Iterable, Contentful, Amplitude,
            MoEngage, Asana. Web Dev: Led website upkeep using React, HTML, CSS,
            JavaScript. Monetization: Led strategy and execution to increase
            revenue.
          </p>
        </div>
        <div className="sticky top-20 bg-base-black">
          <div className="flex flex-row bg-main-red justify-between items-center py-5 px-5">
            <h3 className="text-base-black  font-bold text-xl  ">
              Freelance | Web development
            </h3>
            <h4 className="font-mono text-base-black ">2022 - Present</h4>
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
            <h4 className="font-mono text-base-black ">2020</h4>
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
