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
    <div className="border-1 border-gray-500 rounded-2xl flex flex-col h-29.5 overflow-hidden cursor-pointer"
          onClick={onSelect} style={{ outline: isSelected ? '1px solid blue' : '2px  #6b7280' }}>
        <div className="flex flex-row justify-between pt-2 px-3.5 ">
            <h1 className="font-semibold font-poppins">{data.title}</h1>

            <input type="radio" checked={isSelected}
                                onChange={onSelect}
                                name="card-selection" />
        </div>
        <div className="px-2">
        <div className=' h-13.5 w-[10.625rem] overflow-hidden'>
        <p className="font-poppins text-[0.74rem]/[0.92rem] mx-1 my-0.5 line-clamp-3 text-gray-700">{data.description}</p>
        </div>
        <div className="bg-gray-300 rounded-2xl flex flex-row h-5 pl-2 items-center w-33 bottom-1">
           <img src={money} alt="" className='w-3' />
           <p className='font-poppins text-[0.7rem] pl-1 font-semibold'>from ${data.price} per hour</p>
        </div>
        </div>
    </div>
  )
}

export default JobCard;
//DevOps Engineer, Cybersecurity Analyst, data analyyst, cloud engineer, ui/ux