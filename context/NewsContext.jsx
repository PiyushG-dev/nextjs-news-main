"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [value, setValue] = useState("in");
  const [articles, setArticles] = useState([]);

  const frameworks = [
    {
      value: "us",
      label: "United States 🇺🇸",
    },
    {
      value: "in",
      label: "India 🇮🇳",
    },
    {
      value: "au",
      label: "Australia 🇦🇺",
    },
    {
      value: "cn",
      label: "China 🇨🇳",
    },
    {
      value: "gb",
      label: "United Kingdom 🇬🇧",
    },
  ];

  useEffect(() => {
    fetchTopHeadlines();
  }, [value]);

  const fetchTopHeadlines = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: value,
          apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
        },
      });
      setArticles(response.data.articles);
    } catch (err) {
      console.error(err);
    }
  };

  const contextValue = { frameworks, value, setValue, articles };

  return (
    <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>
  );
};

export default NewsContextProvider;
