import Feed from "@/components/Feed";
import NewsContextProvider from "@/context/NewsContext";

export default function Home() {
  return (
    <>
      <NewsContextProvider>
        <Feed />
      </NewsContextProvider>
    </>
  );
}
