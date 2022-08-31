import ArtistEvents from "./components/artistevents/artistevents.component";
import ArtistWork from "./components/artistwork/artistwork.component";
import Banner from "./components/banner/artistbanner.component";
import Navigation from "./components/navigation/navigation.component";

const ArtistSite = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <ArtistWork />
            <ArtistEvents />
            
        </div>
  )
};
  
  export default ArtistSite;