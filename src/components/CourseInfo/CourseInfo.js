import React from 'react'
import ResetStorage from '../ResetStorage/ResetStorage';

function CourseInfo({courseDetails, resetHandle}) {
    const {course, remaininghours, hours, totalPrice} = courseDetails;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
            <h3 className='text-lg text-[#2f80ed] font-bold mb-4'>Credit Hour Remaining {remaininghours} hr</h3>
            <hr className='text-[#1c1b1b] h-[2px] mb-5'/>
            <h2 className='text-xl font-bold mb-6'>Course Name</h2>
            <ol className='list-decimal list-inside pb-4'>
            {
                course.map((title, idx) => 
                
                    <li key={idx} className='text-[#1d1c1c]'>{title.title}</li>
                )
            }
            </ol>
            <hr className='text-[#1c1b1b] h-[2px]'/>
            <h3 className='text-lg text-[#1d1c1c] py-4'>Total Credit Hour : {hours > 0 ? hours : 0}</h3>
            <hr className='text-[#1c1b1b] h-[2px]'/>
            <h3 className='pt-4 text-lg text-[#1d1c1c] font-bold'>Total Price : {totalPrice ?  totalPrice : '00.0'} USD</h3>
            <ResetStorage resetHandle={resetHandle}/>
        </div>
  )
}

export default CourseInfo
