import pic from '../../../../assets/profile.jpg';
import './artistevents.styles.css';



const ArtistEvents = () => {
    return (
        
        <div>
            <div className='artist-event-title'>
                <h1 className='artist-event-title-h1'>MOJE WYDARZENIA:</h1>
            </div>

            <div className="event-container">
            <div className="d-flex mb-3" >
                <div className="p-3 flex-fill cover20">
                    <img className="event-image" src={pic} alt='pic'></img>
                </div>
                <div className="p-3 flex-fill cover40">
                    <p className="event-description">
                        Event description Event description Event description Event description Event description Event description 
                        Event description Event description Event description Event description Event description Event description
                    
                       
                    </p>
                </div>
                <div className="p-3 flex-fill cover40">
                    <p className="event-advert">
                        Advert example Advert example Advert example Advert example Advert example Advert example Advert example
                        Advert example Advert example Advert example Advert example Advert example Advert example Advert example
                        
                    </p>
                </div>
                
            </div>

            </div>
        </div>
    )
  };
  
  export default ArtistEvents;