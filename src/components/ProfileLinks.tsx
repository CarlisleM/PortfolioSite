"use client"

import {
    AiFillGithub,
    AiFillLinkedin,
    AiTwotoneFilePdf,
    AiTwotoneMail,
} from "react-icons/ai"

interface icon_array {
    icon: any
    link?: string
    email?: string
    text: string
}

const icons: icon_array[] = [
    {
        icon: <AiFillGithub size="28" />,
        link: "https://github.com/CarlisleM",
        text: "GitHub",
    },
    {
        icon: <AiFillLinkedin size="28" />,
        link: "https://www.linkedin.com/in/carlisle-miller-b11630172/",
        text: "LinkedIn",
    },
    {
        icon: <AiTwotoneMail size="28" />,
        email: "carlisle.tmiller@gmail.com",
        text: "Email",
    },
    {
        icon: <AiTwotoneFilePdf size="28" />,
        link: "https://plum-marcelle-85.tiiny.site",
        text: "Resume",
    },
]

const ProfileLinks = () => {
    return (
        <div className="flex items-center justify-around">
            {icons.map((iconData, index) => (
                <ProfileLinksIcon
                    key={index}
                    icon={iconData.icon}
                    link={iconData.link}
                    email={iconData.email}
                    text={iconData.text}
                />
            ))}
        </div>
    )
}

const ProfileLinksIcon: React.FunctionComponent<any> = ({
    icon,
    link,
    email,
    text,
}) => {
    return (
        <div className="flex flex-col mr-2">
            <div className="flex flex-col">
                <div
                    className="profile-links-icon group "
                    onClick={() => {
                        link && window.open(link, "_blank", "noreferrer")
                        email &&
                            window.open(
                                "mailto:" +
                                    email +
                                    "?subject=Subject&body=Body%20goes%20here"
                            )
                    }}
                >
                    {icon}
                    <span className="profile-links-tooltip group-hover:scale-100">
                        {text}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProfileLinks
