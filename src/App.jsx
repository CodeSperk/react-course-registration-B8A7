import { useState } from 'react';
import './App.css'
import Cart from './components/cart/Cart';
import Courses from './components/courses/Courses';
import Header from './components/header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const totalCredit = 20;
const exists = () => toast.info("Already Selected");
const insufficientCredit = () => toast.warn("Insufficient Credit");

function App() {
  const [bookedCourses, setBookedCourses] = useState([]);

  const handleBookedCourses = (course) => {
    // for existed courses & insufficient credits
    const isAlreadyExist = bookedCourses.find(bookedCourse=> bookedCourse.id === course.id);
    const credits = bookedCourses.reduce((p,c)=>p+c.credit,0);

    if(isAlreadyExist){
      return exists();
    }else if(credits + course.credit > totalCredit){
      return insufficientCredit();
    }else{
      const newMarkedCourses = [...bookedCourses, course];
      setBookedCourses(newMarkedCourses);
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

    
    
      <ToastContainer />
    </div>
    )
  }
export default App;
