import React from 'react'
import CountUp from 'react-countup';

function Cta() {
  return (
   <section className=' py-8'>
    <div className=' bg-black container-wrapper px-6 py-12 rounded-xl'>
        <div className=' flex justify-evenly items-center flex-col sm:flex-row gap-4'>

            <div className=' text-center'>
                <h1 className='  text-7xl text-white mb-5'><CountUp end={100} />K+</h1>
                <p className=' text-white text-xl font-sohaReg '>Learing from us </p>
              
            </div>

            <div className=' text-center'>
                <h1 className='  text-7xl text-white mb-5'> <CountUp end={10} />k+</h1>
                <p className=' text-white text-xl font-sohaReg '>Trades </p>
               
            </div>

            <div className=' text-center'>
                <h1 className='  text-7xl text-white mb-5'><CountUp end={100} />%</h1>
                <p className=' text-white text-xl font-sohaReg '>Accuracy </p>
               
            </div>
            <div className=' text-center'>
                <h1 className='  text-7xl text-white mb-5'><CountUp end={7} />+ </h1>
                <p className=' text-white text-xl font-sohaReg '>Years of experiance </p>
              
            </div>

        </div>

    </div>
   </section>
  )
}

export default Cta