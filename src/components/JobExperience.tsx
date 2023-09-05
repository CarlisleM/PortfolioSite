"use client"

const jobData = [
    {
        start: "DEC 2021",
        end: "JUNE 2023",
        jobTitle: "Software Engineer",
        company: "Splash",
        jobDescription:
            "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and  websites for organizations in the community.",
        techStack: ["Roblox Studio", "Rojo", "Roact", "Lua", "Python"],
    },

    {
        start: "JAN 2021",
        end: "DEC 2021",
        jobTitle: "Software Engineer (Full-stack Developer)",
        company: "Codafication",
        jobDescription:
            "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and  websites for organizations in the community.",
        techStack: [
            "React",
            "Javascript",
            "Typescript",
            "Postgres",
            "GraphQL",
            "Kubernetes",
            "Docker",
        ],
        link: "https://codafication.com/",
    },

    {
        start: "FEB 2020",
        end: "JUNE 2020",
        jobTitle: "Junior Software Engineer",
        company: "Coin Crew Games",
        jobDescription:
            "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and  websites for organizations in the community.",
        techStack: ["Unity", "C#"],
        link: "https://www.coincrew.games/",
    },

    {
        start: "NOV 2017",
        end: "JULY 2018",
        jobTitle: "Junior Software Engineer",
        company: "Queensland Micro- and Nanotechnology Centre",
        jobDescription:
            "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and  websites for organizations in the community.",
        techStack: ["Matlab"],
        link: "https://www.griffith.edu.au/queensland-micro-nanotechnology-centre",
    },

    {
        start: "JULY 2016",
        end: "NOV 2016",
        jobTitle: "Software Developer",
        company: "Activate Entertainment",
        jobDescription:
            "Worked with a team of university students to develop a 2D/3D game to help teach kids the meaning of empathy through the adventures of a boy and his robot friend named REMI.",
        techStack: ["Unity", "Vuforia", "C#"],
        link: "https://www.griffith.edu.au/griffith-business-school/social-marketing-griffith/our-impact/r.e.m.i",
    },
]

const JobExperience = () => {
    return (
        <section id="experience" className="py-12">
            {jobData.map((job, index) => (
                <li
                    key={index}
                    className="mb-12 list-none group"
                    onClick={() =>
                        job.link &&
                        window.open(job.link, "_blank", "noreferrer")
                    }
                >
                    <div className="flex flex-row mt-12 group relative">
                        <div className="absolute roundexd-md -inset-x-4 -inset-y-4 z-0 lg:-inset-x-6 lg:block bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-20"></div>

                        <div className="w-1/4 text-gray-400 text-xs font-semibold uppercase mt-1">
                            <span>
                                {job.start + " -"}
                                <br />
                                {job.end}
                            </span>
                        </div>
                        <div className="w-3/4">
                            <div className="text-white">
                                <span>
                                    {job.jobTitle} - {job.company}
                                </span>
                            </div>
                            <div className="pb-2 text-gray-400 text-xs">
                                {job.jobDescription}
                            </div>
                            <div className="flex flex-wrap">
                                {job.techStack.map((tech, index) => (
                                    <TechTool key={index} text={tech} />
                                ))}
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </section>
    )
}

const TechTool: React.FunctionComponent<any> = ({ text }) => {
    return (
        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 mr-2 mb-2 text-xs font-medium leading-5 text-teal-300 ">
            {text}
        </div>
    )
}

export default JobExperience
