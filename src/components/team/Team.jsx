import Image from "next/image";

const Team = () => {
  return (
    <div id="team" className="py-14">
      <div className="text-center w-2/3 lg:w-1/2 mx-auto">
        <h1 className=" text-4xl md:5xl lg:text-7xl scale-y-125 py-5 font-head font-normal lg:font-thin">
          OUR TEAM
        </h1>
        <p className="text-[#444444]">
          Morbi in sed enim viverra aenean amet. A commodo nunc mauris, in
          accumsan facilisi montes, neque venenatis.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-24 py-14">
        <div className=" text-center">
          <div className="overflow-hidden">
            <Image
              src="/image/chef1.png"
              height={220}
              width={220}
              alt="beef burger"
              className="pb-3 rounded-full"
            />
          </div>
          <h3 className=" text-xl md:text-2xl font-bold font-head py-1">
          JOHNATHAN TYLER
          </h3>
          <p className="relative text-[#444444] text-xs md:text-base">
          Founder & Head Chef
          </p>
        </div>


        <div className=" text-center">
          <div className="overflow-hidden">
            <Image
              src="/image/chef2.png"
              height={220}
              width={220}
              alt="beef burger"
              className="pb-3 rounded-full"
            />
          </div>
          <h3 className=" text-xl md:text-2xl font-bold font-head py-1">
          WADE WARREN
          </h3>
          <p className="relative text-[#444444] text-xs md:text-base">
          Sous Chef
          </p>
        </div>


        <div className=" text-center">
          <div className="overflow-hidden">
            <Image
              src="/image/chef3.png"
              height={220}
              width={220}
              alt="beef burger"
              className="pb-3 rounded-full"
            />
          </div>
          <h3 className=" text-xl md:text-2xl font-bold font-head py-1">
          JOHNATHAN TYLER
          </h3>
          <p className="relative text-[#444444] text-xs md:text-base">
          Line Cooks
          </p>
        </div>


        <div className=" text-center">
          <div className="overflow-hidden">
            <Image
              src="/image/chef4.png"
              height={220}
              width={220}
              alt="beef burger"
              className="pb-3 rounded-full"
            />
          </div>
          <h3 className=" text-xl md:text-2xl font-bold font-head py-1">
          JOHNATHAN HITMAN
          </h3>
          <p className="relative text-[#444444] text-xs md:text-base">
          Prep Cooks
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
