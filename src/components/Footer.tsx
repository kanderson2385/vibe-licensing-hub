const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 K3lvin Kaos Music. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Professional Music for Sync Licensing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;