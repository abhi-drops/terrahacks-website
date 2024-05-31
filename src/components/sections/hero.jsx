import Image from 'next/image';

export default function Hero() {
    return (
        <>
            {/* The hidden headers are for reader mode accessibility */}
            <h1 className='opacity-0'>TerraHacks</h1>
            <h2 className='opacity-0'>Hosted at Toronto Metropolitan University, August 2nd - August 4th</h2>
            <Image
                src="/assets/th_text.png"
                alt='TerraHacks Text'
                width={3000}
                height={400}
                priority={true}
                className='absolute w-full mx-auto px-6 md:px-10 lg:px-36 xl:px-48 3xl:px-56 top-[20%] lg:top-[5%] xl:top-[3.5%] z-20 float-in'
            />
            <Image
                src="/assets/signs/sign.png"
                alt="TerraHacks Sign"
                width={1000}
                height={1000}
                priority={true}
                className='absolute hidden lg:block right-[5%] lg:top-[10.1%] 2xl:top-[8.6%] lg:w-[30%] 2xl:w-[25%] h-auto z-20'
            />
            <Image
                src="/assets/signs/sign-mobile.png"
                alt="TerraHacks Sign"
                width={1000}
                height={1000}
                priority={true}
                className='absolute lg:hidden w-full mx-auto px-[10%] top-[35%] z-20'
            />
        </>
    )
}