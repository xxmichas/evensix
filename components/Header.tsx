import Logo from "../public/logo.svg";

const Header = () => {
  return (
    <header>
      <Logo />
      <button className="--nav-link">Menu</button>
    </header>
  );
};

export default Header;
