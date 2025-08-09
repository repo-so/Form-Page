import '../zCheckAnimation.css';

export default function SubmitCard() {

    const handleClick = () => {
    window.location.reload();
  };

  return (
        <div className="text-center relative w-full max-w-md flex justify-center  overflow-hidden h-[462px] rounded-3xl">
            <div className='flex flex-col mt-12 '>
                <h1 className='font-poppins text-3xl font-semibold text-black/90 '>Thanks for applying!</h1>

               
                    <div className="flex justify-center items-center my-6">
      <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
    </div>
                
                
                
                <p className='font-poppins text-[0.9rem] text-black/75 mx-6 mt-2'>We’ll make sure to reach out to you in the next few days. If you have any questions, don’t hesitate to contact us. We look forward to connecting soon!</p>

                <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-600 text-white mx-7 mt-23 py-2 rounded-lg cursor-pointer font-poppins '>Back
                </button>
            </div>
        </div>
  )
}
// add text animation on render e arrow svg al back button