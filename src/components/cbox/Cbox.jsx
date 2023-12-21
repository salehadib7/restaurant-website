"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonial from "../testimonial/Testimonial";

const Cbox = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="my-5">
      <Carousel
        swipeable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Testimonial
          name={"Jane cooper"}
          src={"/image/avatar1.png"}
          desc={
            "Morbi nulla nec dui lacus, in. Libero in pretium metus massa. Sodales dignissim vitae mauris varius faucibus. Eleifend dui, non laoreet ac luctus facilisis diam. Enim scelerisque vel at id viverra tellu"
          }
        />

        <Testimonial
          name={"Esther Howard"}
          src={"/image/avatar2.png"}
          desc={
            "Tortor vel nunc netus pharetra enim, enim dolor mauris in. Sit nam fringilla in egestas. Libero condimentum quis in vulputate adipiscing venenatis augue. Venenatis faucibus."
          }
        />

        <Testimonial
          name={"Guy Hawkins"}
          src={"/image/avatar3.png"}
          desc={
            "Sit lacus enim enim donec porttitor quis at consequat. Ut ut et erat nunc quisque ut. Ullamcorper in sit lectus nisi, leo diam volutpat vitae. Amet sed sem cursus facilisi amet suscipit."
          }
        />
      </Carousel>
    </div>
  );
};

export default Cbox;
