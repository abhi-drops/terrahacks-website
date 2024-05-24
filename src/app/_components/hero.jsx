import Image from 'next/image';

export default function Hero() {
    return (
        // <div id="hero" className="flex justify-start h-screen bg-hero-section bg-no-repeat bg-top bg-contain 2xl:bg-center 2xl:bg-cover">
        <div id="hero" className="flex bg-cover bg-no-repeat bg-center w-full h-auto max-h-screen pb-[140%] lg:pb-[45%] relative bg-hero-section-mobile lg:bg-hero-section">
                <Image
                    src="/assets/th_text.png"
                    alt='TerraHacks Text'
                    width={3000}
                    height={400}
                    className='mx-auto mt-48 w-[90%] lg:w-[75%] h-full z-20'
                />
                <Image
                    src="/assets/sign-test.png"
                    alt="TerraHacks Sign"
                    width={1000}
                    height={1000}
                    className='absolute right-[5%] bottom-[8%] w-[15%] h-auto z-20'
                />
        </div>
    )
}