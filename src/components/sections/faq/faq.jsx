"use client";
import { useRef, useEffect, useState } from "react";
import Header from "@/components/header.jsx";
import FAQItem from "./faq-item";

export default function FAQ() {
    const contentRef = useRef(null);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/faq.json");
                const data = await response.json()
                setQuestions(data);
            }
            catch (error) {
                console.error("Failed to fetch FAQ questions: ", error);
            }
        }
        fetchData();

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
        <div id="faq" ref={contentRef} className="flex flex-col justify-center items-center absolute top-[58.6%] lg:top-[55.7%] 2xl:top-[56.2%] pl-[17%] pr-[33%] lg:pl-[17%] lg:pr-[38%] 2xl:pl-[25%] 2xl:pr-[38%] mx-auto w-full h-[8%] lg:h-[10%] float-in-section">
            <Header title="FAQ" />
            <ul className="text-left grid grid-cols-1 gap-y-3 lg:grid-cols-2 lg:grid-rows-5 lg:gap-x-3 lg:gap-y-5 text-black font-medium pt-6">
                {questions.map((item, index) => (
                    <FAQItem item={item} key={index}/>
                ))}
            </ul>
        </div>
    );
}