import money from '../assets/svgs/money.svg'

type CardProps = {
  data: {
    id: string;
    title: string;
    description: string;
    price: number;
  };
  isSelected: boolean;
  onSelect: () => void;
};

const JobCard: React.FC<CardProps> = ({ data, isSelected, onSelect }) => {
  return (
    <div onClick={onSelect}  className={` rounded-2xl flex flex-col h-30 overflow-hidden cursor-pointer transition duration-300 ${
    isSelected ? 'outline-blue-500 outline-3' : 'outline-gray-500 outline-1'
  }`}
          >
        <div className="flex flex-row justify-between pt-2 px-3.5 ">
            <h1 className="font-semibold font-poppins">{data.title}</h1>

            <input type="radio" checked={isSelected}
                                onChange={onSelect}
            className="accent-blue-600"  name="card-selection" />
        </div>
        <div className="px-2">
        <div className=' h-13.5 w-[10.625rem] overflow-hidden'>
        <p className="font-poppins text-[0.74rem]/[0.92rem] mx-1 mt-1 mb-2 line-clamp-3 text-gray-700">{data.description}</p>
        </div>
        <div className="bg-gray-300 rounded-2xl flex flex-row h-5 pl-2 items-center w-33 mt-1">
           <img src={money} alt="" className='w-3' />
           <p className='font-poppins text-[0.7rem] pl-1 font-semibold'>from ${data.price} per hour</p>
        </div>
        </div>
    </div>
  )
}

export default JobCard;
//DevOps Engineer, Cybersecurity Analyst, data analyyst, cloud engineer, ui/ux