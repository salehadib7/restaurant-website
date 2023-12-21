import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="bg-[#f9fbf2] py-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex-1">
          <div className="w-[90%] mx-auto">
            <h1 className="font-head text-3xl md:text-4xl lg:text-7xl py-2 md:font-medium lg:font-thin tracking-tighter scale-y-125">ABOUT US</h1>
            <h4 className="font-medium text-xl py-3 pb-8">The only thing we’re serious about is food.</h4>
            <p className="font-thin text-xs md:text-base tracking-wider text-[#444444]">
              Fusce quam praesent enim enim. Arcu ornare maecenas mauris tellus
              ut mollis. Laoreet enim amet donec nulla risus erat sed.
              Scelerisque ac cum nulla massa ultricies etiam augue justo, amet.
              Fermentum ac viverra tincidunt neque, tristique duis nunc lacus
              quam. Pharetra, in pharetra
            </p>
            <button id="parrent" className=" w-full md:w-auto flex justify-center gap-6 items-center hover:border-white hover:bg-black border-black border-[1px] py-2 px-4 rounded-3xl mt-10 duration-500">
              <div id="explore" className="font-medium hover:text-white">Explore Menu</div>
              <div id="arrow" className=" flex items-center justify-center rounded-full h-8 w-8 aspect-square bg-black text-white hover:bg-white hover:text-black font-medium">&rarr;</div>
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end pr-4 lg:pr-10">
          <Image
          className="h-auto w-2/3 md:w-3/4 aspect-square"
            src="/image/about.png"
            width={550}
            height={550}
            alt="About Section food Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
