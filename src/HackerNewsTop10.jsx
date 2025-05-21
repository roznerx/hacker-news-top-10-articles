import { useEffect, useState } from "react";
import { getStory, getTopArticles } from "./api/articles";
import "./HackerNewsTop10.css";

const HackerNewsTop10 = () => {
  const [storiesData, setStoriesData] = useState([]);

  useEffect(() => {
    async function fetchStories() {
      try {
        const ids = await getTopArticles();
        const topStories = await Promise.all(
          ids.slice(0, 10).map((id) => getStory(id))
        );

        setStoriesData(topStories); 
      } catch (error) {
        console.error(
          'Failed to fetch top articles:', error.message
        );
      }
    }

    fetchStories();
  }, []);

  return (
    <div>
      <h1>Hacker News - Top 10 Articles</h1>
      <div>
        {
          !storiesData.length ?
          <h3>Loading stories, please wait...</h3> :
          <ul>
            {
              storiesData.map((s) => {
                return (
                  <li key={s.id}>
                    <h3>
                      <a href={`${s.url}`}>
                        {`${s.title}`}
                      </a>
                    </h3>
                    <h3 className="info">
                      {`${s.score} by `} <b>{s.by}</b>
                    </h3>
                  </li>
                )
              })
            }
          </ul>
        }
      </div>
    </div>
  );
};

export default HackerNewsTop10;
