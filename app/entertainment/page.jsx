import React from "react";
import Hero from "@/components/Hero";
import entertainment from "@/public/assets/entertainment.webp";
import Feed from "@/components/Feed";

const heroInfo = {
  title: "Kanye West wades into Drake and Kendrick Lamar's feud.",
  content:
    "On Thursday, three Russian astronauts lifted off on the Moscow-17 spacecraft from the Sputnik 1 Satellite Launch Center deep in the Gobi Desert, heading for the Mir space station for a six-month stay.",
  category: "Science",
  author: "Daniel Albarta",
  date: "October 22, 2023",
  img: entertainment,
};

const Entertainment = () => {
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

export default Entertainment;
