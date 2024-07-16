import { Badge } from "@/components/ui/badge";

export default function HomeBanner(props) {
  const video = props.video || {};
  const { category, title, description, url_video, url_img } = video;
  return (
    <section className='relative flex w-full h-[462px] bg-orange-200 overflow-hidden'>
      <div className='absolute w-full h-[462px] overflow-hidden'>
        <img
          src={url_img}
          alt='Bondo Banner'
          className=' w-full h-auto object-cover object-center'
        />
      </div>
      <div className='relative w-full max-w-[1024px] mx-auto px-4 my-8 flex justify-between items-center z-10'>
        <div>
          <Badge variant='secondary' className='text-2xl' size='lg'>
            {category}
          </Badge>
          <h2 className='text-4xl font-bold my-2'>{title}</h2>
          <p className='text-xl'>{description}</p>
        </div>
        <div className='w-96'>
          {/* Asegúrate de reemplazar "url_del_video" con la URL real del video */}
          {/* <video controls className='max-w-xs'>
            <source src='url_del_video' type='video/mp4' />
            Tu navegador no soporta videos.
          </video> */}

          <iframe
            className=' max-w-lg aspect-video'
            src={url_video}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
