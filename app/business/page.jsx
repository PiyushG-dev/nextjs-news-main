import React from "react";
import Hero from "@/components/Hero";
import business from "@/public/assets/business.webp";
import Feed from "@/components/Feed";

const heroInfo = {
  title: "How will the jobs of the future look like due to AI and ChatGPT.",
  content:
    "On Thursday, three Russian astronauts lifted off on the Moscow-17 spacecraft from the Sputnik 1 Satellite Launch Center deep in the Gobi Desert, heading for the Mir space station for a six-month stay.",
  category: "Science",
  author: "Daniel Albarta",
  date: "October 22, 2023",
  img: business,
};

const Business = () => {
  return (
    <>
      <Hero
        title={heroInfo.title}
        content={heroInfo.content}
        category={heroInfo.category}
        author={heroInfo.author}
        date={heroInfo.date}
        img={heroInfo.img}
      />
      <Feed />
    </>
  );
};

export default Business;
