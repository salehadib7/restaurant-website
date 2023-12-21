import Image from "next/image";

const Hero = () => {
  return (
    <div id="bColor" className="h-auto pt-[80px] md:pt-[120px] pb-16">
      <div className=" text-[90px] md:text-[120px] lg:text-[170px] font-head font-thin w-full lg:w-[1020px] mx-auto px-4 relative leading-none">
        {/* top hero */}

        <h1 className=" h-max mb-3">Delicious</h1>

        {/* middle hero */}

        <div className="flex justify-center items-start text-center">
          <h1>Food</h1>
          <Image
            src="/image/foodLine.svg"
            height={29}
            width={33}
            alt="iamge"
          />
        </div>

        {/* right hero  */}

        <div className=" static md:relative text-right">
          <Image
            className="absolute left-4 top-[20%] md:top-[15%] md:left-[35%] h-[90px] w-[80px] md:h-[154px] md:w-[161px]"
            src="/image/lebel.svg"
            height={154}
            width={161}
            alt="Food label"
          />
          <h1>Dishes</h1>
        </div>

        <div className=" overflow-hidden relative left-2 md:bottom-52 lg:bottom-72 h-[300px] w-[240px] lg:h-[330px] lg:w-[260px] bg-pink-200 rounded-lg">
          <Image
            id="pancake"
            className="h-[300px] w-[240px] lg:h-[330px] lg:w-[260px]"
            src="/image/pancake.png"
            height={330}
            width={260}
            alt="pancake"
          />
        </div>

        <div className="hidden md:block absolute right-6 md:top-[-20px] lg:top-0 lg:h-[300px] lg:w-[260px] h-[250px] w-[210px] bg-pink-200 rounded-lg">
          <Image
            id="burger"
            src="/image/burger.png"
            height={300}
            width={260}
            alt="burger"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
