export default function Header({ title }) {
    return (
        <h1
            className={`text-3xl lg:text-4xl 3xl:text-5xl font-bold text-center text-white uppercase`}
        >
            {title}
        </h1>
    );
}