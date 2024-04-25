import Feed from "@/components/Feed";
import Hero from "@/components/Hero";
import hero from "@/public/assets/hero.jpg";

const heroInfo = {
  title: "Russia’s Youngest-ever Astronauts Blast Off to Space Station",
  content:
    "On Thursday, three Russian astronauts lifted off on the Moscow-17 spacecraft from the Sputnik 1 Satellite Launch Center deep in the Gobi Desert, heading for the Mir space station for a six-month stay.",
  category: "Science",
  author: "Daniel Albarta",
  date: "October 22, 2023",
  img: hero,
};

export default function Science() {
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
}
