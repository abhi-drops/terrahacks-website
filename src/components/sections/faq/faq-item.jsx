"use client";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState, useRef } from "react";
import { useClickAway } from "react-use";

export default function FAQItem({ item }) {
    const [isVisible, setVisible] = useState(false);
    const contentRef = useRef(null);
    useClickAway(contentRef, () => {
        setVisible(false);
    });

    return (
        <li className="lg:text-sm xl:text-base w-full">
            <button
                aria-label="FAQ Item Button"
                onClick={() => {
                    var elem = document.getElementById('faq').offsetTop;
                    window.scrollTo({ top: elem, behavior: "smooth" });
                    setVisible(!isVisible);
                }}
                className="flex flex-row justify-between items-center w-full h-full text-left ease-in-out duration-300 hover:bg-gray-300 bg-[#FAFAFA] px-2 py-2 md:py-3 lg:py-1 rounded-md shadow-md "
            >
                <p className="w-[85%] text-xs md:text-sm lg:text-base">{item.question}</p>
                {isVisible ? <FaMinus className="w-[8%] h-auto" /> : <FaPlus className="w-[8%] h-auto" />}
            </button>
            {/* for scrolling  */}
            {typeof document !== 'undefined' && (isVisible ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden"))}
            <div className={`fixed flex justify-center items-center top-0 left-0 h-screen w-screen bg-gray-900 bg-opacity-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div ref={contentRef} className={`relative flex flex-col items-center justify-center bg-white w-1/2 h-1/2 rounded-md shadow-md transition-transform transform ${isVisible ? 'scale-100' : 'scale-95'}`}>
                    <button
                        aria-label="Close FAQ Modal Button"
                        onClick={() => {
                            setVisible(false)
                        }}
                        className="flex w-full"
                    >

                        <IoClose className="absolute top-0 right-0 w-10 h-auto m-2" />
                    </button>
                    <p className="lg:pb-10 pb-2 lg:text-lg lg:mx-[10%]">
                        {item.question}
                    </p>
                    <hr className="w-[90%]" />
                    <p className="lg:text-lg lg:mx-[10%] lg:pt-10 pt-2">
                        {item.answer}
                    </p>
                </div>
            </div>

        </li>
    );
}