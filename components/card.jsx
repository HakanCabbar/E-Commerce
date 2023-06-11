import Image from "next/image"

import icon from '../images/heart-icon.png'
import stars from '../images/stars.png'
function Card(props){
    return(
        <div className=" w-2/5 lg:w-1/5  h-60 lg:h-72 border border-solid border-[#B5B5B5] rounded-[20px] flex-col  flex-wrap  relative space-x-2 cursor-pointer  ">
        <Image src={props.imagesrc} className="lg:w-32 w-28 lg:h-24 h-24 m-auto lg:my-6 my-0" />
        <Image src={icon} className="w-6 h-6 absolute lg:right-4 right-1 top-8 " />

        <span className="text-[#003F62] font-medium ">{props.title}</span>
        <br/>
        <span className='text-[#4A4A4A] font-semibold text-lg w-full  block my-6'>$11,70</span>
        <Image src={stars} className ='w-24 h-4 mr-48'/>
      </div>
    )
}

export default Card