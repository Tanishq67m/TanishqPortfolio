import { Mail, Phone, Linkedin, Github } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="w-full py-8 px-4 bg-background/80 border-t border-primary/20 shadow-inner backdrop-blur-md mt-16">
            <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Social & Contact Links */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <a href="mailto:tanishqmohod67@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                        <Mail className="w-4 h-4" /> tanishqmohod67@gmail.com
                    </a>
                    <a href="tel:+917977486094" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                        <Phone className="w-4 h-4" /> 7977486094
                    </a>
                    <a href="https://www.linkedin.com/in/tanishq-mohod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a href="https://github.com/Tanishq67m" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                        <Github className="w-4 h-4" /> GitHub
                    </a>
                </div>
                {/* Copyright */}
                <div className="text-xs text-muted-foreground text-center md:text-right">
                    &copy; {new Date().getFullYear()} Tanishq Mohod. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
