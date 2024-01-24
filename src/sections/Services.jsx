import React from "react";

const TeamMemberCard = ({ iconsrc, name,  description }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4  transform 
    transition duration-1000 
    hover:scale-110 cursor-pointer">
      <div className="bg-white p-6 h-full shadow-xl rounded-lg border border-[#67f062]">
        <div className="text-center mb-4">
       <img src={iconsrc} alt="" className=" rounded-xl  h-[80px] w-auto  mx-auto mb-3" />
          <h2 className="text-lg font-semibold">{name}</h2>
     
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

function Services() {
  const teamMembersData = [
    {
      iconsrc: 'images/user.png',
      name: "250K Members",
   
      description:
        "The Crypto express is one of the well reputed and largest community of telegram operating since 2017",
    },
    {
        iconsrc: 'images/chart1.png',
        name: "3400+ Signals Sent",
     
        description:
          "Our traders have been sending signals consistently for a number of years our members are earning profit by following signals on daily basis",
      },
      {
        iconsrc: 'images/hand.png',
        name: "85% Stay With US ",
     
        description:
          "we have almost 90% accuracy and 85% of our members stay with us",
      },
      {
        iconsrc: 'images/tweet.png',
        name: "50k on Twitter",
     
        description:
          "We have a large community of users on twitter where we share market insight on daily basis",
      },
  ];
  return (
    <section className=" bg-white py-8 ">
      <div className=" container-wrapper">
       
        <div className="flex flex-wrap -mx-4">
          {teamMembersData.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
