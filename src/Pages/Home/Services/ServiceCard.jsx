import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({ service }) => {
  const { img, price, title } = service || {};
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <button className="btn bg-[#FF3811] text-white">
            Read More <AiOutlineArrowRight></AiOutlineArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
