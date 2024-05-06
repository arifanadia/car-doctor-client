import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero mt-24 mb-52 max-w-7xl mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className="flex-1 relative">
                    <img src={person} className="w-[460px] h-[473px] rounded-lg shadow-2xl" />
                    <img src={parts} className="w-[332px] h-[344px] absolute rounded-lg shadow-2xl right-5 top-1/2 border-8 border-white" />
                </div>
                <div className="flex-1 space-y-7 p-5">
                    <h3 className="text-xl font-bold text-[#FF3811]">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this fields</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.  </p>
                    <button className="btn  text-lg text-white bg-[#FF3811]">Get More Info</button>
                   
                </div>
            </div>
        </div>
    );
};

export default About;