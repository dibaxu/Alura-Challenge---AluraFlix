import { editVideo } from "./fetch.js";

function saveChanges(videoData) {
  console.log("saving changes", videoData);
  editVideo(videoData);
}

function submitVideo(e) {
  e.preventDefault();
  console.log("submitting video", e);

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log("data", data);
}

export { submitVideo, saveChanges };
