import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputForm from "../InputForm/InputForm";
import SelectForm from "../InputForm/SelectForm";
import TextArea from "../InputForm/TextArea";

import { saveChanges } from "@/lib/form";
import { DialogClose } from "@radix-ui/react-dialog";

export default function FormEdit({ videoData }) {
  // const { title, description, url_video, url_img, category } = videoData;
  const id = videoData.id;
  const [urlImg, setUrlImg] = useState(videoData.url_img);
  const [urlVideo, setUrlVideo] = useState(videoData.url_video);
  const [description, setDescription] = useState(videoData.description);
  const [category, setCategory] = useState(videoData.category);
  const [title, setTitle] = useState(videoData.title);
  // Paso 3: Definir funciones onChange
  const handleUrlImgChange = (event) => {
    setUrlImg(event.target.value);
    console.log(urlImg);
  };
  const handleUrlVideoChange = (event) => {
    setUrlVideo(event.target.value);
    console.log(urlVideo);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    console.log(description);
  };
  const handleCategoryChange = (event) => {
    setCategory(event);
    console.log(category);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };
  const handleEdit = () => {
    const videoData = {
      id,
      title,
      description,
      url_video: urlVideo,
      url_img: urlImg,
      category,
    };
    saveChanges(videoData);
  };

  function cleanForm() {
    console.log("cleaning form");
    setUrlImg("");
    setUrlVideo("");
    setDescription("");
    setCategory("");
    setTitle("");
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button> Editar </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Datos</DialogTitle>
          <DialogDescription>
            Aquí puedes editar los datos de la tarjeta
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <InputForm
            label='Titulo'
            type='text'
            required={true}
            placeholder='Ingrese el título del video'
            className='col-span-3'
            value={title}
            onChange={handleTitleChange}
          />
          <SelectForm
            label='Categoria'
            required={true}
            placeholder='Seleccione una categoría'
            value={category}
            onValueChange={handleCategoryChange}
          />
          <InputForm
            label='Imagen'
            type='text'
            required={true}
            placeholder='Ingrese URL de la imagen'
            value={urlImg}
            onChange={handleUrlImgChange}
          />

          <InputForm
            label='Video'
            type='text'
            required={true}
            placeholder='Ingrese URL del video'
            value={urlVideo}
            onChange={handleUrlVideoChange}
          />
          <TextArea
            label='Descripción'
            required={true}
            placeholder='Descripción del video'
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type='button' onClick={handleEdit}>
              Guardar Cambios
            </Button>
          </DialogClose>

          <Button variant='destructive' type='button' onClick={cleanForm}>
            Limpiar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
