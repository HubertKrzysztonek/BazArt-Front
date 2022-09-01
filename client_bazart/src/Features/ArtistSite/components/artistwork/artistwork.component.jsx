import './artistwork.styles.css';
import pic from '../../../../assets/profile.jpg';
import cart from '../../../../assets/shoppingcart.svg';
import love from '../../../../assets/favourite.svg';
import { Link } from 'react-router-dom';

const ArtistWork = () => {
    return (
        <div className="artist-work-container">
            <div className='artist-work-title'>
                <h1 className='title'>MOJE PRACE:</h1>
            </div>

            <div className="column">
                <div className="card">
                    <p>Obraz 1</p>
                    <img src={pic} alt='random'></img>
                    <p>Nazwa</p>
                    <p>Cena</p>
                    <div className='icons'>
                        <Link className='icon-link' to='/'><img src={love} alt="favourite" /></Link>
                        <Link className='icon-link' to='/search'><img src={cart} alt="shoppingcart" /></Link>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <p>Obraz 2</p>
                    <img src={pic} alt='random'></img>
                    <p>Nazwa</p>
                    <p>Cena</p>
                    <div className='icons'>
                        <Link className='icon-link' to='/'><img src={love} alt="favourite" /></Link>
                        <Link className='icon-link' to='/search'><img src={cart} alt="shoppingcart" /></Link>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <p>Obraz 3</p>
                    <img src={pic} alt='random'></img>
                    <p>Nazwa</p>
                    <p>Cena</p>
                    <div className='icons'>
                        <Link className='icon-link' to='/'><img src={love} alt="favourite" /></Link>
                        <Link className='icon-link' to='/search'><img src={cart} alt="shoppingcart" /></Link>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <p>Obraz 4</p>
                    <img src={pic} alt='random'></img>
                    <p>Nazwa</p>
                    <p>Cena</p>
                    <div className='icons'>
                        <Link className='icon-link' to='/'><img src={love} alt="favourite" /></Link>
                        <Link className='icon-link' to='/search'><img src={cart} alt="shoppingcart" /></Link>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <p>Obraz 5</p>
                    <img src={pic} alt='random'></img>
                    <p>Nazwa</p>
                    <p>Cena</p>
                    <div className='icons'>
                        <Link className='icon-link' to='/'><img src={love} alt="favourite" /></Link>
                        <Link className='icon-link' to='/search'><img src={cart} alt="shoppingcart" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default ArtistWork;