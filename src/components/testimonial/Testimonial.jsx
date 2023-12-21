import Image from "next/image"

const Testimonial = ({name, src, desc}) => {
  return (
    <div className="mx-auto max-w-[460px] w-[95%] md:w-auto md:h-auto my-16 md:mx-5 border-[1px] rounded-xl border-gray-300 overflow-visible">
        <div className="p-5 relative"> 
            <Image
                src={src}
                height={90}
                width={90}
                alt="avatar"
                className="absolute top-[-50px] left-5 z-[10]"
            />
            <p className="pt-20 pb-5 border-b-[1px] border-gray-300">{desc}</p>
            <div className="flex justify-between items-center pt-3">
            <h4 className="font-medium">{name}</h4>
            <Image
                src="/image/rating.svg"
                width={83}
                height={16}
                alt="rating"
            />
            </div>
        </div>
    </div>
  )
}

export default Testimonial