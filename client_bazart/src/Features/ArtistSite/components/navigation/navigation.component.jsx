import { Link } from "react-router-dom";
import { ReactComponent as SearchItem } from "../../../../assets/lupa.svg";
import { ReactComponent as FavouriteItem } from "../../../../assets/favourite.svg";
import { ReactComponent as MenuItem } from "../../../../assets/menu.svg";
import { ReactComponent as ShoppingCartItem } from "../../../../assets/shoppingcart.svg";
import { ReactComponent as BazartLogo } from "../../../../assets/logo.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation-artist">
        <div className="logo-container-artist">
          <Link className="nav-link" to="/">
            <BazartLogo className="logo-artist" />
          </Link>
        </div>
        <div className="nav-links-container-artist">
          <Link className="nav-link" to="/search">
            <SearchItem className="lupa-artist" />
          </Link>
          <Link className="nav-link" to="/favourite">
            <FavouriteItem className="favourite-artist" />
          </Link>
          <Link className="nav-link" to="/cart">
            <ShoppingCartItem className="shoppingcart-artist" />
          </Link>
          <Link className="nav-link" to="/menu">
            <MenuItem className="menu-artist" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
