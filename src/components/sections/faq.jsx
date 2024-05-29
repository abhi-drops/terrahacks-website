"use client";
import { useRef, useEffect } from "react";
import Header from "@/components/header.jsx";
import Content from "@/components/content.jsx";

export default function FAQ() {
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
        <>
            <div id="faq" ref={contentRef} className="flex relative justify-center items-center bg-cover bg-center w-full h-auto max-h-screen  lg:pb-[57.5%]">
                <Header title="FAQ" />
            </div>
        </>
    );
}