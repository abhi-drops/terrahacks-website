import { FaRegEnvelope, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiDiscordLine, RiTiktokLine } from "react-icons/ri";
import { SiLinktree } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="bg-[#0B0507] text-[#FAFAFA] py-12">
                <div id="portal-btn" className="flex flex-row items-center mt-4 mb-6 w-full text-lg xl:text-xl 2xl:text-2xl">
                    <Link
                        aria-label="Button to Sign up for TerraHacks Newsletter"
                        className="bg-green-600 text-[#FAFAFA] mx-auto font-medium px-6 py-4 text-center rounded-md shadow-md hover:bg-green-700 duration-300 hover:scale-105 ease-in-out"
                        rel="noopener noreferrer" target="_blank" href="/newsletter"
                    >
                        Sign up for our newsletter!
                    </Link>
                </div>
                <div className="main flex flex-col items-center justify-center space-y-6">
                    <div id="terrahacks-links" className="flex flex-row items-center justify-between w-[90%] md:w-[60%] lg:w-[40%] 2xl:w-[35%] text-[#FAFAFA]  pt-2 mt-2 xl:mt-6 3xl:pt-4 3xl:mt-6">
                        <a aria-label='Link to Email' rel='noopener noreferrer' href="mailto:contact@terrahacks.ca" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                            <FaRegEnvelope className="w-8 md:w-10 xl:w-12 h-auto" />
                        </a>
                        <a aria-label="Link to Instagram" rel='noopener noreferrer' href="https://www.instagram.com/terrahacks.tmu" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                            <FaInstagram className="w-8 md:w-10 xl:w-12 h-auto" />
                        </a>
                        <a aria-label='Link to Discord' rel='noopener noreferrer' href="https://discord.gg/982AkBQea7" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                            <RiDiscordLine className="w-8 md:w-10 xl:w-12 h-auto" />
                        </a>
                        <a aria-label='Link to LinkedIn' rel='noopener noreferrer' href="https://www.linkedin.com/company/terrahacks" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                            <FaLinkedinIn className="w-8 md:w-10 xl:w-12 h-auto" />
                        </a>
                        <a aria-label='Link to TikTok' rel='noopener noreferrer' href="https://www.tiktok.com/@terrahacks" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                            <RiTiktokLine className="w-8 md:w-10 xl:w-12 h-auto" />
                        </a>
                        <a aria-label='Link to Linktree' rel='noopener noreferrer' href="https://linktr.ee/terrahacks" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                            <SiLinktree className="w-8 md:w-10 xl:w-12 h-auto" />
                        </a>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-x-12 lg:space-y-0">
                        {/* <a
                            aria-label='Link to MLH Code of Conduct'
                            rel='noopener noreferrer'
                            href="/assets/mlh-conduct.pdf"
                            type="application/pdf"
                            target="_blank"
                            className="md:text-lg lg:text-xl xl:text-2xl hover:text-gray-300 ease-in-out duration-300 underline"
                        >
                            MLH Code of Conduct
                        </a> */}
                        <a
                            aria-label='Link to Privacy Policy'
                            rel='noopener noreferrer'
                            href="https://portal.terrahacks.ca/assets/privacy-policy.pdf"
                            type="application/pdf"
                            target="_blank"
                            className="md:text-lg lg:text-xl xl:text-2xl hover:text-gray-300 ease-in-out duration-300 underline"
                        >
                            Privacy Policy
                        </a>
                    </div>
                    <p className="md:text-lg lg:text-xl xl:text-2xl font-medium py-4 lg:py-8">Copyright © 2024 TerraHacks</p>
                </div>
            </footer>
        </>
    );
}
