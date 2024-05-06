import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Banner = () => {
    return (
        <div className=' max-w-7xl mx-auto mt-10'>
            <div className="carousel h-[650px] rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className='absolute h-full w-1/2 flex items-center top-0 left-0  
                    bg-gradient-to-r from-[#151515FF] to-[#15151500]'>
                        <div className='space-y-7 text-white pl-12 '>
                            <h1 className='text-5xl leading-snug font-bold '>Affordable
                                <br /> Price For Car <br /> Servicing</h1>
                            <p>There are many variations of passages of  available,
                                <br /> but the majority have suffered alteration in some form</p>
                            <div className=''>
                                <button className="btn hover:border-white mr-5 text-lg hover:bg-transparent text-white bg-[#FF3811]">Discover More</button>
                                <button className="btn hover:border-white text-lg hover:bg-transparent text-white bg-[#FF3811]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-5">
                        <a href="#slide6" className="text-2xl btn btn-circle mr-5 hover:btn-warning"><IoIosArrowRoundBack /></a>
                        <a href="#slide2" className="text-2xl btn btn-circle hover:btn-warning"><IoIosArrowRoundForward /></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className='absolute h-full w-1/2 flex items-center top-0 left-0  
                    bg-gradient-to-r from-[#151515FF] to-[#15151500]'>
                        <div className='space-y-7 text-white pl-12 '>
                            <h1 className='text-5xl leading-snug font-bold '>Affordable
                                <br /> Price For Car <br /> Servicing</h1>
                            <p>There are many variations of passages of  available,
                                <br /> but the majority have suffered alteration in some form</p>
                            <div className=''>
                                <button className="btn hover:border-white mr-5 text-lg hover:bg-transparent text-white bg-[#FF3811]">Discover More</button>
                                <button className="btn hover:border-white text-lg hover:bg-transparent text-white bg-[#FF3811]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-5">
                        <a href="#slide1" className="text-2xl btn btn-circle mr-5 hover:btn-warning"><IoIosArrowRoundBack /></a>
                        <a href="#slide3" className="text-2xl btn btn-circle hover:btn-warning"><IoIosArrowRoundForward /></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className='absolute h-full w-1/2 flex items-center top-0 left-0  
                    bg-gradient-to-r from-[#151515FF] to-[#15151500]'>
                        <div className='space-y-7 text-white pl-12 '>
                            <h1 className='text-5xl leading-snug font-bold '>Affordable
                                <br /> Price For Car <br /> Servicing</h1>
                            <p>There are many variations of passages of  available,
                                <br /> but the majority have suffered alteration in some form</p>
                            <div className=''>
                                <button className="btn hover:border-white mr-5 text-lg hover:bg-transparent text-white bg-[#FF3811]">Discover More</button>
                                <button className="btn hover:border-white text-lg hover:bg-transparent text-white bg-[#FF3811]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-5">
                        <a href="#slide2" className="text-2xl btn btn-circle mr-5 hover:btn-warning"><IoIosArrowRoundBack /></a>
                        <a href="#slide4" className="text-2xl btn btn-circle hover:btn-warning"><IoIosArrowRoundForward /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className='absolute h-full w-1/2 flex items-center top-0 left-0  
                    bg-gradient-to-r from-[#151515FF] to-[#15151500]'>
                        <div className='space-y-7 text-white pl-12 '>
                            <h1 className='text-5xl leading-snug font-bold '>Affordable
                                <br /> Price For Car <br /> Servicing</h1>
                            <p>There are many variations of passages of  available,
                                <br /> but the majority have suffered alteration in some form</p>
                            <div className=''>
                                <button className="btn hover:border-white mr-5 text-lg hover:bg-transparent text-white bg-[#FF3811]">Discover More</button>
                                <button className="btn hover:border-white text-lg hover:bg-transparent text-white bg-[#FF3811]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-5">
                        <a href="#slide3" className="text-2xl btn btn-circle mr-5 hover:btn-warning"><IoIosArrowRoundBack /></a>
                        <a href="#slide5" className="text-2xl btn btn-circle hover:btn-warning"><IoIosArrowRoundForward /></a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full" />
                    <div className='absolute h-full w-1/2 flex items-center top-0 left-0  
                    bg-gradient-to-r from-[#151515FF] to-[#15151500]'>
                        <div className='space-y-7 text-white pl-12 '>
                            <h1 className='text-5xl leading-snug font-bold '>Affordable
                                <br /> Price For Car <br /> Servicing</h1>
                            <p>There are many variations of passages of  available,
                                <br /> but the majority have suffered alteration in some form</p>
                            <div className=''>
                                <button className="btn hover:border-white mr-5 text-lg hover:bg-transparent text-white bg-[#FF3811]">Discover More</button>
                                <button className="btn hover:border-white text-lg hover:bg-transparent text-white bg-[#FF3811]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-5">
                        <a href="#slide4" className="text-2xl btn btn-circle mr-5 hover:btn-warning"><IoIosArrowRoundBack /></a>
                        <a href="#slide6" className="text-2xl btn btn-circle hover:btn-warning"><IoIosArrowRoundForward /></a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full" />
                    <div className='absolute h-full w-1/2 flex items-center top-0 left-0  
                    bg-gradient-to-r from-[#151515FF] to-[#15151500]'>
                        <div className='space-y-7 text-white pl-12 '>
                            <h1 className='text-5xl leading-snug font-bold '>Affordable
                                <br /> Price For Car <br /> Servicing</h1>
                            <p>There are many variations of passages of  available,
                                <br /> but the majority have suffered alteration in some form</p>
                            <div className=''>
                                <button className="btn hover:border-white mr-5 text-lg hover:bg-transparent text-white bg-[#FF3811]">Discover More</button>
                                <button className="btn hover:border-white text-lg hover:bg-transparent text-white bg-[#FF3811]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-5">
                        <a href="#slide5" className="text-2xl btn btn-circle mr-5 hover:btn-warning"><IoIosArrowRoundBack /></a>
                        <a href="#slide1" className="text-2xl btn btn-circle hover:btn-warning"><IoIosArrowRoundForward /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;