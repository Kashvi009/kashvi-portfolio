const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 lg:px-20">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Kashvi Arora — All rights reserved.</p>
        <p className="font-mono text-xs">
          Built with intent <span className="text-primary">·</span> Designed to ship
        </p>
      </div>
    </footer>
  );
};

export default Footer;
