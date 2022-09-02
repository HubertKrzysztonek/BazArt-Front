import { useParams } from "react-router-dom";
import AboutArtist from "./components/aboutartist/aboutartist.component";
import ArtistContact from "./components/artistcontact/artistcontact.component";
import ArtistEvents from "./components/artistevents/artistevents.component";
// import ArtistWork from "./components/artistwork/artistwork.component";
import Banner from "./components/banner/artistbanner.component";
import Footer from "./components/footer/footer.component";
import Navigation from "./components/navigation/navigation.component";
import WorkTest from "./components/worktest/worktest.component";

const ArtistSite = (props) => {
  const par = useParams();
  return (
    <div>
      <Navigation />
      <Banner />
      {/* <ArtistWork /> */}
      <WorkTest />
      <ArtistEvents />
      <AboutArtist />
      <ArtistContact />
      <Footer />
    </div>
  );
};

export default ArtistSite;
