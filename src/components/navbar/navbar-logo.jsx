import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function NavbarLogo() {
    const path = usePathname();
    const router = useRouter();

    const handleClick = () => {
        if (path === '/') {
            document.scrollingElement.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            router.push('/');
        }
    };

    return (
        <button
            aria-label='TerraHacks Logo Button - Redirects to Home'
            onClick={handleClick}
            className='self-start lg:hover:animate-spin-slow'
        >
            <Image
                src="/assets/th_logo.png"
                alt="TerraHacks Logo - Redirects to Home"
                width={1000}
                height={1000}
                priority={true}
                className="w-10 h-10 lg:w-16 lg:h-16 2xl:w-18 2xl:h-18 pointer-events-none"
            />
        </button>
    );
}
