import React from 'react'

function About() {
  return (
    <section className='about my-2 sm:my-16 py-1 sm:py-8 bg-white'>
    <div className='container-wrapper'>
    <div className=" flex flex-col-reverse sm:flex-row justify-between gap-4 items-center ">
         <div className=" max-w-lg w-full">
      
         <div className=' flex justify-center  items-center'>
          <img src="images/tce-img.png" alt="" />
        

         </div>
   
         </div>

          <div className=' mb-2'>
          

            <h2 className=" font-sohaBold text-3xl sm:text-5xl py-2 mb-2 text-[#3da142] lh-1_3">About  TheCryptoExpress  Token</h2>

            <p className=" max-w-5xl font-sohaReg text-lg">
              TheCryptoExpress is a secure and fast point of sale for physical stores
              and online shops that <br />accepts Ethereum and many other coins and
              instantly converts them to Dai <br /> stablecoin so you don’t have to
              worry about volatility. CONTACT US
            </p>
            <div className=" mt-8 flex items-center gap-6 ">
                <a
                  href="https://t.me/thecryptoexpress" target="_blank"
                  className="btn-grad flex items-center gap-2 w-48 text-white  justify-center font-bold py-3 text-base "
                >
                  {" "}
                  Whitepaper
                </a>
                <a
                  href="https://t.me/thecryptoexpress" target="_blank"
                  className="btn-grad flex items-center gap-2 w-48 text-white  justify-center font-bold py-3 text-base "
                >
                  {" "}
                  Buy Now
                </a>
              </div>
      
          </div>
        </div>

    </div>
</section>
  )
}

export default About