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

const Footer = (props) => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div className="text-uppercase">SOCIAL MEDIA</div>
      <div>
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
          style={{ backgroundColor: "#dd4b39" }}
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="google" />
        </MDBBtn>
        <MDBBtn
          floating
          className="m-1"
          style={{ backgroundColor: "#ac2bac" }}
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="instagram" />
        </MDBBtn>

        {/* <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn> */}

        {/* <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn> */}
      </div>
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">BAZART</h5>

            <p>
              Art is, only because an artist executed an idea into a reality.
              Come join the bazart society and share your work with others.
            </p>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">USEFULL LINKS</h5>
            <FooterModal title={props.title} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="http://localhost:3000/">
          bazART
        </a>
      </div>
    </MDBFooter>
  );
};
export default Footer;
