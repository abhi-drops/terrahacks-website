export default function Header({ title }) {
    return (
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-white">{title}</h1>
    );
}