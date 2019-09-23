import React from "react";

const ContactInfo = props => {
  return <div onClick={props.onClick}>{props.contact.name}</div>;
};

export default ContactInfo;
