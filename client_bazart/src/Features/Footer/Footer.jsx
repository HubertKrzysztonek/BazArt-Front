import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import FooterModal from "./FooterModal";
import "./Footer.css";
const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <MDBContainer className="p-3">
        <MDBRow>
          <MDBCol lg="3" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Pomoc</h5>
            <p className="pomoc">Jak kupować</p>
            <p className="pomoc">Jak sprzedawać</p>
          </MDBCol>

          <MDBCol lg="3" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Mapa strony</h5>
            <p>
              Art is, only because an artist executed an idea into a reality.
              Come join the bazart society and share your work with others.
            </p>
          </MDBCol>
          <MDBCol lg="3" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Kontakt</h5>
            <MDBIcon fas icon="phone-alt" /> +48 555-555-555
            <FooterModal />
          </MDBCol>
          <MDBCol lg="3" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Social media</h5>
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>{" "}
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Copyrights &copy; {new Date().getFullYear()}{" "}
        <a className="text-center p-3" href="http://localhost:3000/">
          All Rights Reserved Company Name.
        </a>
      </div>
    </MDBFooter>
  );
};
export default Footer;
