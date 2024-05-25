import Image from 'next/image';

export default function Hero() {
    return (
        // <div id="hero" className="flex justify-start h-screen bg-hero-section bg-no-repeat bg-top bg-contain 2xl:bg-center 2xl:bg-cover">
        <div id="hero" className="flex bg-cover bg-no-repeat bg-center w-full h-auto max-h-screen pb-[140%] lg:pb-[55%] relative bg-hero-section-mobile lg:bg-hero-section">
                <Image
                    src="/assets/th_text.png"
                    alt='TerraHacks Text'
                    width={3000}
                    height={400}
                    className='mx-auto px-6 md:px-10 lg:px-36 xl:px-48 mt-60 h-full z-20'
                />
                <Image
                    src="/assets/sign.png"
                    alt="TerraHacks Sign"
                    width={1000}
                    height={1000}
                    className='absolute hidden lg:block right-[5%] bottom-[16%] lg:w-[30%] xl:w-[25%] h-auto z-20'
                />
        </div>
    )
}