const URL = "http://localhost:3000/videos";

async function fetchVideos() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log("fetchVideos -> data", data);
    return data;
  } catch (error) {
    console.log("fetchVideos -> error", error);
  }
}

async function videosCategories() {
  const videos = await fetchVideos();
  const categories = videos.map((video) => video.category);
  console.log("videosCategories -> categories", categories);
  return [...new Set(categories)];
}
async function editVideo(video) {
  try {
    const response = await fetch(`${URL}/${video.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(video),
    });
    const data = await response.json();
    console.log("editVideo -> data", data);
    return data;
  } catch (error) {
    console.log("editVideo -> error", error);
  }
}

async function deleteVideo(id) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("deleteVideo -> data", data);

    return data;
  } catch (error) {
    console.log("deleteVideo -> error", error);
  }
}

export { fetchVideos, videosCategories, editVideo, deleteVideo };
