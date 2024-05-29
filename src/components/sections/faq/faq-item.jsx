import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

export default function FAQItem({item}) {
    const [isVisible, setVisible] = useState(false); 

    const toggle = () => {
        setVisible(!isVisible);
        console.log(isVisible);
    }
    

    return (
        <li className="lg:text-sm xl:text-base w-full">
            <button onClick={toggle} className="flex flex-row justify-between items-center w-full h-full text-left ease-in-out duration-300 hover:bg-gray-300 bg-[#FAFAFA] px-2 py-1 rounded-md shadow-md ">
                <p className="w-[85%]">{item.question}</p>
                <FaPlus className="w-[8%] h-auto" />
            </button>
        </li>
    );
}