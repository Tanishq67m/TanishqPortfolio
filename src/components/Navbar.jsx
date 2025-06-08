import { useState, useEffect } from "react"
import { cn } from "../lib/utils"
import { X, Menu } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-2 bg-background/80 backdrop-blur-md shadow-md border-b border-border"
                    : "py-4 bg-background/60 backdrop-blur-md border-b border-border"
            )}
        >
            <div className="container max-w-6xl mx-auto flex items-center px-4">
                {/* Logo */}
                <a
                    className="text-2xl font-extrabold flex items-center tracking-tight text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg"
                    href="#hero"
                >
                    <span className="relative z-10 flex items-center gap-1">
                        <span className="text-glow text-foreground">Tanishq's</span>
                        <span className="hidden sm:inline text-primary">Portfolio</span>
                    </span>
                </a>

                {/* Spacer to push nav items and theme toggle to the right */}
                <div className="flex-1" />

                {/* Desktop nav */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item, key) => (
                        <a
                            href={item.href}
                            key={key}
                            className="uppercase tracking-wide font-semibold text-sm px-3 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Theme toggle (desktop only) */}
                <div className="hidden md:block ml-4">
                  <ThemeToggle />
                </div>

                {/* Mobile nav toggle */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 rounded-full text-foreground bg-card/70 shadow-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 z-50 transition-all duration-200"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile nav menu */}
                <div
                    className={cn(
                        "fixed inset-0 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl z-40 transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto scale-100"
                            : "opacity-0 pointer-events-none scale-95"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-2xl font-bold items-center animate-fade-in">
                        {navItems.map((item, key) => (
                            <a
                                href={item.href}
                                key={key}
                                className="uppercase tracking-wide px-6 py-3 rounded-xl text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}