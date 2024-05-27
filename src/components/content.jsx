export default function ContentRight({ text, top }) {
    return (
        <div
            className={`pt-12 lg:text-sm xl:text-base 3xl:text-lg text-white`}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    );
}