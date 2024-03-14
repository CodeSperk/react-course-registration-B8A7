import { useState } from 'react';
import './App.css'
import Cart from './components/cart/Cart';
import Courses from './components/courses/Courses';
import Header from './components/header/Header';

const totalCredit = 20;

function App() {
  const [bookedCourses, setBookedCourses] = useState([]);

  const handleBookedCourses = (course) => {
    // for existed course
    const isAlreadyExist = bookedCourses.find(bookedCourse=> bookedCourse.id === course.id);

    if(!isAlreadyExist){
      const newMarkedCourses = [...bookedCourses, course];
      setBookedCourses(newMarkedCourses);
    }else {
      return alert("Already Exist");
    }
      // alert if total credit > 20
      const credits = bookedCourses.reduce((p,c)=>p+c.credit,0);
      if(credits + course.credit > totalCredit){
        return alert("insufficient credits");
      }
  
  }

  return (
    <div className='max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 bg-slate-50 h-full pb-12'>
      <Header/>
      <main className='flex flex-col md:flex-row gap-8 items-start'>
        <Courses handleBookedCourses={handleBookedCourses}/>
        <Cart
          bookedCourses={bookedCourses}
        />
      </main>

    
    
    </div>
    )
  }
export default App;
