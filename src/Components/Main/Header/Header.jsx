import NavItem from "./Navbar/NavItem";

const Header = () => {
  return (
    <div className="fixed w-full z-10 bg-color drop-shadow-md">
      <div className="my-container">
        <NavItem />
      </div>
    </div>
  );
};

export default Header;
