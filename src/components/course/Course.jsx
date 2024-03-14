import PropTypes from "prop-types";
import { FiDollarSign, FiBookOpen } from "react-icons/fi";

const Course = ({ course }) => {
  const { name, photo, description, price, credit } = course;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl max-w-96">
        <figure className="px-6 pt-6">
          <img
            src={photo}
            alt={name}
            className="rounded-xl w-full"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="mb-4 flex gap-4 justify-between lg:flex-col">
            <div className="flex items-center gap-2">
            <FiDollarSign className="text-[#1C1B1B] w-6 hover:text-blue-500 md:text-2xl"/>
            <p>Price : {price}</p>
            </div>
            <div className="flex items-center gap-2">
            <FiBookOpen  className="text-[#1C1B1B] md:text-2xl hover:text-blue-500"/>
            <p>Credit : {credit}hr</p>
            </div>
          </div>

          <div className="card-actions">
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.array,
};

export default Course;
