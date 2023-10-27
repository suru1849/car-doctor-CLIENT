import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="space-y-20 lg:space-y-32">
      <Banner></Banner>
      <About></About>
    </div>
  );
};

export default Home;
