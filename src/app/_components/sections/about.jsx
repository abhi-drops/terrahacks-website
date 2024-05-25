import Image from "next/image";
import HeaderRight from "../header-right.jsx";
export default function About() {
    return (
        <>
            <div id="about" className="flex relative justify-center items-center bg-cover bg-center w-full h-auto max-h-screen bg-about-section-mobile lg:bg-about-section lg:pb-[57.5%]">
                <HeaderRight title="About TerraHacks" />
            </div>
        </>
    );
}