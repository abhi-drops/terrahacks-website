"use client";
import Header from "@/components/header";
import { FaRegEnvelope, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiDiscordLine, RiTiktokLine } from "react-icons/ri";
import { SiLinktree } from "react-icons/si";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Contact() {
    const contentRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("contact@terrahack.ca").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    useEffect(() => {
        const currentContentRef = contentRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    contentRef.current.classList.add('float-in-section-visible');
                }
                else {
                    contentRef.current.classList.remove('float-in-section-visible');
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        if (currentContentRef) {
            observer.observe(currentContentRef);
        }

        return () => {
            if (currentContentRef) {
                observer.unobserve(currentContentRef);
            }
        };
    }, []);

    return (
        <>
            <div id="contact" ref={contentRef} className="flex flex-col justify-center items-center absolute top-[70.5%] lg:top-[71%] 2xl:top-[71.8%] pl-[39%] pr-[12%] lg:pl-[39%] lg:pr-[21%] 2xl:pl-[42%] 2xl:pr-[27.5%] mx-auto w-full h-[4.5%] lg:h-[8%] float-in-section">
                <Header title="Contact Us" />
                <p
                    className={`pt-2 md:pt-4 lg:pt-8 2xl:pt-12 text-xs md:text-sm lg:text-lg xl:text-xl 3xl:text-3xl text-[#FAFAFA]`}
                >
                    Reach out to <span onClick={handleCopy} className="font-semibold md:font-bold reverse underline hover:cursor-pointer">ac.skca<span className="hidden">REMOVE</span>harret@t<span className="hidden">.com@la</span>catnoc</span><span className="hidden md:inline"> for any help or support</span>,
                    and <span className="hidden md:inline">please be sure to </span>join the <span className="font-semibold md:font-bold">TerraHacks Discord</span> community!
                </p>
                <span className={`fixed text-xs lg:text-sm xl:text-base right-[5%] bottom-0 bg-green-600 text-[#FAFAFA] p-1 lg:p-4 rounded-sm lg:rounded-md shadow-md ease-in-out duration-500 ${copied ? 'opacity-100' : 'opacity-0'}`}>Email copied to clipboard!</span>
                <div id="terrahacks-links" className="flex flex-row items-center justify-between w-full md:w-3/4 lg:w-full text-[#FAFAFA] pt-2 mt-1 md:mt-2 xl:mt-6 3xl:pt-4 3xl:mt-6">
                    <a aria-label='Link to Email' rel='noopener noreferrer' href="mailto:contact@terrahacks.ca" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                        <FaRegEnvelope className="w-5 md:w-8 lg:w-12 3xl:w-16 h-auto" />
                    </a>
                    <a aria-label='Link to Instagram' rel='noopener noreferrer' href="https://www.instagram.com/terrahacks.tmu" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                        <FaInstagram className="w-5 md:w-8 lg:w-12 3xl:w-16 h-auto" />
                    </a>
                    <a aria-label='Link to Discord' rel='noopener noreferrer' href="https://discord.gg/982AkBQea7" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                        <RiDiscordLine className="w-5 md:w-8 lg:w-12 3xl:w-16 h-auto" />
                    </a>
                    <a aria-label='Link to LinkedIn' rel='noopener noreferrer' href="https://www.linkedin.com/company/terrahacks" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                        <FaLinkedinIn className="w-5 md:w-8 lg:w-12 3xl:w-16 h-auto" />
                    </a>
                    <a aria-label='Link to TikTok' rel='noopener noreferrer' href="https://www.tiktok.com/@terrahacks" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                        <RiTiktokLine className="w-5 md:w-8 lg:w-12 3xl:w-16 h-auto" />
                    </a>
                    <a aria-label='Link to Linktree' rel='noopener noreferrer' href="https://linktr.ee/terrahacks" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                        <SiLinktree className="w-5 md:w-8 lg:w-12 3xl:w-16 h-auto" />
                    </a>
                </div>
            </div>
            <div className="absolute w-[25%] 2xl:w-[20%] md:left-[5%] lg:left-0 2xl:left-[5%] top-[66.5%] lg:top-[67%] 2xl:top-[67%] overflow-x-hidden">
                <Image
                    src="/assets/moles/vibing_mole.png"
                    alt="TerraHacks Logo"
                    width={1500}
                    height={1500}
                    priority={true}
                    className="w-full scale-x-[-1]"
                />
            </div>
        </>

    );
}