"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { hero } from "@/utils";
import Image from "next/image";

const Feed = () => {
  const headline =
    "Russia’s Youngest-ever Astronauts Blast Off to Space Station";

  // shortening the headline if needed
  const handleTruncate = (headline) => {
    const words = headline.split(" ");
    const truncatedHeadline =
      words.length > 6 ? words.slice(0, 6).join(" ") + "..." : headline;
    return truncatedHeadline;
  };

  return (
    <section className="w-full">
      <div className="screen-max-width flex gap-3">
        {[2, 8, 9].map((item, i) => {
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
                  {handleTruncate(headline)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image src={hero} alt="hero" />
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
