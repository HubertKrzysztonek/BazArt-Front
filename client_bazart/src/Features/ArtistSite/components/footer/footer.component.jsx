import './footer.styles.css';
import { ReactComponent as Logo } from '../../../../assets/logo.svg';
import React from "react";

const Footer = () =>{
    return (
        <div className='box'>
            <div className='container'>
            <div className='row'>
                <div className='column'>
                <p className='heading'>Pomoc</p>
                <a href="#">Jak kupować?</a>
                <a href="#">Jak sprzedawać?</a>
                <a href="#">Jak żyć?</a>
                </div>
                <div className='column'>
                <p className='heading'>Mapa strony</p>
                <a href="#">Home</a>
                <a href="#">Wydarzenia</a>
                <a href="#">Shopping</a>
                <a href="#">Rada Nadzorcza</a>
                </div>
                <div className='column'>
                <p className='heading'>Kontakt</p>
                <a href="#">Tel: 012 3456 789</a>
                <a href="#">E-mail: qwerty@uiop.asd</a>
                <a href="#">Adres: Polska</a>
                <a href="#">Fax: :D</a>
                </div>
                <div className='column'>
                <p className='heading'>Social Media</p>
                <a href="#">
                    <i className="fab fa-facebook-f">
                    <span style={{ marginLeft: "10px" }}>
                        Facebook
                    </span>
                    </i>
                </a>
                <a href="#">
                    <i className="fab fa-instagram">
                    <span style={{ marginLeft: "10px" }}>
                        Instagram
                    </span>
                    </i>
                </a>
                <a href="#">
                    <i className="fab fa-twitter">
                    <span style={{ marginLeft: "10px" }}>
                        Twitter
                    </span>
                    </i>
                </a>
                <a href="#">
                    <i className="fab fa-youtube">
                    <span style={{ marginLeft: "10px" }}>
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
