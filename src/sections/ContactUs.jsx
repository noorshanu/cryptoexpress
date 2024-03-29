




function ContactUs() {

  return (
    <section className=" py-12" id="contact">
      <div className=" container-wrapper">
        <div>
          <h1 className=" text-center text-white font-sohaBold text-4xl py-8">
          Contact us
          </h1>
        </div>
     
          <div className=" flex flex-col sm:flex-row gap-6 justify-evenly items-center">
            <div>
            <h1 className=" text-center text-white font-sohaBold text-xl" >Telegram</h1>
            <p className=" text-center text-[#58e969] font-medium text-lg"><a href="https://t.me/thecryptoexpress" target="_blank">The Crypto Express</a></p>
            </div>
            <div>
            <h1 className=" text-center text-white font-sohaBold text-xl" >Mail us</h1>
            <p className=" text-center text-[#58e969] font-medium text-lg"><a href="mailto:contact@thecryptoexpress.io" target="_blank">contact@thecryptoexpress.io</a></p>
            </div>

        
          </div>

        
        </div>
  
    </section>
  );
}

export default ContactUs;
