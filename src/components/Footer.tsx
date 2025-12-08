import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container-narrow px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/70 text-sm">
            © {currentYear} Kashvi Arora. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-background/70 text-sm">
            Built with <Heart size={14} className="text-primary fill-primary" /> in New Delhi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
