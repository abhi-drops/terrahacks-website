"use client";
import Image from "next/image";
import Header from "@/components/header.jsx";
import { useRef, useEffect } from "react";

export default function Sponsors() {
    const contentRef = useRef(null);

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
                threshold: 0.2, // Trigger when 10% of the section is visible
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
        <div id="sponsors" ref={contentRef} className="hidden lg:flex flex-col justify-center items-center absolute top-[29.2%] 2xl:top-[28.5%] pl-[35%] pr-[23%] 2xl:pl-[38%] 2xl:pr-[27%] mx-auto w-full h-[8%] float-in-section">
            <Header title="Our Sponsors" />
        </div>
    );
}