import React from 'react'
import Welcome from './Components/Welcome'

const App = () => {
  return (
  <>
<div className='min-h-screen p-6 ' >
   <h1 className='text-3xl font-bold text-center text-blue-600 mb-6 ' >Team Memebers List App</h1>
   <div>
    {/* profile card for team members*/}
    <div className='bg-white shadow-md rounded-lg p-4 border border-gray-200' >
      <img  className='w-32 h-32 rounded-full mx-auto mb-4 object-cover' src="https://randomuser.me/api/portraits/men/77.jpg" alt="" />
    </div>
   </div>
</div>
    </>
  )
}

export default App