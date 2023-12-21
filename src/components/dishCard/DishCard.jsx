import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const DishCard = ({name, category, time, image}) => {
  return (
    <div className=" relative">
      <div className=" h-[300px] w-[280px] lg:h-[370px] lg:w-[306px] overflow-hidden rounded-xl">
      <Image
        src={image}
        height={370}
        width={306}
        alt="beef burger"
        className="pb-3 hover:scale-110 duration-500 h-[300px] w-[280px] lg:h-[370px] lg:w-[306px]"
      />
      </div>
      <h3 className=" text-xl md:text-2xl font-bold font-head py-1">{name}</h3>
      <p className="relative pl-7 text-[#444444] text-xs md:text-base">
        <FontAwesomeIcon icon={faClock} className="tracking-tighter absolute left-[-15px] top-[23%]"/>
        {time}
      </p>
      <div className="glassEffect absolute top-5 text-white px-5 py-1 rounded-2xl left-4">
        {category}
      </div>
    </div>
  );
};

export default DishCard;
