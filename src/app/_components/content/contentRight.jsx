import React from 'react';

export default function ContentRight({ text, top }) {

    return (
        <div
            className={`w-full mx-auto absolute lg:pl-[34%] lg:pr-[22%] 2xl:pl-[38%] 2xl:pr-[27%] top-[${top}] lg:text-sm xl:text-xl 3xl:text-4xl 3xl:pt-12 text-white`}
            style={{ top: `${top}` }}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    );
}