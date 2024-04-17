import React from "react";
import NewsCard from "./NewsCard";
import { fetchTopHeadlines } from "@/utils";
import breaking from "@/public/assets/breaking.jpeg";
import { ComboboxDemo } from "./ui/combobox";

const Feed = async () => {
  const { articles } = await fetchTopHeadlines("us");

  // shortening the headline if needed
  const handleTruncate = (headline) => {
    const words = headline.split(" ");
    const truncatedHeadline =
      words.length > 6 ? words.slice(0, 6).join(" ") + "..." : headline;
    return truncatedHeadline;
  };

  return (
    <section className="w-full">
      <ComboboxDemo />
      <div className="screen-max-width grid grid-cols-3 gap-3 lg:px-5">
        {articles.map((item, i) => {
          return (
            <NewsCard
              key={i}
              title={handleTruncate(item.title)}
              url={item.urlToImage}
              backupImg={breaking}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Feed;
