import { Mail, Linkedin, MapPin, Download, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="section-padding relative" id="contact">
      <div className="container-narrow">
        <div className="relative card-dark p-8 md:p-16 overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="section-label justify-center">
              <span className="w-8 h-px bg-primary" />
              Contact
              <span className="w-8 h-px bg-primary" />
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let's build something <span className="text-gradient-yellow">impactful</span>.
            </h2>

            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Open to internships, full-time roles, freelance briefs & collaborations across product, growth & strategy.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="mailto:arorakashvi15@gmail.com"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold transition-all hover:shadow-yellow hover:scale-[1.02]"
              >
                <Mail size={18} />
                Get in Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/1tcLdSJ3uyFL95JEgHFkP3vwJNakqrKCL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary border border-border text-foreground rounded-full font-semibold transition-all hover:border-accent/50 hover:text-accent"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-10 border-t border-border">
              <a href="mailto:arorakashvi15@gmail.com" className="group flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} />
                <span className="text-sm">arorakashvi15@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/kashvi15" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={16} />
                <span className="text-sm">linkedin.com/in/kashvi15</span>
              </a>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span className="text-sm">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
