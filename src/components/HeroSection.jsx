import { HeroSectionContent } from "../assets/text"
import MyDp from '../assets/Images/dp.jpg'

function HeroSection() {
    return (
        <div className="flex flex-wrap items-center my-5">

            <div className="w-full lg:w-1/2 mb-5">
                <div className=" ">
                    <h1 className="text-4xl lg:text-6xl tracking-widest font-medium">Supun Tharaka</h1>
                    <h1 className="text-2xl font-light">Full-Stack Developer</h1>
                </div>
                <div className=" ">
                    <p className="text-lg">{HeroSectionContent}</p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-wrap justify-center">
                <img className="rounded-lg w-11/12 md:w-8/12 lg:w-full" src={MyDp} alt="Profile Pic" />
            </div>

        </div>
    )
}

export default HeroSection