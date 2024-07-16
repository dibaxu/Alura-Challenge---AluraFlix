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

export default function VideoCard(props) {
  const video = props.video;
  const { title, description, url_video, url_img, category, id } = props.video;
  const { deleteVideo, videos } = props;

  const handleDelete = () => {
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
          Borrar
        </Button>
        <FormEdit videoData={video} />
      </CardFooter>
    </Card>
  );
}
