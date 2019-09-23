import React, { useState } from "react";

const ContactDetails = props => {
  const [isEdit, SetIsEdit] = useState(false);
  const [name, SetName] = useState("");
  const [phone, SetPhone] = useState("");

  const handleToggle = () => {
    if (!isEdit) {
      SetName(props.contact.name);
      SetPhone(props.contact.phone);
    } else {
      handleEdit();
    }
    SetIsEdit(!isEdit);
  };

  const handleChange = e => {
    if (e.target.name === "name") {
      SetName(e.target.value);
    } else {
      SetPhone(e.target.value);
    }
  };

  const handleEdit = () => {
    props.onEdit(name, phone);
  };

  const handleKeyPress = e => {
    if (e.charCode === 13) {
      handleToggle();
    }
  };

  const details = (
    <div>
      <p>{props.contact.name}</p>
      <p>{props.contact.phone}</p>
    </div>
  );
  const blank = <div>Not Selected</div>;

  const edit = (
    <div>
      <p>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={phone}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </p>
    </div>
  );

  const view = isEdit ? edit : details;

  return (
    <div>
      <h1>Details</h1>
      {props.isSelected ? view : blank}
      <button onClick={handleToggle}>{isEdit ? "OK" : "Edit"}</button>
      <button onClick={props.onRemove}>Remove</button>
    </div>
  );
};

ContactDetails.defaultProps = {
  contact: {
    name: "",
    phone: ""
  }
};

export default ContactDetails;
