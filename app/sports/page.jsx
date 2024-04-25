import React from "react";
import Hero from "@/components/Hero";
import sports from "@/public/assets/sports.webp";
import Feed from "@/components/Feed";

const heroInfo = {
  title: "Ronaldo vs Messi: Ex-England manager Capello settles debate.",
  content:
    "On Thursday, three Russian astronauts lifted off on the Moscow-17 spacecraft from the Sputnik 1 Satellite Launch Center deep in the Gobi Desert, heading for the Mir space station for a six-month stay.",
  category: "Science",
  author: "Daniel Albarta",
  date: "October 22, 2023",
  img: sports,
};

const Sports = () => {
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

export default Sports;
