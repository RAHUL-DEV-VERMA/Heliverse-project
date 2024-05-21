import logo from "../assets/MotionArtEffect-logo.png"

const Header: React.FC = () => {

  return (
    <header className="header  ">
      <nav className="header-container">
       <div><img src={logo} alt="" /></div>
       <div>Purchase Now</div>
      </nav>
    </header>
  );
};

export default Header;
