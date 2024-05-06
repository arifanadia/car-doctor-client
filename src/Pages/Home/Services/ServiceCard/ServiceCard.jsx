import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

  const { _id,service_id, title, img, price, description, facility } = service
  return (
    <div className="shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className=" items-center px-10 py-6 ">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="card-actions mt-4 flex justify-between items-center">
          <p className="text-xl text-[#FF3811] font-semibold">Price: ${price}</p>
          <Link to={`/checkOut/${_id}`}>
            <button className=" text-[#FF3811] "><FaArrowRightLong /></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;