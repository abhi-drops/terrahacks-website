"use client";
import Header from "@/components/header";
import Content from "@/components/content";
import { FaRegEnvelope, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiDiscordLine, RiTiktokLine } from "react-icons/ri";
import { SiLinktree } from "react-icons/si";
import { useRef, useEffect } from "react";

export default function Contact() {
    const contentRef = useRef(null);

    useEffect(() => {
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
                threshold: 0.2, // Trigger when 10% of the section is visible
            }
        );

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
        };
    }, []);

    return (
        <div id="contact" ref={contentRef} className="hidden lg:flex flex-col justify-center items-center absolute top-[86.5%] pl-[20%] pr-[38%] 2xl:pl-[27%] 2xl:pr-[39%] mx-auto w-full h-[8%] float-in-section">
            <Header title="Contact Us" />
            <Content text="Reach out at <b>contact@terrahacks.ca</b> for any help or support, 
            and please be sure to join the <b>TerraHacks Discord</b> community!" contact={true}/>
            <div id="terrahacks-links" className="flex flex-row items-center justify-evenly w-full text-white pl-4 xl:pl-8 pt-2 mt-2 xl:mt-6 3xl:pt-4 3xl:mt-6">
                <a href="mailto:contact@terrahacks.ca" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                    <FaRegEnvelope className="lg:w-12 3xl:w-16 h-auto" />
                </a>
                <a href="https://www.instagram.com/terrahacks.tmu" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                    <FaInstagram className="lg:w-12 3xl:w-16 h-auto" />
                </a>
                <a href="https://discord.gg/8hA54AGmZB" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                    <RiDiscordLine className="lg:w-12 3xl:w-16 h-auto" />
                </a>
                <a href="https://www.linkedin.com/company/terrahacks" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                    <FaLinkedinIn className="lg:w-12 3xl:w-16 h-auto" />
                </a>
                <a href="https://www.tiktok.com/@terrahacks" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                    <RiTiktokLine className="lg:w-12 3xl:w-16 h-auto" />
                </a>
                <a href="https://linktr.ee/terrahacks" target="_blank" className="hover:text-gray-300 ease-in-out duration-300">
                    <SiLinktree className="lg:w-12 3xl:w-16 h-auto" />
                </a>
            </div>
        </div>
    );
}