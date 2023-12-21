import Image from "next/image";

const Reservation = () => {
  return (
    <div id="reservation" className="bColorReverse h-full md:h-screen pl-2 lg:pl-10 pb-10 md:pb-0 flex justify-center">
      <div className="flex items-center flex-col md:flex-row md:gap-5 lg:gap-16">
        <div className="h-auto md:w-auto w-[90%] min-w-[330px] max-w-[586px] flex items-center justify-center flex-1">
          <Image
            src="/image/reservationFood.png"
            height={417}
            width={586}
            alt="reservationFood"
            className="object-fit h-auto md:w-auto w-[90%]"
          />
        </div>

        <div className="h-auto w-auto md:max-w-[492px] pr-0 md:pr-2 lg:pr-10">
          <div className=" bg-white border-grey-500 border-[1px] px-[20px] py-[10px] md:px-[10px] md:py-[15px] lg:px-[50px] lg:py-[30px] rounded-xl w-[90%] md:w-full mx-auto">
            <div className="text-center mx-auto pb-5">
              <h1 className=" text-3xl md:text-4xl scale-y-125 py-5 font-head md:tracking-wider">
                MAKE A RESERVATION
              </h1>
              <p className="text-[#444444] md:tracking-wider text-lg">
                For Further Questions, Please Call
              </p>
            </div>

            <form className="w-[90%] mx-auto">
              <div className="flex justify-center gap-2 py-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className=" w-[98%] focus:border-blue-400 outline-none border-b-[1px] placeholder-gray-500 py-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-[98%] focus:border-blue-400 outline-none border-b-[1px] placeholder-gray-500 py-2"
                />
              </div>

              <div className="flex justify-center gap-2 py-4">
                <input
                  type="text"
                  placeholder="Date"
                  className="w-[98%] focus:border-blue-400 outline-none border-b-[1px] placeholder-gray-500 py-2"
                />
                <input
                  type="text"
                  placeholder="Time"
                  className="w-[98%] focus:border-blue-400 outline-none border-b-[1px] placeholder-gray-500 py-2"
                />
              </div>

              <div className=" py-4 ">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full focus:border-blue-400 outline-none border-b-[1px] placeholder-gray-500 py-2"
                />
              </div>

              <div className=" py-4 ">
                <input
                  type="email"
                  placeholder="Phone No"
                  className="w-full focus:border-blue-400 outline-none border-b-[1px] placeholder-gray-500 py-2"
                />
              </div>

              <button
                type="submit"
                id="parrent"
                className=" w-full md:w-auto flex justify-center gap-6 items-center hover:border-white hover:bg-black border-black border-[1px] py-2 px-4 rounded-3xl mt-10 duration-500 mx-auto"
              >
                <div id="explore" className="font-medium hover:text-white">
                  Reserve Now
                </div>
                <div
                  id="arrow"
                  className=" flex items-center justify-center rounded-full h-8 w-8 aspect-square bg-black text-white hover:bg-white hover:text-black font-medium"
                >
                  &rarr;
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
