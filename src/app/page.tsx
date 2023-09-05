import ProfileLinks from "../components/ProfileLinks"
import JobExperience from "../components/JobExperience"
import NavBar from "../components/NavBar"
import Project from "../components/Project"
import AboutMe from "@/components/AboutMe"

export default function Home() {
    return (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between">
                        <div className="w-full mt-24 mb-6 flex flex-col">
                            <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Carlisle Miller
                            </span>
                            <span className="mt-3 text-lg tracking-tight text-gray-200 sm:text-xl">
                                Actively seeking employment
                            </span>
                            <span className="mt-4 max-w-sm leading-normal text-slate-400">
                                Aussie web and game developer based in Los
                                Angeles (permanent resident), currently looking
                                to focus on and purse web development
                            </span>
                        </div>
                        <NavBar />
                        <div className="w-1/3 my-24 ml-12 h-12">
                            <ProfileLinks />
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pb-24">
                        <AboutMe />
                        <JobExperience />
                        <section id="projects" className="pt-12">
                            <Project
                                projectTitle={"League Stats Tracker"}
                                projectDescription={"Track some cool stats"}
                                screenshot={"Placeholder"}
                                link={"Placeholder Link"}
                            ></Project>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
