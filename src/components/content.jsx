import parse from "html-react-parser";

export default function Content({ text, contact }) {
    return (
        <div
            className={`pt-8 2xl:pt-12 ${contact ? `lg:text-lg xl:text-xl 3xl:text-3xl` : `lg:text-sm xl:text-base 3xl:text-lg`} text-white`}
        >
            {parse(text)}
        </div>
    );
}