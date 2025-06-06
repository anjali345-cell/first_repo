import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[288px] p-5 bg-yellow-400 rounded-xl'>
    <div className='flex justify-between items-center'>
       <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.title}</h3>
       <h4 className='text-sm'>{data.taskDate}</h4>
    </div>
      <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-2'>
           {data.description}
      </p>
      <div className='mt-2'>
           <button className='w-full'>Completed</button>
     </div>
  </div>
  )
}

export default CompleteTask