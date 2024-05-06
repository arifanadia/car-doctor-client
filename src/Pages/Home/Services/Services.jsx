import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    console.log(services);

    return (
        <div className="my-36 max-w-7xl mx-auto">
            <div className="text-center">
                <h3 className="text-xl font-bold text-[#FF3811]">Services</h3>
                <h1 className="text-5xl font-bold my-4">Our Services Area</h1>
                <p className="">the majority have suffered alteration in some form, by injected humour, or randomised  <br />words which do not look even slightly believable.  </p>
            </div>
            <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;