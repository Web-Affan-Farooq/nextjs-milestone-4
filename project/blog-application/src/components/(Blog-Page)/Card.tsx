import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Card {
    id?:string; // ----> required
    image:string;
    title:string;
    dateCreated?:string;// ----> required
    className?:string;
}
const Card = ({image, title, dateCreated,id ,className}:Card) => {
  return (
    <div className={`p-4 flex flex-col gap-3 flex-nowrap border-2 border-solid border-black w-[300px] rounded-lg overflow-x-hidden max-sm:w-[250px] max-[510px]:w-[95vw] ${className}`}>
      <Image src={image} alt={title} width={200} height={200} className='w-[90%] m-auto '/>
      <h1 className='font-bold text-[18px]'>{title}</h1>
      <Link href={`/blogs/${id}`}>
      <button type="button" className='rounded-md bg-black text-white px-[20px] py-[8px] font-bold'>Read</button>
      </Link>
    </div>
  )
}

export default Card