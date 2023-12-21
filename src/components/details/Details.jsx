"use client"
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

const Details = () => {

  const { ref: detailImage, inView: isVisible } = useInView();


  return (
    <div>
      <div className="flex justify-center md:justify-between items-center gap-20 py-12 text-center px-12 flex-wrap md:flex-nowrap">
        <div className=" flex flex-col justify-center gap-20 w-[150px] md:w-[277px] order-2 md:order-1">
          <div>
            <h1 className="text-6xl lg:text-8xl font-thin scale-y-110 pb-3 font-head">14</h1>
            <h4 className=" text-xl lg:text-2xl">Restaurants</h4>
          </div>
          <div>
            <h1 className="text-6xl lg:text-8xl font-thin scale-y-110 pb-3 font-head">20</h1>
            <h4 className="text-xl lg:text-2xl">Chefs in Kitchen</h4>
          </div>
        </div>

        <div ref={detailImage} className="h-auto w-auto lg:h-[632px] lg:w-[500px] order-1 md:order-2">
          <Image 
            src="/image/bigFood.png"
            height={632}
            width={500}
            alt="Big Food"
            className=" object-cover"
            id={isVisible ? "detailImage": ""}
          />
        </div>

        <div className=" flex flex-col justify-center gap-20 w-[150px] md:w-[277px] order-3 md:order-3">
          <div>
            <h1 className="text-6xl lg:text-8xl font-thin scale-y-110 pb-3 font-head">08</h1>
            <h4 className="text-xl lg:text-2xl">Years of Experience</h4>
          </div>
          <div>
            <h1 className="text-6xl lg:text-8xl font-thin scale-y-110 pb-3 font-head">200</h1>
            <h4 className="text-xl lg:text-2xl">Food Dishes</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
