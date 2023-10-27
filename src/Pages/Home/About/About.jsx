import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen border-2 border-orange-400 rounded-xl">
        <div className="hero-content flex-col-reverse lg:flex-row py-0">
          <div className="lg:w-1/2 relative pb-36 lg:pb-0">
            <div className="w-[80%] ">
              <img src={person} className=" rounded-lg " />
            </div>
            <div className="absolute w-1/2 top-[30%] md:top-[40%] lg:top-[55%] left-[40%]">
              <img src={parts} className="border-4 border-white rounded-lg" />
            </div>
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h4 className="text-xl text-[#FF3811] font-bold pt-2">About Us</h4>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn bg-[#FF3811] border-none text-white">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
