import Feed from "@/components/Feed";
import Hero from "@/components/Hero";
import NewsContextProvider from "@/context/NewsContext";

export default function Home() {
  return (
    <>
      <NewsContextProvider>
        <Hero />
        <Feed />
      </NewsContextProvider>
    </>
  );
}
