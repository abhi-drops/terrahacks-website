import Image from "next/image";

export default function Committee({ members, title }) {
    return (
        <div className="flex flex-col h-full justify-center items-center lg:pb-[14%]">
            <h2 className="text-lg lg:text-4xl 3xl:text-5xl font-bold text-center text-[#FAFAFA] tracking-wide my-4 md:my-6 lg:my-10">
                {title}
            </h2>
            <div className="flex flex-row flex-wrap gap-5 pt-2 items-center justify-center">
                {members.map((member, index) => (
                    <div key={index} className={`flex flex-col items-center justify-center ${members.length > 4 ? `w-1/4` : `w-1/3`} md:w-1/3 lg:w-1/5`}>
                        <Image
                            src={`/assets/team/${member.img}`}
                            alt={member.name}
                            width={500}
                            height={500}
                            priority={true}
                            className="w-2/3 h-2/3 rounded-full object-cover object-center pointer-events-none"
                        />
                        <h3 className="text-sm md:text-base lg:text-2xl font-bold text-center text-[#FAFAFA] mt-4">{member.name}</h3>
                        <h4 className="text-xs md:text-sm lg:text-lg text-center text-[#FAFAFA] mt-2">{member.position}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
