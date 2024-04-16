import axios from "axios";

// image imports

import hero from "@/public/assets/hero.jpg";
import headline1 from "@/public/assets/headline1.jpg";
import headline2 from "@/public/assets/headline2.jpg";
import headline3 from "@/public/assets/headline3.jpg";
import headline4 from "@/public/assets/headline4.jpg";

import newest1 from "@/public/assets/newest1.jpg";
import newest2 from "@/public/assets/newest2.jpg";
import newest3 from "@/public/assets/newest3.jpg";
import newest4 from "@/public/assets/newest4.jpg";

import trending from "@/public/assets/trending.jpg";
import trend1 from "@/public/assets/trend1.jpg";
import trend2 from "@/public/assets/trend2.jpg";
import trend3 from "@/public/assets/trend3.jpg";
import subTrend1 from "@/public/assets/subTrend1.jpg";
import subTrend2 from "@/public/assets/subTrend2.jpg";
import subTrend3 from "@/public/assets/subTrend3.jpg";
import subTrend4 from "@/public/assets/subTrend4.jpg";
import subTrend5 from "@/public/assets/subTrend5.jpg";
import subTrend6 from "@/public/assets/subTrend6.jpg";
import subTrend7 from "@/public/assets/subTrend7.jpg";
import subTrend8 from "@/public/assets/subTrend8.jpg";
import subTrend9 from "@/public/assets/subTrend9.jpg";
import subTrend10 from "@/public/assets/subTrend10.jpg";
import subTrend11 from "@/public/assets/subTrend11.jpg";
import subTrend12 from "@/public/assets/subTrend12.jpg";

// image exports

export {
  hero,
  headline1,
  headline2,
  headline3,
  headline4,
  newest1,
  newest2,
  newest3,
  newest4,
  trending,
  trend1,
  trend2,
  trend3,
  subTrend1,
  subTrend2,
  subTrend3,
  subTrend4,
  subTrend5,
  subTrend6,
  subTrend7,
  subTrend8,
  subTrend9,
  subTrend10,
  subTrend11,
  subTrend12,
};

export async function fetchTopHeadlines(country) {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: country,
        apiKey: process.env.NEWS_API_KEY,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
