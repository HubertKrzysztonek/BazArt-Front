import './banner.styles.css';
import profile from '../../../../assets/profile.jpg';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Banner = (props) => {
    const [nick, setNick] = useState();
    const par = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5120/api/product/${par.userId}`)
        .then((response) => {
            console.log(response)
            setNick(response.data.name)});
        }, []);
    
    return (
    <div className="main-banner">
        <div className='profile-container'>
            <img className="img-profile" src={profile} alt="img-profile"></img>
        </div>

        <div className='artist-nick'>
            <h1>{nick}</h1>
        </div>
    </div>
    )
  };
  
  export default Banner;