import { Badge } from "@/components/ui/badge";

export default function HomeBanner(props) {
  return (
    <section className='relative flex w-full h-[462px] bg-orange-200 overflow-hidden'>
      <div className='absolute w-full h-[462px] overflow-hidden'>
        <img
          src='/1669559000581 1.png'
          alt='Bondo Banner'
          className=' w-full h-auto object-cover object-center'
        />
      </div>
      <div className='relative w-full max-w-[1024px] mx-auto px-4 my-8 flex justify-between items-center z-10'>
        <div>
          <Badge variant='secondary' className='text-2xl' size='lg'>
            {props.category}
          </Badge>
          <h2 className='text-4xl font-bold my-2'>Título del Banner</h2>
          <p className='text-xl'>
            Esta es una descripción del banner, explicando su propósito o
            contenido.
          </p>
        </div>
        <div>
          {/* Asegúrate de reemplazar "url_del_video" con la URL real del video */}
          <video controls className='max-w-xs'>
            <source src='url_del_video' type='video/mp4' />
            Tu navegador no soporta videos.
          </video>
          {/* O si es un video de YouTube o similar, usa un iframe
          <iframe
            className='max-w-xs'
            src="url_del_video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          */}
        </div>
      </div>
    </section>
  );
}
