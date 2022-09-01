import './footer.styles.css';
import { ReactComponent as Logo } from '../../../../assets/logo.svg';
import React from "react";

const Footer = () =>{
    return (
        <div className='box-footer'>
            <div className='container-footer'>
            <div className='row-footer'>
                <div className='column-footer'>
                <p className='heading-p'>Pomoc</p>
                <a className='footer-a-artist' href="#">Jak kupować?</a>
                <a className='footer-a-artist' href="#">Jak sprzedawać?</a>
                <a className='footer-a-artist' href="#">Jak zyć?</a>
                </div>
                <div className='column-footer'>
                <p className='heading-p'>Mapa strony</p>
                <a className='footer-a-artist' href="#">Home</a>
                <a className='footer-a-artist' href="#">Wydarzenia</a>
                <a className='footer-a-artist' href="#">Shopping</a>
                <a className='footer-a-artist' href="#">Rada Nadzorcza</a>
                </div>
                <div className='column-footer'>
                <p className='heading-p'>Kontakt</p>
                <a className='footer-a-artist' href="#">Tel: 012 3456 789</a>
                <a className='footer-a-artist' href="#">E-mail: qwerty@uiop.asd</a>
                <a className='footer-a-artist' href="#">Adres: Polska</a>
                <a className='footer-a-artist' href="#">Fax: :D</a>
                </div>
                <div className='column-footer'>
                <p className='heading-p'>Social Media</p>
                <a className='footer-a-artist' href="#">
                    <i className="fab fa-facebook-f">
                    <span className='footer-a-artist' style={{ marginLeft: "10px" }}>
                        Facebook
                    </span>
                    </i>
                </a>
                <a className='footer-a-artist' href="#">
                    <i className="fab fa-instagram">
                    <span className='footer-a-artist' style={{ marginLeft: "10px" }}>
                        Instagram
                    </span>
                    </i>
                </a>
                <a className='footer-a-artist' href="#">
                    <i className="fab fa-twitter">
                    <span className='footer-a-artist' style={{ marginLeft: "10px" }}>
                        Twitter
                    </span>
                    </i>
                </a>
                <a className='footer-a-artist' href="#">
                    <i className="fab fa-youtube">
                    <span className='footer-a-artist' style={{ marginLeft: "10px" }}>
                        Youtube
                    </span>
                    </i>
                </a>
                <div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
};
 
export default Footer;
