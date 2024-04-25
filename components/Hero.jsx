import React from "react";
import Image from "next/image";

const Hero = ({ title, content, category, author, date, img }) => {
  return (
    <section className="w-full py-14">
      <div className="screen-max-width flex gap-5">
        <div className="w-2/4 flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <h1 className="text-7xl">{title}</h1>
            <p className="text-muted-foreground">{content}</p>
          </div>
          <div className="flex items-center gap-4">
            <p>{category}</p>
            <p>{author}</p>
            <p>{date}</p>
          </div>
        </div>
        <div className="w-2/4">
          <Image src={img} className="h-full object-cover" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
