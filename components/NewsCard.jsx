import React from "react";
import Image from "next/image";

const NewsCard = ({ title, url, backupImg }) => {
  return (
    <div className="relative border rounded-xl">
      <div className="px-5 py-5">
        <div className="flex items-center gap-2 pb-3">
          <span className="flex h-2 w-2 rounded-full bg-red-500" />
          <p className="uppercase text-muted-foreground text-xs">news</p>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="h-[55%] px-5">
        <Image
          src={url ? url : backupImg}
          alt="news"
          width={1920}
          height={1080}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>
      <div className="flex px-5 py-5 gap-2 items-center">
        <p className="uppercase text-muted-foreground text-xs">3 MINS READ</p>
        <span className="flex h-2 w-2 rounded-full bg-muted-foreground" />
        <p className="uppercase text-muted-foreground text-xs">9:37 PM IST</p>
      </div>
    </div>
  );
};

export default NewsCard;
