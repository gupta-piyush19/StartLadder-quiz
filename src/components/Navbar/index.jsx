import { useState } from "react";
import Logo from "../../assets/logo.png";
import NavbarStyles from "./Navbar.module.css";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const links = ["Programs", "Live Projects", "Community", "Jobs", "About"];
  return (
    <>
      <nav
        className={`${NavbarStyles.navbar} ${
          isOpen ? NavbarStyles.navBurger : ""
        }`}
      >
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
        <div className={NavbarStyles.hamburger}>
          <Hamburger toggled={isOpen} onToggle={setOpen} />
        </div>
      </nav>
      {isOpen ? (
        <div className={NavbarStyles.verticalNavbar}>
          <div className={NavbarStyles.verticalLinks}>
            {links.map((link, idx) => (
              <div className={NavbarStyles.verticalLink} key={idx}>
                {link}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
