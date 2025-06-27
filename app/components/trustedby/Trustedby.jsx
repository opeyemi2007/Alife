import React from 'react'
import Image from 'next/image'
import image1 from '../../../public/kora-ogo.svg'
import image2 from '../../../public/sponsors1.png'
import image3 from '../../../public/sponsors2.png'
import image4 from '../../../public/sponsors5.png'

const Trustedby = () => {
  return (
    <div className='w-full h-max flex flex-col items-center'>
      <h1 className="w-[100%] text-[30px] text-center text-bold font-inter text-black">Trusted By</h1>
      <div className="w-[60%] bg-green flex justify-between">
        <Image
        src={image1}
        alt="Kora logo"
        className="filter grayscale hover:grayscale-0 transition duration-300"
        />
        <Image
        src={image2}
        alt="Red Cross"
        className="filter grayscale hover:grayscale-0 transition duration-300"
        />
        <Image
        src={image3}
        alt="Kora logo"
        className="filter grayscale hover:grayscale-0 transition duration-300"
        />
        <Image
        src={image4}
        alt="Kora logo"
        className="filter grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    </div>
  )
}

export default Trustedby