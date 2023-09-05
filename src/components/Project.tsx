"use client"

type ProjectProps = {
    projectTitle: string
    projectDescription: string
    screenshot: string
    link: string
}

// class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"

const Project = (props: ProjectProps) => {
    return (
        <div
            className="flex flex-row mt-12"
            onClick={() =>
                props.link && window.open(props.link, "_blank", "noreferrer")
            }
        >
            <div className="w-1/4 text-gray-400 text-xs font-semibold uppercase mt-1">
                {/* <span>{props.screenshot}</span> */}
            </div>
            <div className="w-3/4">
                <div className="text-white">
                    <span>{props.projectTitle}</span>
                </div>
                <div className="pb-2 text-gray-400 text-xs">
                    {props.projectDescription}
                </div>
            </div>
        </div>
    )
}

export default Project
