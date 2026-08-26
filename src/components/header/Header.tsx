export const Header = () => {
  return (
    <header className="site-header">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="brand" aria-label="Ir para o início">
          HC<span>.</span>
        </a>
        <a
          className="header-cta"
          href="https://wa.me/5511989852882?text=Ol%C3%A1%2C%20Henrique!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
          target="_blank"
          rel="noreferrer"
          aria-label="Conversar com Henrique pelo WhatsApp"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
};
