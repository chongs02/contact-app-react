import React, { useState, useEffect, useRef } from "react";
import ContactInfo from "./ContactInfo";
import ContactDetails from "./ContactDetails";
import ContactCreator from "./ContactCreator";

const Contact = () => {
  const [selectedKey, SetSelectedKey] = useState(-1);
  const [keyword, SetKeyword] = useState("");
  const [contactData, SetContactData] = useState([
    {
      name: "Abet",
      phone: "010-0000-0001"
    },
    {
      name: "Betty",
      phone: "010-0000-0002"
    },
    {
      name: "Charlie",
      phone: "010-0000-0003"
    }
  ]);

  const handleCreate = contact => {
    SetContactData(prevContactData => [...prevContactData, contact]);
  };

  const handleRemove = () => {
    if (selectedKey < 0) {
      return;
    } else {
      const newContactData = contactData;
      newContactData.splice(selectedKey, 1);
      SetContactData(newContactData);
      SetSelectedKey(-1);
    }
  };

  const handleEdit = (name, phone) => {
    const updateData = [...contactData];
    updateData[selectedKey].name = name;
    updateData[selectedKey].phone = phone;

    SetContactData(updateData);
  };

  const handleClick = key => {
    SetSelectedKey(key);
  };

  const handleChange = e => {
    SetKeyword(e.target.value);
  };

  const mapToComponents = data => {
    data.sort();
    data = data.filter(contact => {
      return contact.name.toLowerCase().indexOf(keyword) > -1;
    });
    return data.map((contact, i) => {
      return (
        <ContactInfo contact={contact} key={i} onClick={() => handleClick(i)} />
      );
    });
  };

  const prevContactData = usePrevious(contactData);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useEffect(() => {
    // console.log("useEffect");
    // const data = JSON.stringify(contactData);
    // // console.log(data);
    // window.localStorage.setItem("contactData", data);

    // // SetContactData(JSON.parse(window.localStorage.getItem("contactData")));
    // console.log(prevContactData, contactData);
    if (JSON.stringify(prevContactData) !== JSON.stringify(contactData)) {
      localStorage.contactData = JSON.stringify(contactData);
      console.log(localStorage.contactData);
    }
    return () => {};
  }, [prevContactData, contactData]);

  useEffect(() => {
    // console.log(JSON.parse(window.localStorage.getItem("contactData")));
    SetContactData(JSON.parse(window.localStorage.getItem("contactData")));
  }, []);
  // const loadContents = () => {
  //   try {
  //     const contactData = localStorage.contactData;
  //     SetContactData(JSON.parse(localStorage.contactData));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // setTimeout(loadContents(), 100);

  // const useWillMount = useCallback(() => {
  //   const contactData = localStorage.contactData;
  //   useEffect(() => {
  //     SetContactData(JSON.parse(contactData));
  //   });
  // }, []);

  return (
    <div>
      <h1>Contacts</h1>
      <input
        name="keyword"
        placeholder="Search"
        keyword={keyword}
        onChange={handleChange}
      />
      <div>{mapToComponents(contactData)}</div>
      <ContactDetails
        isSelected={selectedKey !== -1}
        contact={contactData[selectedKey]}
        onRemove={handleRemove}
        onEdit={handleEdit}
      />
      <ContactCreator onCreate={handleCreate} />
    </div>
  );
};

// class Contact extends Component {

//   }

// }
// componentWillMount() {
//   const contactData = localStorage.contactData;

//   if (contactData) {
//     this.setState({
//       contactData: JSON.parse(contactData)
//     });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (
//     JSON.stringify(prevState.contactData) !==
//     JSON.stringify(this.state.contactData)
//   ) {
//     localStorage.contactData = JSON.stringify(this.state.contactData);
//   }
// }

//   render() {

//     return (

//     );
//   }
// }
export default Contact;
