import React, { Component } from "react";
class ContactDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const datails = (
      <div>
        <p>contactName</p>
        <p>contactPhone</p>
      </div>
    );
    const blank = <div>Not Selected</div>;

    const edit = (
      <div>
        <p>
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="phone" placeholder="phone" />
        </p>
      </div>
    );

    return (
      <div>
        <h1>Details</h1>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    );
  }
}
export default ContactDetail;
