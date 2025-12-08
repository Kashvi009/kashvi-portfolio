import { Mail, Linkedin, MapPin, Heart, Camera, Mic, Theater } from "lucide-react";

const Contact = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden" id="contact">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="container-narrow relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Create Something{" "}
            <span className="text-primary">Amazing</span>
          </h2>

          {/* Personal Touch */}
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When I'm not working on a project, you'll find me on stage, creating content, 
              working with a camera, or speaking at a podcast. Theatre, storytelling, and 
              building communities is what I LOVE.
            </p>

            {/* Passion Icons */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center" title="Theatre">
                <Theater className="text-primary" size={20} />
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center" title="Photography">
                <Camera className="text-primary" size={20} />
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center" title="Podcasts">
                <Mic className="text-primary" size={20} />
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center" title="Community">
                <Heart className="text-primary" size={20} />
              </div>
            </div>

            <p className="text-muted-foreground">
              My journey has been a mix of building products, leading people, and telling stories. 
              I'm grateful it's taken me from global internships to impactful speaker sessions, 
              and to winning national-level awards for innovation and leadership.
            </p>
          </div>
        </div>

        {/* Contact Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-gradient-to-br from-wine-dark via-primary to-wine-dark rounded-3xl p-8 md:p-10 text-center shadow-wine">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              For brand campaigns, let's connect!
            </h3>

            <div className="space-y-4 mb-8">
              <a 
                href="mailto:arorakashvi15@gmail.com"
                className="flex items-center justify-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
                <span>arorakashvi15@gmail.com</span>
              </a>
              <a 
                href="https://linkedin.com/in/kashvi15"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
                <span>linkedin.com/in/kashvi15</span>
              </a>
              <div className="flex items-center justify-center gap-3 text-primary-foreground/70">
                <MapPin size={20} />
                <span>New Delhi, Delhi, India</span>
              </div>
            </div>

            <a 
              href="mailto:arorakashvi15@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-accent-foreground rounded-full font-semibold hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail size={18} />
              Write to Me
            </a>

            <p className="mt-6 text-primary-foreground/60 text-sm">
              We'll be speaking soon! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
