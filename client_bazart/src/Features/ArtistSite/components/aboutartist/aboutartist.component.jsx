import pic from '../../../../assets/profile.jpg';
import './aboutartist.styles.css';


const AboutArtist = () => {
    return (
        <div className="about" >
            <div className='artist-about-title'>
                <h1 className='artist-about-title-h1'>O MNIE:</h1>
            </div>

            <div className='artist-about-description'>
                <p className='artist-about-description-p'>Description</p>
            </div>

        </div>
    )
  };
  
  export default AboutArtist;