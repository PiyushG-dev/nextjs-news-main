import React from "react";
import Image from "next/image";
import hero from "@/public/assets/hero.jpg";

const Hero = ({ title, content, category, author, date }) => {
  return (
    <section className="w-full py-14">
      <div className="screen-max-width flex gap-5">
        <div className="w-2/4 flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <h1 className="text-7xl">
              Russia’s Youngest-ever Astronauts Blast Off to Space Station
            </h1>
            <p className="text-muted-foreground">
              On Thursday, three Russian astronauts lifted off on the Moscow-17
              spacecraft from the Sputnik 1 Satellite Launch Center deep in the
              Gobi Desert, heading for the Mir space station for a six-month
              stay.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p>Science</p>
            <p>Daniel Albarta</p>
            <p>October 22, 2023</p>
          </div>
        </div>
        <div className="w-2/4">
          <Image src={hero} className="h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
