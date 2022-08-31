import './banner.styles.css';
import profile from '../../../../assets/profile.jpg';
import { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
    const [data, setData] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5120/api/product/1`)
        .then((response) => {
            console.log(response)
            setData(response.data.name)});
        }, []);
    
    return (
    <div className="main-banner">
        <div className='profile-container'>
            <img className="img-profile" src={profile} alt="img-profile"></img>
        </div>

        <div className='artist-nick'>
            <h1>{data}</h1>
        </div>
    </div>
    )
  };
  
  export default Banner;