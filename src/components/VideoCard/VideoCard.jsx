"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FormEdit from "../FormEditVideo/FormEdit";
import { deleteVideo } from "@/lib/fetch";

export default function VideoCard({ videoData }) {
  // const [isEditing, setIsEditing] = useState(false);

  // function handleEdit() {
  //   setIsEditing(!isEditing);
  //   console.log(isEditing);
  // }
  const { title, description, url_video, url_img, category, id } = videoData;

  const handleDelete = () => {
    console.log("borrando video");
    deleteVideo(id);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <iframe
          className='w-full h-auto'
          src={url_video}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='destructive' onClick={handleDelete}>
          {" "}
          Borrar{" "}
        </Button>
        <FormEdit videoData={videoData} />
      </CardFooter>
    </Card>
  );
}
