import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#f9fbf2] pt-14  tracking-wide">
      <div className="flex justify-center items-center">
        <div className=" w-[95%] pb-10 flex justify-between items-center  border-gray-500 border-b-[1px]">
          <Image
            className=" h-[28px] w-[73px] lg:h-[31px] lg:w-[79px] z-[10]"
            src="/image/logo.svg"
            height={31}
            width={79}
            alt="logo"
          />

          <div className="text-right text-[#444444] text-xs md:text-base">
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p>Open : 09:00 Am - 01:00 PM</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-[95%] mx-auto text-[#444444] py-5">
        <div className="flex items-center justify-center gap-2 p-2">
            <h4>Built by <span className="font-medium">Saleh Adib</span> </h4>
            <h4> · Powered by Next JS</h4>
        </div>
        <div className="flex items-center justify-center gap-8 cursor-pointer">
            <h4>Facebook</h4>
            <h4>Gmail</h4>
            <h4>Youtube</h4>
            <h4>Twitter</h4>
            <h4>Github</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
