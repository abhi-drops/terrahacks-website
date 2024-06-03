import Image from 'next/image';

export default function NavbarLogo() {
    return (
        <button 
            aria-label='TerraHacks Logo Button - Redirects to Home'
            onClick={() => {
                document.scrollingElement.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className='self-start'
        >
            <Image
                src="/assets/th_logo.png"
                alt="TerraHacks Logo - Redirects to Home"
                width={1000}
                height={1000}
                priority={true}
                className="w-10 h-10 lg:w-16 lg:h-16 2xl:w-18 2xl:h-18 lg:hover:animate-spin-slow"
            />
        </button>
    )
}