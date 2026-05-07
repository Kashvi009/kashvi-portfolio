import { Mail, Linkedin, Download, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const links = [
  { Icon: Mail, label: "arorakashvi15@gmail.com", href: "mailto:arorakashvi15@gmail.com" },
  { Icon: Linkedin, label: "linkedin.com/in/kashvi15", href: "https://linkedin.com/in/kashvi15" },
  {
    Icon: Download,
    label: "Download Resume (PDF)",
    href: "https://drive.google.com/file/d/1tcLdSJ3uyFL95JEgHFkP3vwJNakqrKCL/view?usp=sharing",
  },
];

const Contact = () => {
  return (
    <section className="section-padding relative" id="contact">
      <div className="container-narrow grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <Reveal heading>
          <div className="section-label">
            <span className="w-8 h-px bg-primary" />
            Contact
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.02] mb-5">
            Let's <span className="text-gradient-yellow">build</span> something that matters.
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            Let's build something that matters.
          </p>
        </Reveal>

        <div className="md:pt-4">
          <ul className="divide-y divide-border border-y border-border">
            {links.map(({ Icon, label, href }, i) => (
              <Reveal key={href} delay={i * 80} duration={500} as="li">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 hover:text-primary transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} className="text-primary" />
                    <span className="font-medium">{label}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
