import * as Style from "./menu-style";
import { ReactComponent as Logout } from "assets/icons/logout.svg";
import logo from "assets/logo_patterns/logo.png";
import { RoutesPath } from "types/routes";
import { NavItem } from "./menu-types";

interface MenuProps {
  active: RoutesPath;
  navItems: NavItem[];
}

const Menu = ({ active, navItems }: MenuProps) => {
  return (
    <Style.Menu>
      <nav>
        <Style.MenuLogo>
          <img src={logo} alt="Logo do menu" />
        </Style.MenuLogo>

        {navItems.map((navItem, index) => (
          <Style.MenuItem key={`MenuItem-${index}`} active={navItem.path === active}>
            <Style.MenuItemButton active={navItem.path === active}>
                {navItem.icon}
            </Style.MenuItemButton>
          </Style.MenuItem>
        ))}
      </nav>

      <Style.MenuItemLogout>
        <Logout />
      </Style.MenuItemLogout>
    </Style.Menu>
  );
};

export default Menu;
