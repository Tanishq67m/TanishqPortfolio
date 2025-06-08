import React, { useState } from "react";

const skills = [
    // Frontend
    { name: "HTML5 & CSS3", level: 95, category: "Frontend" },
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Next.js", level: 80, category: "Frontend" },
    { name: "TypeScript", level: 81, category: "Frontend" },
    { name: "JavaScript (ES6+)", level: 92, category: "Frontend" },
    { name: "Tailwind CSS", level: 87, category: "Frontend" },

    // Backend
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Express.js", level: 85, category: "Backend" },
    { name: "Authentication (OAuth, JWT)", level: 82, category: "Backend" },

    // Database
    { name: "SQL (PostgreSQL, MySQL)", level: 80, category: "Database" },
    { name: "MongoDB", level: 90, category: "Database" },

    // Tools
    { name: "Git & GitHub", level: 90, category: "Tools" },
    { name: "Docker", level: 85, category: "Tools" },
    { name: "Postman", level: 88, category: "Tools" },
    { name: "Figma", level: 82, category: "Tools" },
    { name: "Vercel & Netlify", level: 90, category: "Tools" },
    { name: "VS Code", level: 95, category: "Tools" },
    { name: "AWS EC2", level: 85, category: "Tools" },
];

export const SkillsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        ...Array.from(new Set(skills.map((skill) => skill.category)))
    ];

    const filteredSkills = selectedCategory === "All"
        ? skills
        : skills.filter((skill) => skill.category === selectedCategory);

    return(
        <section id="skills" className="py-24 px-4 relative bg-gradient-to-br from-secondary/40 via-background to-primary/10">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center tracking-tight">
                    My {" "}
                    <span className="text-primary drop-shadow-lg">Skills</span>
                </h2>

                {/* Category Selector */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full font-semibold shadow-md border border-primary/20 transition-colors duration-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/40 hover:bg-primary/10 hover:border-primary/40 ${selectedCategory === category ? 'bg-primary/20 border-primary/60 text-primary' : 'bg-card text-foreground'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {filteredSkills.map((skills,key) => (
                        <div key={key} className="bg-card w-72 max-w-xs mx-auto p-4 rounded-xl shadow-lg card-hover border border-primary/10 transition-transform duration-300 hover:scale-105 hover:border-primary/40 hover:shadow-2xl backdrop-blur-sm">
                            <div className="text-left mb-3">
                                <h3 className="font-semibold text-lg text-primary/90 tracking-wide">{skills.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/30 h-2 rounded-lg overflow-hidden">
                                <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full origin-left animate-[grow_1.5s_ease-in-out]" 
                                style={{width: `${skills.level}%`}}
                                > </div>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground font-medium">{skills.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}