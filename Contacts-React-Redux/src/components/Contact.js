import React, { Component } from "react";
import ContactInfo from "./ContactInfo";
import ContactDetail from "./ContactDetail";
import ContactCreator from "./ContactCreator";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <input name="keyword" placeholder="Search" />

        <ContactDetail />
        <ContactCreator />
      </div>
    );
  }
}
export default Contact;
