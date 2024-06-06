"use client";
import { FaArrowUp } from "react-icons/fa";

export default function Top() {
    return (
        <button 
            aria-label="Scroll to Top Button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed w-12 aspect-square bottom-6 right-4 z-50 flex items-center justify-center text-[#FAFAFA] rounded-full bg-[#432C2B] shadow-md hover:bg-[#5C3D3C] ease-in-out duration-500"
        >
            <FaArrowUp />
        </button>
    );
}