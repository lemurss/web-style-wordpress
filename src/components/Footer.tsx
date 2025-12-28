const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-display text-sm text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Аня Ван • Психолог онлайн
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
