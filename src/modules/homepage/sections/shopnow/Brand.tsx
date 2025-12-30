import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const brands = [
  { id: 1, src: "versace.svg", alt: "Versace", width: 160, height: 60 },
  { id: 2, src: "zara.svg", alt: "Zara", width: 120, height: 30 },
  { id: 3, src: "gucci.svg", alt: "Gucci", width: 150, height: 30 },
  { id: 4, src: "prada.svg", alt: "Prada", width: 140, height: 50 },
  { id: 5, src: "calvin.svg", alt: "Calvin Klein", width: 180, height: 30 },
];



const Brand = () => {
  return (
    <div className='bg-(--black) py-2 md:py-4'>
         <Marquee speed={60} gradient={false} pauseOnHover>
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="mx-10 flex items-center"
          >
            <Image
              src={`/images/${brand?.src}`}
              alt={brand?.alt}
              width={brand?.width}
              height={brand?.height}
              className="object-contain brightness-0 invert w-auto h-5 lg:h-[30px]"
              priority={false}
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default Brand