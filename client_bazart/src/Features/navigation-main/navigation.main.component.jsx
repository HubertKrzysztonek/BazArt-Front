import { Outlet, Link } from "react-router-dom";
import { ReactComponent as SearchItem } from "../../assets/lupa.svg";
import { ReactComponent as FavouriteItem } from "../../assets/favourite.svg";
import { ReactComponent as MenuItem } from "../../assets/menu.svg";
import { ReactComponent as ShoppingCartItem } from "../../assets/shoppingcart.svg";
import "./navigation.main.component.style.scss";

const NavigationMain = () => {
  return (
    <>
      <div className="navigation">
        <div className="nav-links-container">
          <Link className="nav-link" to="/search">
            <SearchItem className="lupa" />
          </Link>
          <Link className="nav-link" to="/favourite">
            <FavouriteItem className="favourite" />
          </Link>
          <Link className="nav-link" to="/cart">
            <ShoppingCartItem className="shoppingcart" />
          </Link>
          <Link className="nav-link" to="/menu">
            <MenuItem className="menu" />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationMain;
