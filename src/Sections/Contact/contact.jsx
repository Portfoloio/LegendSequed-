import React from "react";
import Form from "./Form";
import { Background, Section, InfoSection } from "./style";
function Info({ icon, title, address }) {
  return (
    <InfoSection>
      <i className={` fas fa-${icon}`}> </i>
      <div>
        <h4> {title}</h4>
        <p> {address}</p>
      </div>
    </InfoSection>
  );
}

function Contact() {
  return (
    <Background>
      <Section>
        <div id="contact-info-form">
          <div className="contact-about">
            <h6> You know to find us </h6>
            <h3> Contact </h3>
          </div>
          <div className="info-only">
            <Info
              icon="map-marker-alt"
              title="Get me there"
              address="A100 Al-Nasser street Gaza City"
            />
            <Info
              icon="envelope"
              title="Get in touch"
              address="Emanadelibrahim2@gmail.com"
            />
            <Info
              icon="phone-alt"
              title="Call Me Now"
              address="+972 598703935"
            />
          </div>
        </div>
        <div className="form-only">
          <Form />
        </div>
      </Section>
    </Background>
  );
}
export default Contact;
