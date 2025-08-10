import '../zCheckAnimation.css';
import arrow from '../assets/svgs/arrow.svg'
export default function SubmitCard() {

    const handleRefresh = () => {
    window.location.reload();
    }

  return (
        <div className="text-center relative w-full max-w-md flex justify-center  overflow-hidden h-[462px] rounded-3xl">
            <div className='flex flex-col mt-12 '>
                <h1 className={`font-poppins text-3xl font-semibold text-black/90 
                              h1_translate`}>Thanks for applying!</h1>

               
                    <div className="flex justify-center items-center my-7">
      <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
    </div>
                
                
                
                <p className='p_translate font-poppins text-[0.9rem] text-black/75 mx-6 mt-3'>We’ll make sure to reach out to you in the next few days. If you have any questions, don’t hesitate to contact us. We look forward to connecting soon!</p>

                <button onClick={handleRefresh} className='btn_opacity group bg-blue-500 hover:bg-blue-600 text-white mx-6 mt-20 pr-1.5 h-11 rounded-lg cursor-pointer font-poppins flex justify-center items-center  transition-all duration-300 ease-in-out'>
                <img src={arrow} className='w-5 rotate-180 invert transform transition-all duration-300 ease-in-out group-hover:rotate-270'/>Back
                </button>
            </div>
        </div>
  )
}
// add text animation on render e arrow svg al back button