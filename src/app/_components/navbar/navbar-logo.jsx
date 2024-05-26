import Image from 'next/image';

export default function NavbarLogo() {
    return (
        <button onClick={() => {
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
                className="w-10 h-10 lg:w-16 lg:h-16 3xl:w-24 3xl:h-24 hover:animate-spin"
                style={{ animationDuration: "2s"}}
            />
        </button>
    )
}