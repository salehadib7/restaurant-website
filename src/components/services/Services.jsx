import Image from "next/image";
import Popular from "../popular/Popular";
import Details from "../details/Details";

const Services = () => {
  return (
    <>
      <div id="services" className="px-10 py-12 lg:py-24">
        <div className="flex justify-between items-center flex-col lg:flex-row gap-10 lg:gap-0">
          <div className="flex-1">
            <div className="flex flex-col justify-center items-center mx-auto text-center w-[60%] lg:w-[80%]">
              <Image
                className="py-5"
                src="/image/qualityfood.svg"
                height={100}
                width={100}
                alt="quality food"
              />
              <h3 className="text-2xl font-head font-semibold scale-y-125 pb-4">
                QUALITY FOOD
              </h3>
              <p className="text-[#444444]">
                Cras faucibus sodales velit viverra donec commodo volutpat. At
                integer quam fusce sit.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col justify-center items-center mx-auto text-center w-[60%] lg:w-[80%]">
              <Image
                className="py-5"
                src="/image/superTaste.svg"
                height={100}
                width={100}
                alt="quality food"
              />
              <h3 className="text-2xl font-head font-semibold scale-y-125 pb-4">
                SUPER TASTE
              </h3>
              <p className="text-[#444444]">
                Ipsum tempus sed sit tincidunt sed adipiscing semper natoque.
                Est id praesent libero egestas.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col justify-center items-center mx-auto text-center w-[60%] lg:w-[80%]">
              <Image
                className="py-5"
                src="/image/delivery.svg"
                height={100}
                width={100}
                alt="quality food"
              />
              <h3 className="text-2xl font-head font-semibold scale-y-125 pb-4">
                FAST DELIVERY
              </h3>
              <p className="text-[#444444]">
                At porttitor varius elementum pretium. Felis, eget sed ipsum sed
                cursus ipsum blandit tortor praesent.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Popular />
      <Details/>
    </>
  );
};

export default Services;
