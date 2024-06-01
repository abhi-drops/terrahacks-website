export default function Header({ title }) {
    return (
        <h1
            className={`text-lg md:text-xl lg:text-4xl 3xl:text-5xl font-bold text-center text-white uppercase tracking-wide`}
        >
            {title}
        </h1>
    );
}