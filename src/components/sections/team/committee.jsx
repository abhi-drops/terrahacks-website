import Image from "next/image";

export default function Committee({ members, title }) {
    return (
        <div className="flex flex-col h-full justify-center items-center pb-[14%]">
            <h2 className="text-3xl lg:text-4xl 3xl:text-5xl font-bold text-center text-white tracking-wide my-20">
                {title}
            </h2>
            <div className="flex flex-row flex-wrap gap-5 pt-4 items-center justify-center">
                {members.map((member, index) => (
                    <div key={index} className="flex flex-col items-center justify-center w-1/5">
                        <Image
                            src={`/assets/team/${member.img}`}
                            alt={member.name}
                            width={1000}
                            height={1000}
                            loading="lazy"
                            className="w-2/3 h-2/3 rounded-full object-cover object-center"
                        />
                        <h3 className="text-2xl font-bold text-center text-white mt-4">{member.name}</h3>
                        <h4 className="text-lg text-white mt-2">{member.position}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
