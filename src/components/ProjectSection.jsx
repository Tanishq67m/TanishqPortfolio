import { Github, ExternalLink } from "lucide-react"

const projects =[
    {
     id:1,
     title:"Screen Recording Software",
     description:"A desktop application that allows users to record their screen and share it with others.",
     image:"/projects/Project1.png",
     tags: ["Next","Postgres","Tailwind","Bunny.net"], 
     github:"https://github.com/Tanishq67m/ScreenRecApp",
     demoUrl:"https://screen-rec-app.vercel.app"
    },
    {
        id:2,
        title:"AI PDF Summariser",
        description:"Pdf summariser using AI",
        image:"/projects/Homepg1.png",
        tags: ["Next","Postgres","Tailwind","OpenAI"],
        github:"https://github.com/Tanishq67m/PdfSummarySaaS",
        demoUrl:"http://pdf-summary-saas-75zx.vercel.app"
    }

]

export const ProjectSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
                    Featured {" "}
                    <span className="text-primary">
                        Projects
                    </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on recently.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="gradient-border bg-card/70 p-7 rounded-2xl shadow-lg card-hover overflow-hidden border border-primary/20 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl relative backdrop-blur-md"
                            style={{ minHeight: '420px' }}
                        >
                            <div className="h-48 w-full overflow-hidden rounded-xl mb-5 border border-border shadow-md">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-3 animate-fade-in">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs shadow-sm border border-primary/20 backdrop-blur-sm transition-all duration-200 hover:bg-primary/20 hover:scale-105"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-foreground/90 tracking-tight">
                                {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6 min-h-[48px]">
                                {project.description}
                            </p>

                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cosmic-button text-sm px-5 py-2 flex items-center gap-2"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    View Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2 rounded-full border border-primary text-primary font-medium text-sm flex items-center gap-2 transition-colors duration-300 hover:bg-primary/10 hover:border-primary/60"
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Check my GitHub button */}
                <div className="flex justify-center mt-12">
                    <a
                        href="https://github.com/Tanishq67m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cosmic-button flex items-center gap-2 text-lg px-7 py-3 shadow-lg"
                    >
                        <Github className="w-5 h-5" />
                        Check my GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}