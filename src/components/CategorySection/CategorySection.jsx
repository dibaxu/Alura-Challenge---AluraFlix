import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import VideoCard from "@/components/VideoCard/VideoCard";
import { fetchVideos, deleteVideo } from "@/lib/fetch";

export default function CategorySection(videoData) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideosData = async () => {
      const videosData = await fetchVideos();
      setVideos(videosData);
    };

    fetchVideosData();
  }, []);

  return (
    <section className='container mx-auto my-8 flex flex-col gap-4'>
      {/* Add your badge component here */}
      <Badge variant='secondary' className='text-2xl w-fit' size='lg'>
        {videoData.category}
      </Badge>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {videos.map((video) => {
          console.log("CategorySection -> video", video);
          return (
            video.category === videoData.category && (
              <VideoCard
                key={video.id}
                video={video}
                deleteVideo={deleteVideo}
                videos={videos}
              />
            )
          );
        })}
      </div>
    </section>
  );
}
