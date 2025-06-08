import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About
                    {" "}
                    <span className="text-primary">
                        Me
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch justify-center">
                    <div className="flex flex-col justify-between h-full space-y-6 bg-card/70 rounded-xl shadow-lg p-8 border border-border">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer & Tech Enthusiast
                        </h3>

                        <p className="text-muted-foreground">
                        I'm Tanishq Mohod, a Full Stack Developer who specializes in building scalable, efficient web applications using modern technologies. I'm passionate about clean code, performance optimization, and creating tools that solve real-world problems. 
                        </p>

                        <p className="text-muted-foreground">
                        Beyond just writing code, I'm driven by curiosity and a love for solving complex problems with elegant solutions. I enjoy breaking down systems, optimizing workflows, and continuously leveling up my skills..
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>
                        <a href="/src/assets/TANISHQCV1.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            Download CV
                        </a>


                    </div>
                    </div>

                    <div className="flex flex-col h-full justify-between gap-4 bg-card/70 rounded-xl shadow-lg border border-border p-8 relative">
                        {/* Vertical accent bar */}
                        <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-primary/80 to-primary/40 rounded-full" style={{ minHeight: '60%' }}></div>
                        <div className="flex flex-col gap-6 z-10">
                            <div className="gradient-border p-6 card-hover bg-background/80 rounded-lg shadow-md border border-border transition-transform duration-300 hover:scale-105">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold">
                                            Full Stack Developer
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Building scalable, efficient web applications using modern technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover bg-background/80 rounded-lg shadow-md border border-border transition-transform duration-300 hover:scale-105">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <User className="h-6 w-6 text-primary" />
                                    </div>  
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold">
                                            Code Astronaut
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Exploring new tech stacks, frameworks, and patterns to continuously push my dev boundaries.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover bg-background/80 rounded-lg shadow-md border border-border transition-transform duration-300 hover:scale-105">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold">
                                            Project Management
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Leading projects from ideation to delivery, ensuring smooth execution and timely delivery.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}