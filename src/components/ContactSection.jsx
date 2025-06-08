import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { useState } from "react"

export const ContactSection = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        // Here you can add your form submission logic (e.g., emailjs, API call)
    }

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Interested in working together or just want to say hi? Fill out the form below or reach out via my contact details.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Details */}
                    <div className="flex flex-col justify-between bg-card/70 p-7 rounded-2xl shadow-lg border border-primary/20 backdrop-blur-md gradient-border">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-4 text-foreground/90 tracking-tight">Contact Details</h3>
                            <div className="flex flex-col gap-4 text-md text-muted-foreground">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-primary" />
                                    <a href="mailto:tanishqmohod@gmail.com" className="hover:text-primary transition-colors">tanishqmohod67@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-primary" />
                                    <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 7977486094</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Linkedin className="w-5 h-5 text-primary" />
                                    <a href="https://linkedin.com/in/tanishqmohod" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.linkedin.com/in/tanishq-mohod</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Github className="w-5 h-5 text-primary" />
                                    <a href="https://github.com/Tanishq67m" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">github.com/Tanishq67m</a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h4 className="font-semibold text-lg mb-2 text-foreground">Location</h4>
                            <p className="text-muted-foreground">Pune, Maharashtra, India</p>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="bg-card/70 p-7 rounded-2xl shadow-lg border border-primary/20 backdrop-blur-md gradient-border flex flex-col gap-5">
                        <h3 className="text-xl font-bold mb-2 text-foreground/90 tracking-tight">Send a Message</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="px-4 py-3 rounded-lg border border-border bg-background/80 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="px-4 py-3 rounded-lg border border-border bg-background/80 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="px-4 py-3 rounded-lg border border-border bg-background/80 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                        />
                        <button
                            type="submit"
                            className="cosmic-button text-lg px-7 py-3 flex items-center gap-2 justify-center mt-2"
                            disabled={submitted}
                        >
                            {submitted ? "Thank you!" : "Send Message"}
                        </button>
                        {submitted && (
                            <p className="text-green-500 text-center mt-2">Your message has been sent!</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}
