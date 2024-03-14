import PropTypes from 'prop-types';


const Cart = ({bookedCourses}) => {
  const remainingCreditHr = bookedCourses.reduce((p,c) =>p-c.credit,20);
  let totalCreditHr = bookedCourses.reduce((p,c)=>p+c.credit,0);
  let totalPrice = bookedCourses.reduce((p,c)=>p+c.price,0);

 console.log(bookedCourses);
  return (
    <div className="w-full md:w-2/5 lg:w-1/4 bg-white p-6 rounded-xl">
      <h4 className="text-blue-500 border-b-2 pb-4 mb-4 ">Credit Hour Remaining {remainingCreditHr} hr</h4>
      <h4>Course Name</h4>
      <ol className="my-5">
        {
          bookedCourses.map((bookedCourse, idx) => <li key={idx}>{bookedCourse.name}</li>)
        }
      </ol>

      <h5 className="border-y-2 py-3">Total Credit Hour used: {totalCreditHr}</h5>
       <h4 className="mt-4">Total Price : {totalPrice} USD</h4>      
    </div>
  );
};

Cart.propTypes={
  bookedCourses: PropTypes.array
}

export default Cart;