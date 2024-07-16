"use client";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button } from "@/components/ui/button";
import InputForm from "../InputForm/InputForm";
import SelectForm from "../InputForm/SelectForm";
import TextArea from "../InputForm/TextArea";
import { addVideo } from "@/lib/fetch";

export default function FormAddVideo() {
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);

  function submitVideo(e) {
    e.preventDefault();
    setFormData({ ...formData, id: uuid() });
    console.log("submitting video", formData);
    addVideo(formData);
    cleanForm();
    setSuccess(true);
  }

  function cleanForm() {
    console.log("cleaning form");
    setFormData({});
  }
  const handleCategoryChange = (event) => {
    setFormData({ ...formData, category: event });
    console.log("Categoría seleccionada:", event);
  };

  return (
    <div className='container mx-auto my-6 flex flex-col justify-center items-center gap-6'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold my-2'>Nuevo video</h1>
        <p className='uppercase'>
          Complete el formulario para crear una nueva tarjeta de video
        </p>
      </div>
      <form onSubmit={submitVideo} className='space-y-8 w-full max-w-[768px] '>
        <div className='grid grid-cols-2 gap-3'>
          <InputForm
            label='Titulo'
            type='text'
            required={true}
            placeholder='Ingrese el título del video'
            value={formData.title || ""}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <SelectForm
            label='Categoria'
            required={true}
            placeholder='Seleccione una categoría'
            onValueChange={handleCategoryChange}
          />
          <InputForm
            label='Imagen'
            type='text'
            required={true}
            placeholder='Ingrese URL de la imagen'
            value={formData.url_img || ""}
            onChange={(e) =>
              setFormData({ ...formData, url_img: e.target.value })
            }
          />
          <InputForm
            label='Video'
            type='text'
            required={true}
            placeholder='Ingrese URL del video'
            value={formData.url_video || ""}
            onChange={(e) =>
              setFormData({ ...formData, url_video: e.target.value })
            }
          />
          <TextArea
            label='Descripción'
            required={true}
            placeholder='Descripción del video'
            value={formData.description || ""}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        <div className='flex flex-row-reverse gap-3'>
          <Button type='submit' variant='secondary'>
            Guardar Video
          </Button>
          <Button variant='destructive' type='button' onClick={cleanForm}>
            Limpiar
          </Button>
        </div>
      </form>
      {success && (
        <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative'>
          Video guardado con éxito
        </div>
      )}
    </div>
  );
}
