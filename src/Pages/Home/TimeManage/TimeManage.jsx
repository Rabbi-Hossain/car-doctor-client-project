import { FaBusinessTime } from "react-icons/fa";
import { MdShareLocation, MdWifiCalling } from "react-icons/md";
const TimeManage = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-[250px] lg:grid-cols-3 bg-black text-white mt-40'>
            <div className='flex items-center mx-auto'>
            <FaBusinessTime className="text-3xl " />
                <div className='ml-4'>
                    <p>We are open monday-friday</p>
                    <h2 className="text-lg font-medium">7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex items-center mx-auto'>
            <MdWifiCalling className="text-3xl"/>
                <div className='ml-4'>
                    <p>Have a question?</p>
                    <h2 className="text-lg font-medium">+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex items-center mx-auto'>
            <MdShareLocation className="text-3xl"/>
                <div className='ml-4'>
                    <p>Need a repair? our address</p>
                    <h2 className="text-lg font-medium">Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default TimeManage;