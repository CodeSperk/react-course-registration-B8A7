import './App.css'
import Cart from './components/cart/Cart';
import Courses from './components/courses/Courses';
import Header from './components/header/Header';

function App() {

  return (
    <div className='max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 bg-slate-50 h-full'>
      <Header/>
      <main className='flex gap-8'>
        <Courses/>
        <Cart/>
      </main>

    
    
    </div>
    )
  }
export default App;
