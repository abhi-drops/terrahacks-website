"use client";
import { IoClose } from 'react-icons/io5';
import { useState, useEffect, useRef } from 'react';
import { useClickAway } from 'react-use';

export default function ComingSoon({isVisible, setVisible}) {
    const [dots, setDots] = useState(0);
    const contentRef = useRef(null);
    useClickAway(contentRef, () => {
        setVisible(false);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev + 1) % 4); // Cycle through 0, 1, 2, 3
        }, 500); // Adjust the speed as needed

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <div className={`fixed flex justify-center items-center top-0 left-0 h-screen w-screen bg-gray-900 bg-opacity-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-[49]`}>
            <div ref={contentRef} className={`relative flex flex-col items-center justify-center bg-white w-1/2 h-1/2 rounded-md shadow-md transition-transform transform ${isVisible ? 'scale-100' : 'scale-95'} z-50`}>
                <button
                    onClick={() => {
                        setVisible(false)
                    }}
                    className="flex w-full"
                >

                    <IoClose className="absolute top-0 right-0 w-10 h-auto m-2" />
                </button>
                <p className="lg:pb-10 pb-2 font-medium text-lg lg:text-xl xl:text-2xl 3xl:text-3xl lg:mx-[10%]">
                    Coming soon{'.'.repeat(dots)}
                </p>
                <hr className="w-[90%]" />
                <p className="text-center lg:text-lg xl:text-xl 2xl:text-2xl lg:mx-[10%] lg:pt-10 pt-2">
                    Thank you for your patience while we get the sponsorship package ready!
                </p>
            </div>
        </div>
    );
}