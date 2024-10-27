import { HeroSectionContent } from "../assets/text"
import { MdDownload } from "react-icons/md";
import MyDp from '../assets/Images/dp.jpg'
import { cvLink } from "../assets/text";

function HeroSection() {
    return (
        <div className="flex flex-wrap items-center my-5 md:my-10 ">

            <div className="w-full lg:w-1/2 mb-5 lg:pr-5">
                <div className="">
                    <h1 className="text-5xl lg:text-8xl tracking-widest font-medium">Supun Tharaka</h1>
                    <h1 className="text-3xl lg:text-4xl font-light text-cyan-800">Full-Stack Developer</h1>
                </div>
                <div className="">
                    <p className="text-xl md:text-2xl text-gray-800">{HeroSectionContent}</p>
                    <div className="flex justify-center lg:justify-start items-center">
                        <a href={cvLink}>
                            <button className="mt-4 font-bold border border-gray-900 rounded-xl bg-cyan-600 text-white py-1 px-8 flex flex-wrap items-center hover:bg-cyan-800 text-xl">Download CV<MdDownload className="text-2xl" /></button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-wrap justify-center">
                <img className="rounded-3xl w-11/12 md:w-8/12 lg:w-full" src={MyDp} alt="Profile Pic" />
            </div>

        </div>
    )
}

export default HeroSection