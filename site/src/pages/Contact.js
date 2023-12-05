import React from "react";
import Data from "../Data1.json";
import Back from "../components/Back";
import Heading from "../components/Heading";
import img from "../images/about.jpg";

function Contact() {
  return (
    <div>
      <Back name="Contact Us" title="Contact Us - Where can you reach us?" cover={img} />
      <div className="Contents">
        
          <div className="contact_title">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />
          </div>
          <br />

          <div className="Contents">
            <br />
            <p>
              <b>Address:-</b>
              {Data.data.contact.SubTitle}
              <br />
              {Data.data.contact.Address1}
              <br />
              {Data.data.contact.Address2}
              <br />
              {Data.data.contact.Address3}
              <br />
              {Data.data.contact.Address4}
              <br />
              {Data.data.contact.Address5}
              <br />
              <br />
              <b>Website:-</b>
              {Data.data.contact.Website}
              <br />
              <b>Email:-</b>

              {Data.data.contact.Email}
              <br />
              <b>Phone:-</b>
              {Data.data.contact.Mobile}
            </p>
          </div>
        </div>
        <br />
        <br />
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3672.8343197128333!2d72.4717505!3d22.9931192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4edded74ef%3A0x2209f704b87c01f0!2sSWATI%20TRINITY!5e0!3m2!1sen!2sin!4v1701091348830!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{
            border: 0,
            allowfullscreen: "true",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
            marginBottom: "10vh",
          }}
        ></iframe>
      </div>
  );
}

export default Contact;
