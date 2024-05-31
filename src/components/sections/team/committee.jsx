export default function Committee({ members, title }) {
    return (
        <div className="">
            <h2 className="text-3xl lg:text-4xl 3xl:text-5xl font-bold text-center text-white uppercase tracking-wide">
                {title}
            </h2>
            <div className="grid grid-cols-1 mx-12 lg:mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-4 items-center justify-center">
                {members.map((member, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <img
                            src={`/assets/team/${member.img}`}
                            alt={member.name}
                            className="w-40 h-40 rounded-full object-cover object-center"
                        />
                        <h3 className="text-2xl font-bold text-white mt-4">{member.name}</h3>
                        <h4 className="text-lg text-white mt-2">{member.position}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
