import { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="mt-5">
            <div className="text-center space-y-2">
                <h2 className="text-xl font-semibold text-orange-500">Service</h2>
                <p className="text-3xl font-bold">Our Service Area</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
                {
                    services.map(service=><ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;