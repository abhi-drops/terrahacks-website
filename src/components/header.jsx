export default function Header({ title }) {
    return (
        <h1
            className={`${title === "Contact Us" ? 'text-md' : 'text-lg'} md:text-xl lg:text-4xl 3xl:text-5xl font-bold text-center text-[#FAFAFA] uppercase tracking-wide`}
        >
            {title}
        </h1>
    );
}