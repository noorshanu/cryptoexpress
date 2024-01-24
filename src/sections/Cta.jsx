import React from 'react'
import CountUp from 'react-countup';

function Cta() {
  return (
   <section className=' py-8'>
    <div className=' bg-black container-wrapper px-6 py-12 rounded-xl'>
        <div className=' flex justify-evenly items-center flex-col sm:flex-row gap-4'>

            <div className=' text-center'>
                <h1 className='  text-7xl text-white mb-5'><CountUp start={0} end={250} enableScrollSpy={true} delay={0} duration={5} />K+</h1>
                <p className=' text-white text-xl font-sohaReg '>Members </p>
              
            </div>

            <div className=' text-center'>
                <h1 className='  text-7xl text-white mb-5'> <CountUp start={0} end={15} enableScrollSpy={true} delay={0}  />k+</h1>
                <p className=' text-white text-xl font-sohaReg '>Trades </p>
               
            </div>

            <div className=' text-center'>
                <h1 className='  text-7xl text-white mb-5'><CountUp start={0} end={90} enableScrollSpy={true} delay={0}  />%</h1>
                <p className=' text-white text-xl font-sohaReg '>Accuracy </p>
               
            </div>
            <div className=' text-center'>
                <h1 className='  text-7xl text-white mb-5'><CountUp start={0} end={8} enableScrollSpy={true} delay={0} duration={5} />+ </h1>
                <p className=' text-white text-xl font-sohaReg '>Years of experiance </p>
              
            </div>

        </div>

    </div>
   </section>
  )
}

export default Cta