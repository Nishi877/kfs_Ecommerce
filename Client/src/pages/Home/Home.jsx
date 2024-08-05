import React, { useEffect } from 'react'
import Logo from '../../components/reusablesUI/Logo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bestsellers from '../Bestsellers';
import { Clients } from '../../constant';
import Testimonial from '../../components/about/Testimonial/Testimonial';



const Home = () => {
 useEffect(() => {
    AOS.init();
  }, [])
 return (
    <>
    <div className='h-[80vh] bg-black/50 hero_section items-center justify-start flex'>
      <div className=" h-[30rem] w-[45rem] ml-4">
        <h1 className='flex items-center  gap-4 text-white text-2xl'>
          <p className='pt-1'>Welome to</p>
         <Logo/>
        </h1>
        <div className="first_head   text-white font-bold capitalize text-[4rem] heading" data-aos="fade-in" >
          <h1>The Ultimate Fitness</h1>
          <h1>Equipment Brand</h1>
        </div>
        <p className='first_head1 text-white pt-2 text-xl'>We are one of the leading Fitness Equipment Brand in India. Head office located in Faridabad.</p>
        {/* button */}

<button class="animated-button">
  <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">Clients</span>
  <span class="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>

      </div>
    </div>
{/* best selling */}
      <div className="bestsellers flex flex-col   gap-12 mt-24 ">
      <div className="border-l-8 border-blue-500 px-2 mx-28  flex justify-between">
       <h1 className='text-[3rem] font-bold'>Best Selling Products</h1>
          <button className='bg-black/90 hover:bg-black/50 px-12 text-white duration-300'>View More</button>
         </div>
        <div className="flex items-center justify-center">
          <Bestsellers/>
        </div>
      </div>
 {/*  secton-unknown */}
<div className="p-24  gap-12 flex flex-col">
  <div className="border-l-8 border-blue-500 px-2">
  <h1 className='text-[3rem] font-bold'>Range Of Products</h1>
  </div>
    <div className="">
    <div className="child-1 flex items-center gap-12 " data-aos="fade-down">
      <div className="image-container ">
        <img
        className='' 
        src="https://energiefitness.in/cdn/shop/files/Cardio_227e805a-28fe-4413-b691-1caf0cb8e892.png?v=1702278684&width=750" alt="" />
      </div>
      <div className="space-y-12">
        <h1 className=' font-bold text-[3rem] Font-oswald'>Cardio</h1>
        <p className='text-xl leading-8 pr-12'>Boost endurance with our cutting-edge cardio machines at Energie Fitness.
           Elevate your fitness journey and achieve your goals with our advanced equipment lineup.
           </p>
        <div className="bg-[#1f1f21] w-fit p-4 text-white">
          <button>Buy Now</button>
        </div>
      </div>
     </div>
     {/* section-2 */}
     <div className="child-2 flex items-center gap-12" data-aos="fade-left">
      <div className="space-y-12">
        <h1 className=' font-bold text-[3rem] Font-oswald'>Strength</h1>
        <p className='text-xl leading-8 pr-12'>Boost endurance with our cutting-edge cardio machines at Energie Fitness.
           Elevate your fitness journey and achieve your goals with our advanced equipment lineup.
           </p>
        <div className="bg-[#1f1f21] w-fit p-4 text-white">
          <button>Buy Now</button>
        </div>
      </div>
      <div className="image-container ">
        <img
        className='' 
        src="https://energiefitness.in/cdn/shop/files/Strength_a90ed0bf-9929-4a27-b324-977c0ba0bfb4.png?v=1702278742&width=750" alt="" />
      </div>
     </div>
     {/* section-3 */}
     <div className="child-3 flex items-center gap-12" data-aos="fade-right">
      <div className="image-container ">
        <img
        className='' 
        src="https://energiefitness.in/cdn/shop/files/Accessories_c338a851-65b7-4d14-bbdf-19cb46080506.png?v=1702278778&width=750" alt="" />
      </div>
      <div className="space-y-12">
        <h1 className=' font-bold text-[3rem] Font-oswald'>Accessories</h1>
        <p className='text-xl leading-8 pr-12'>Boost endurance with our cutting-edge cardio machines at Energie Fitness.
           Elevate your fitness journey and achieve your goals with our advanced equipment lineup.
           </p>
        <div className="bg-[#1f1f21] w-fit p-4 text-white">
          <button>Buy Now</button>
        </div>
      </div>
     </div>
    </div>
   </div>
{/*  secton-unknown-end */}

  {/*facility seting section  */}
  <div className="h-[60vh] bg-zinc-300 flex flex-col  items-center justify-center gap-12">
  <div className="font-bold text-[3rem] Font-oswald flex items-center justify-around   flex-col gap-4">
    <h1>Setting Up Fiteness Facility?</h1>
    <p className='text-xl'>We offer custom solutions to help you set up your fitness facility from start to finish. </p>
  </div>
  <div className="flex flex-col gap-12 w-full justify-around items-center">
    <div className="image">
    </div>
    <div className="">
      <h1 className='Font-oswald'>1.Consult</h1>
      <p>We start with a need analysis to understand your unique and specific requirements & preferences.
     </p>
    </div>
  </div>
 </div>



<Testimonial/>

{/* our clients */}
    <div className="Our clients my-12 flex flex-col gap-12 items-start px-12">
    <div className="border-l-8 border-blue-500 px-2" data-aos="fade-right">
  <h1 className='text-[3rem] font-bold'>Our Clients</h1>
  </div>
      <div className="client-infinite-scroll flex  flex-wrap justify-around ">
          {
            Clients.map((client)=>(
              <div className="flex 
              items-center flex-col m-2 grayscale hover:grayscale-0 duraion-300 hover:scale-105 
               duraton-300 cursor-pointer" key={client.id}>
                <img src={client.imgurl} alt={client.location}   data-aos="zoom-in"  className='h-44'/>
                <span className=' font-bold'>{client.location}</span>
              </div>
            ))
          }

      </div>
  

    </div>
    {/* our client section end */}
    </>
  )
}

export default Home;
