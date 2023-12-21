import Cbox from "../cbox/Cbox";




const Review = () => {
  return (
    <div id="review" className="pt-20 pb-5">
      <div>
        <div className="text-center w-2/3 lg:w-1/2 mx-auto">
          <h1 className=" text-4xl md:5xl lg:text-7xl scale-y-125 py-5 font-head font-normal lg:font-thin">
            CUSTOMERS REVIEW
          </h1>
          <p className="text-[#444444]">
            Morbi in sed enim viverra aenean amet. A commodo nunc mauris, in
            accumsan facilisi montes, neque venenatis.
          </p>
        </div>
        
        <Cbox/>
      </div>
    </div>
  );
};

export default Review;
