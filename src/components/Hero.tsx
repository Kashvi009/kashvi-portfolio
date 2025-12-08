import { ArrowDown, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-wine-dark/90 via-wine/85 to-wine-dark/95" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 section-padding container-narrow text-center">
        <div className="max-w-4xl mx-auto">
          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-up opacity-0">
            Kashvi Arora
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light mb-4 animate-fade-up opacity-0 stagger-1">
            Personal Brand Strategist
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 animate-fade-up opacity-0 stagger-2">
            <span className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm md:text-base border border-primary-foreground/20">
              1M+ Impressions
            </span>
            <span className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm md:text-base border border-primary-foreground/20">
              Tech x Creativity
            </span>
            <span className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm md:text-base border border-primary-foreground/20">
              Community Builder
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 stagger-3">
            Builder at heart. Helping people discover their voice and amplify their impact through 
            data-driven strategies and creative storytelling.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-up opacity-0 stagger-4">
            <a 
              href="mailto:arorakashvi15@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-gold text-accent-foreground rounded-full font-medium hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail size={18} />
              Get in Touch
            </a>
            <a 
              href="https://linkedin.com/in/kashvi15"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 rounded-full font-medium hover:bg-primary-foreground/20 transition-all duration-300 backdrop-blur-sm"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-primary-foreground/60 animate-fade-up opacity-0 stagger-5">
            <MapPin size={16} />
            <span>New Delhi, India</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary-foreground/50" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
