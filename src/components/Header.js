import headerLogo from '../image/Vector.svg';

function Header() {

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
    </header>
  );
}

export default Header;