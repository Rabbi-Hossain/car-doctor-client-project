import { useEffect, useState } from "react";
import MeetTeamCard from "../MeetTeamCard/MeetTeamCard";

const MeetTeam = () => {

    const [meetTeams, setMeetTeams] = useState([])
    useEffect(()=>{
        fetch('MeetTeam.json')
        .then(res=>res.json())
        .then(data=>setMeetTeams(data))
    },[])

    return (
        <div className="mt-10">
            <div className="text-center">
                <h2 className="text-2xl font-medium text-orange-500">Team</h2>
                <h3 className="text-3xl font-bold">Meet Our Team</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 lg:grid-cols-3 gap-4">
                {
                    meetTeams.map(meetTeam=><MeetTeamCard key={meetTeam._id}  meetTeam={meetTeam}></MeetTeamCard>)
                }
            </div>
        </div>
    );
};

export default MeetTeam;