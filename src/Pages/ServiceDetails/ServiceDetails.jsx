import bgImg from "../../assets/images/banner/4.jpg"

const ServiceDetails = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="p-40 rounded-xl mt-14 bg-no-repeat bg-center bg-cover"
             style={{backgroundImage : `linear-gradient(#151515FF ,#15151500), url(${bgImg})`}}>
                <h1 className="text-5xl font-bold text-white" >Service Details</h1>
            </div>
            
        </div>
    );
};

export default ServiceDetails;