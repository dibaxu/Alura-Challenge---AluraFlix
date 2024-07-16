import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import FormAddVideo from "./components/FormAddVideo/FormAddVideo";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import CategorySection from "./components/CategorySection/CategorySection";
import { videosCategories } from "./lib/fetch";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const videosFromCategories = await videosCategories();
      setVideos(videosFromCategories);
    };

    fetchVideos();
  }, []);

  return (
    <div className='grid min-h-[100dvh] grid-rows-[auto_1fr_auto]'>
      <Header />
      <main>
        <HomeBanner category='Frontend' />
        {videos.map((category) => (
          <CategorySection key={category} category={category} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
