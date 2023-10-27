import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel max-h-[600px]">
      {/* img-1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        {/* banner content */}
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className=" text-white w-1/2 md:w-1/3 space-y-1 md:space-y-7 mt-[1%] md:mt-[9%] ml-[3%] md:ml-[7%]">
            <h1 className="text-xl md:text-5xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-sm md:tex-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex flex-col md:flex-row  gap-1 md:gap-5 text-sm md:text-lg font-semibold">
              <button className="btn  bg-[#FF3811] border-none text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/* change button */}
        <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a
            href="#slide6"
            className="btn btn-circle duration-700 hover:btn-error"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle duration-700 hover:btn-error"
          >
            ❯
          </a>
        </div>
      </div>
      {/* img-2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        {/* banner content */}
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className=" text-white w-1/2 md:w-1/3 space-y-1 md:space-y-7 mt-[1%] md:mt-[9%] ml-[3%] md:ml-[7%]">
            <h1 className="text-xl md:text-5xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-sm md:tex-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex flex-col md:flex-row  gap-1 md:gap-5 text-sm md:text-lg font-semibold">
              <button className="btn  bg-[#FF3811] border-none text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/* change button */}
        <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a
            href="#slide1"
            className="btn btn-circle duration-700 hover:btn-error"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle duration-700 hover:btn-error"
          >
            ❯
          </a>
        </div>
      </div>
      {/* img-3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        {/* banner content */}
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className=" text-white w-1/2 md:w-1/3 space-y-1 md:space-y-7 mt-[1%] md:mt-[9%] ml-[3%] md:ml-[7%]">
            <h1 className="text-xl md:text-5xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-sm md:tex-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex flex-col md:flex-row  gap-1 md:gap-5 text-sm md:text-lg font-semibold">
              <button className="btn  bg-[#FF3811] border-none text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/* change button */}
        <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a
            href="#slide2"
            className="btn btn-circle duration-700 hover:btn-error"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle duration-700 hover:btn-error"
          >
            ❯
          </a>
        </div>
      </div>
      {/* img-4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        {/* banner content */}
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className=" text-white w-1/2 md:w-1/3 space-y-1 md:space-y-7 mt-[1%] md:mt-[9%] ml-[3%] md:ml-[7%]">
            <h1 className="text-xl md:text-5xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-sm md:tex-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex flex-col md:flex-row  gap-1 md:gap-5 text-sm md:text-lg font-semibold">
              <button className="btn  bg-[#FF3811] border-none text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/* change button */}
        <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a
            href="#slide3"
            className="btn btn-circle duration-700 hover:btn-error"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle duration-700 hover:btn-error"
          >
            ❯
          </a>
        </div>
      </div>
      {/* img-5 */}
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        {/* banner content */}
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className=" text-white w-1/2 md:w-1/3 space-y-1 md:space-y-7 mt-[1%] md:mt-[9%] ml-[3%] md:ml-[7%]">
            <h1 className="text-xl md:text-5xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-sm md:tex-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex flex-col md:flex-row  gap-1 md:gap-5 text-sm md:text-lg font-semibold">
              <button className="btn  bg-[#FF3811] border-none text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/* change button */}
        <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a
            href="#slide4"
            className="btn btn-circle duration-700 hover:btn-error"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle duration-700 hover:btn-error"
          >
            ❯
          </a>
        </div>
      </div>
      {/* img-6 */}
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />
        {/* banner content */}
        <div className="absolute w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className=" text-white w-1/2 md:w-1/3 space-y-1 md:space-y-7 mt-[1%] md:mt-[9%] ml-[3%] md:ml-[7%]">
            <h1 className="text-xl md:text-5xl lg:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-sm md:tex-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex flex-col md:flex-row  gap-1 md:gap-5 text-sm md:text-lg font-semibold">
              <button className="btn  bg-[#FF3811] border-none text-white">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        {/* change button */}
        <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a
            href="#slide5"
            className="btn btn-circle duration-700 hover:btn-error"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle duration-700 hover:btn-error"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
