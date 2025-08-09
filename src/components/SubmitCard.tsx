import thumbsup from '../assets/svgs/like.png'

export default function SubmitCard() {
  return (
        <div className="text-center relative w-full max-w-md flex justify-center  overflow-hidden h-[462px] rounded-3xl">
            <div className='flex flex-col mt-40'>
                <div className='flex justify-center'>
                    <img src={thumbsup} className='w-20' />
                </div>
                
                <h4 className='font-poppins'>We've received your application!</h4>
                <p className='font-poppins'>We will make sure and reach out to you in a few days.</p>

                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer font-poppins'>Back
                </button>
            </div>
        </div>
  )
}
