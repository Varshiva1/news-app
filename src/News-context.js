import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const NewsContext = createContext();
const apiKey = "pub_5227f06962c95d3410f61f56da026de60a98";
const Api = ` https://newsdata.io/api/1/news?apikey=${apiKey}&q=cryptocurrency`;

const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(Api);
        setNewsData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <NewsContext.Provider value={{ newsData }}>{children}</NewsContext.Provider>
  );
};

const UseNewsData = () => useContext(NewsContext);

export { NewsProvider, UseNewsData };
