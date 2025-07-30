

import money from '../assets/svgs/money.svg'

export default function JobCard() {
  return (
    <div className="border-1 border-gray-500 rounded-2xl flex flex-col h-35 overflow-hidden">
        <div className="flex flex-row justify-between pt-2 px-3.5 ">
            <h1 className="font-semibold font-poppins ">Web Developer</h1>
            <input type="radio" name="" id="" />
        </div>
        <div className="px-2">
        <div className='border-1 h-13.5 w-[10.625rem] overflow-hidden'>
        <p className="font-poppins text-[0.74rem]/[0.92rem] mx-1 my-0.5 line-clamp-3 text-gray-700">gvbhnjvgbhjnhvghbjhgvhbhghjb Develop and maintain  web applications, focusing on design, functionality and</p>
        </div>
        <div className="bg-gray-300 rounded-2xl flex flex-row h-5 pl-2 items-center w-33 bottom-1">
           <img src={money} alt="" className='w-3' />
           <p className='font-poppins text-[0.7rem] pl-1 font-semibold'>from $32 per hour</p>
        </div>
        </div>
    </div>
  )
}
//DevOps Engineer, Cybersecurity Analyst, data analyyst, cloud engineer, ui/ux