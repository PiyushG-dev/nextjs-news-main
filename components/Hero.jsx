import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { hero } from "@/utils";
import { fetchTopHeadlines } from "@/utils";

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
      <div className="screen-max-width grid grid-cols-3 gap-3 lg:px-5">
        {articles.map((item, i) => {
          return (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-red-500" />
                  <p className="uppercase text-muted-foreground text-xs">
                    news
                  </p>
                </div>
                <CardTitle className="text-xl">
                  {handleTruncate(item.title)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={item.urlToImage ? item.urlToImage : hero}
                  alt="hero"
                  width={500}
                  height={500}
                />
              </CardContent>
              <CardFooter className="gap-2">
                <p className="uppercase text-muted-foreground text-xs">
                  3 MINS READ
                </p>
                <span className="flex h-2 w-2 rounded-full bg-muted-foreground" />
                <p className="uppercase text-muted-foreground text-xs">
                  9:37 PM IST
                </p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Feed;
