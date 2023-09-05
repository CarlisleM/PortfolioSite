"use client"
import Link from "next/link"
import React, { useState } from "react"

const items = [
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
]

const NavBar = () => {
    const [selectedSection, setSelectedSection] = useState<string>()

    return (
        <div className="w-full h-52 flex-1">
            <nav className="nav hidden lg:block">
                <ul className="mt-8 w-max">
                    {items.map(({ path, label }) => (
                        <li key={path}>
                            <Link
                                key={path}
                                href={"#" + label.toLowerCase()}
                                className="group flex items-center py-3"
                                onClick={() =>
                                    setSelectedSection(label.toLowerCase())
                                }
                            >
                                <span
                                    className={`${
                                        selectedSection == label.toLowerCase()
                                            ? "w-16 bg-slate-200"
                                            : "w-8 bg-slate-600"
                                    } nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                                />

                                <span
                                    className={`${
                                        selectedSection == label.toLowerCase()
                                            ? "text-slate-200"
                                            : "text-slate-500"
                                    } nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                                >
                                    {label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
