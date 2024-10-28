import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function FooterSection() {
    const year = new Date().getFullYear();

    return (
        <div className="bg-blue-gray-200 px-5 md:px-10 py-6 mt-5">
            <div className="flex flex-wrap md:container justify-between mx-auto items-center">

                <div className="text-2xl">
                    <h1>SupunTharaka</h1>
                </div>

                <div className="text-3xl flex gap-4">
                    <a href="#"> <FaGithub /></a>
                    <a href="#"><FaLinkedin className="text-blue-900" /></a>
                    <a href="#"><FaFacebook className="text-blue-700" /></a>
                    <a href="#"><FaYoutube className="text-red-700" /></a>
                </div>

            </div>

            <div>
                <h1 className="text-center p-2">
                    © {year} SupunTharaka. All rights reserved.
                </h1>
            </div>
        </div>
    )
}

export default FooterSection