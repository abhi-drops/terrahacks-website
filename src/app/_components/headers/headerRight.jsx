export default function HeaderRight({ title, top }) {
    return (
        <h1
            className={`absolute pl-[12%] mx-auto w-full text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-8xl font-bold text-center text-white uppercase`}
            style={{ top: `${top}` }}
        >
            {title}
        </h1>
    );
}