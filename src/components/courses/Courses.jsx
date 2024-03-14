import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    fetch("./courses.json")
    .then(res => res.json())
    .then(data=> setCourses(data))
  },[])


  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch justify-center">
      {
        courses.map(course => <Course key={course.id} course={course}></Course>)
      }
    </div>
  );
};

export default Courses;