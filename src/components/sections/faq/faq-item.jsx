"use client";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

export default function FAQItem({ item, onOpen, isVisible, setVisible }) {
    return (
        <li className="lg:text-sm xl:text-base w-full min-h-[50%] max-h-[75%] md:min-h-full md:max-h-full">
            <button
                aria-label="FAQ Item Button"
                onClick={() => {
                    setVisible(!isVisible);
                    onOpen(item);
                }}
                className="flex flex-row justify-between items-center w-full h-full text-left ease-in-out duration-300 hover:bg-gray-300 bg-[#FAFAFA] px-2 py-2 md:py-3 lg:py-1 rounded-md shadow-md"
            >
                <p className="w-[85%] text-sm lg:text-base">{item.question}</p>
                {isVisible ? <FaMinus className="w-[8%] h-auto" /> : <FaPlus className="w-[8%] h-auto" />}
            </button>
        </li>
    );
}
