import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../../assets/logo.svg';
import lupa from '../../../../assets/lupa.svg';
import favourite from '../../../../assets/favourite.svg';
import menu from '../../../../assets/menu.svg';
import shoppingcart from '../../../../assets/shoppingcart.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/search'>
            <img class='lupa' src={lupa} alt='search'></img>
          </Link>
          <Link className='nav-link' to='/favourite'>
            <img class='favourite' src={favourite} alt='favourite'></img>
          </Link>
          <Link className='nav-link' to='/sign-in'>
          <img class='shoppingcart' src={shoppingcart} alt='shoppingcart'></img>
          </Link>
          <Link className='nav-link' to='/menu'>
          <img class='menu' src={menu} alt='menu'></img>
          </Link>
        </div>
      </div>
  );
};

export default Navigation;