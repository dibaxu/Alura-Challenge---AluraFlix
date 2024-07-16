"use client";
import { Button } from "@/components/ui/button";
import InputForm from "../InputForm/InputForm";
import SelectForm from "../InputForm/SelectForm";
import TextArea from "../InputForm/TextArea";
import { cleanForm, submitVideo } from "@/lib/form";

export default function FormAddVideo() {
  // function submitVideo(e) {
  //   e.preventDefault();
  //   console.log("submitting video", e);

  //   const form = e.target;
  //   const formData = new FormData(form);
  //   const data = Object.fromEntries(formData.entries());
  //   console.log("data", data);
  // }
  // function cleanForm() {
  //   console.log("cleaning form");
  // }
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
          />
          <SelectForm
            label='Categoria'
            required={true}
            placeholder='Seleccione una categoría'
          />
          <InputForm
            label='Imagen'
            type='text'
            required={true}
            placeholder='Ingrese URL de la imagen'
          />
          <InputForm
            label='Video'
            type='text'
            required={true}
            placeholder='Ingrese URL del video'
          />
          <TextArea
            label='Descripción'
            required={true}
            placeholder='Descripción del video'
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
    </div>
  );
}
