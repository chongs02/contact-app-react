import React, { useState, useRef } from "react";

const ContactCreator = props => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const nameInput = useRef();

  const handleChange = e => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setPhone(e.target.value);
    }
  };

  const handleClick = () => {
    const contact = {
      name: name,
      phone: phone
    };

    props.onCreate(contact);

    setName("");
    setPhone("");
    nameInput.current.focus();
  };

  const handleKeyPress = e => {
    if (e.charCode === 13) {
      handleClick();
    }
  };

  return (
    <div>
      <h1>Create Contact</h1>
      <p>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={handleChange}
          ref={nameInput}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={phone}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </p>
      <button onClick={handleClick}>Create</button>
    </div>
  );
};

ContactCreator.defaultProps = {
  onCreate: () => {
    console.error("onCreate not defined");
  },
  onRemove: () => {
    console.error("onRemove not defined");
  }
};

export default ContactCreator;
