import DishCard from "../dishCard/DishCard";
import { dishData } from "@/app/dishData";

const Popular = () => {
  return (
    <div id="popular">
      <div className="text-center w-2/3 lg:w-1/2 mx-auto">
        <h1 className=" text-4xl md:5xl lg:text-7xl scale-y-125 py-5 font-head font-normal lg:font-thin tracking-tighter">POPULAR DISHES</h1>
        <p className="text-[#444444]">
          Morbi in sed enim viverra aenean amet. A commodo nunc mauris, in
          accumsan facilisi montes, neque venenatis.
        </p>
      </div>
      <div className="py-16 flex flex-wrap justify-center gap-5 items-center">
        {
          dishData.map((dish)=>{
            return <DishCard key={dish.name} name={dish.name} category={dish.category} time={dish.time} image={dish.foodImg} />
          })
        }
      </div>
    </div>
  );
};

export default Popular;
