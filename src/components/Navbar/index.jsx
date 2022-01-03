import Logo from "../../assets/logo.png";
import NavbarStyles from "./Navbar.module.css";

const Navbar = () => {
  const links = ["Programs", "Live Projects", "Community", "Job", "About"];
  return (
    <nav className={NavbarStyles.navbar}>
      <div className={NavbarStyles.logo}>
        <img className={NavbarStyles.logoImage} src={Logo} alt="Logo" />
      </div>
      <div className={NavbarStyles.navbarLinks}>
        {links.map((link, idx) => (
          <div key={idx} className={NavbarStyles.navbarLink}>
            {link}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
