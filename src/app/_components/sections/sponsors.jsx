import Image from "next/image";
import HeaderLeft from "../headers/headerLeft.jsx";

export default function Sponsors() {
    return (
        <>
            <div id="about" className="flex relative justify-center items-center bg-cover bg-center w-full h-auto max-h-screen bg-sponsor-section-mobile lg:bg-sponsor-section lg:pb-[57.5%]">
                <HeaderLeft title="Sponsors" />
            </div>
        </>
    );
}