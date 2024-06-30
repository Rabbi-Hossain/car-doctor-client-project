
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const MeetTeamCard = ({ meetTeam }) => {
    return (
        <div className="card w-96 bg-base-100 border">
            <figure className="px-10 pt-10">
                <img src={meetTeam.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{meetTeam.title}</h2>
                <div className="flex space-x-3 mt-3 text-white ">
                    <FaFacebookF className="bg-blue-700 rounded-full text-3xl p-2" />
                    <FaTwitter  className="bg-blue-500 p-2 rounded-full text-3xl "/>
                    <FaLinkedin  className="bg-blue-800 p-2 rounded-full text-3xl "/>
                    <FaInstagram className="bg-red-300 p-2 rounded-full text-3xl "/>
                </div>
            </div>
        </div>
    );
};

export default MeetTeamCard;