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
        <div id="faq" ref={contentRef} className="hidden lg:flex flex-col justify-center items-center absolute top-[66.8%] 2xl:top-[67.2%] pl-[35%] pr-[18%] 2xl:pl-[40.5%] 2xl:pr-[25.5%] mx-auto w-full h-[8%] float-in-section">
            <Header title="FAQ" />
            <ul className="text-left grid grid-cols-2 grid-rows-5 gap-3 text-black font-medium pt-3">
                {questions.map((item, index) => (
                    <FAQItem item={item} key={index}/>
                ))}
            </ul>
        </div>
    );
}