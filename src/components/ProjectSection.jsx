import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";

import dp from '../assets/Images/dp2.jpg'


function ProjectSection() {
    return (

        <div className='my-5'>
            <h1 className="text-3xl md:text-5xl text-center my-5">Projects</h1>

            <div className="flex flex-wrap justify-center">
                <div className="bg-blue-gray-100 rounded-xl overflow-hidden md:w-1/2 lg:w-1/3">
                    <div className="">
                        <img className='' src={dp} alt="Images" />
                    </div>

                    <div className='px-6 py-3'>
                        <div className='w-full'>
                            <h1 className='text-xl font-semibold tracking-wide pb-2'>Portfolio</h1>
                            <p className="text-justify">A responsive portfolio website built with React and Tailwind CSS. Showcases personal projects, skills, and experience with a clean, modern design. Ideal for demonstrating web development skills and personal branding.</p>
                            <div className='py-2 flex justify-center'>
                                <a href="https://github.com/Supun-01/st-portfolio" target="__blank"><button className='border border-black py-1 px-5 rounded-lg font-semibold bg-cyan-600 text-white hover:bg-cyan-800 '>Visit GitHub Repo</button></a>
                            </div>
                        </div>

                        <div className='flex flex-wrap justify-center space-y-1 space-x-2 pt-1'>
                            <div className="bg-blue-gray-200 py-1 px-2 rounded-lg">React</div>
                            <div className="bg-blue-gray-200 py-1 px-2 rounded-lg">TailWind</div>
                            <div className="bg-blue-gray-200 py-1 px-2 rounded-lg">JavaScript</div>
                            <div className="bg-blue-gray-200 py-1 px-2 rounded-lg">HTML</div>
                            <div className="bg-blue-gray-200 py-1 px-2 rounded-lg">HTML</div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ProjectSection

