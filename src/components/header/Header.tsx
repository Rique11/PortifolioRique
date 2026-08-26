export const Header = () => {
  return (
    <header className="site-header">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="brand" aria-label="Ir para o início">
          HC<span>.</span>
        </a>
        <a className="header-cta" href="mailto:henriqueGau@therionej.com.br">
          Vamos conversar
        </a>
      </div>
    </header>
  );
};
