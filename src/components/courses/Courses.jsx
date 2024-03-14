import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/Course";
import PropTypes from 'prop-types'

const Courses = ({handleBookedCourses}) => {
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    fetch("./courses.json")
    .then(res => res.json())
    .then(data=> setCourses(data))
  },[])


  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch justify-center">
      {
        courses.map(course => <Course 
          key={course.id} 
          course={course}
          handleBookedCourses={handleBookedCourses}
          ></Course>)
      }
    </div>
  );
};

Courses.propTypes = {
  handleBookedCourses: PropTypes.func
}

export default Courses;