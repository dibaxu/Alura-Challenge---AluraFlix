import { useEffect, useState } from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import CategorySection from "../components/CategorySection/CategorySection";
import { videosCategories, fetchVideos } from "../lib/fetch";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const videosFromCategories = await videosCategories();
      const videos = await fetchVideos();
      setCategories(videosFromCategories);
      setVideos(videos);
    };

    fetch();
  }, []);
  return (
    <div>
      <HomeBanner video={videos[0]} />
      {categories.map((category) => (
        <CategorySection key={category} category={category} />
      ))}
    </div>
  );
}
